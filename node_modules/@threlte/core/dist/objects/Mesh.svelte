<script>import { Mesh as ThreeMesh } from 'three';
import { useThrelte } from '../hooks/useThrelte';
import MeshInstance from '../instances/MeshInstance.svelte';
import DisposableObject from '../internal/DisposableObject.svelte';
// MeshInstance
export let position = undefined;
export let scale = undefined;
export let rotation = undefined;
export let viewportAware = false;
export let inViewport = false;
export let castShadow = undefined;
export let receiveShadow = undefined;
export let frustumCulled = undefined;
export let renderOrder = undefined;
export let visible = undefined;
export let userData = undefined;
export let dispose = undefined;
export let interactive = false;
export let ignorePointer = false;
export let lookAt = undefined;
// self
export let geometry;
export let material;
let previousMaterial = material;
let previousGeometry = geometry;
const { invalidate } = useThrelte();
export const mesh = new ThreeMesh(geometry, material);
const getMesh = () => mesh;
$: {
    if (material !== previousMaterial) {
        getMesh().material = material;
        invalidate('Mesh: material changed');
    }
    else {
        invalidate('Mesh: material props changed');
    }
    previousMaterial = material;
}
$: {
    if (geometry !== previousGeometry) {
        getMesh().geometry = geometry;
        invalidate('Mesh: geometry changed');
    }
    else {
        invalidate('Mesh: geometry props changed');
    }
    previousGeometry = geometry;
}
</script>

<DisposableObject {dispose} object={geometry} />
<DisposableObject {dispose} object={material} />

<MeshInstance
  {mesh}
  {position}
  {scale}
  {rotation}
  {lookAt}
  {castShadow}
  {receiveShadow}
  {frustumCulled}
  {renderOrder}
  {visible}
  {interactive}
  {ignorePointer}
  {userData}
  {dispose}
  on:click
  on:contextmenu
  on:pointerup
  on:pointerdown
  on:pointerenter
  on:pointerleave
  on:pointermove
  {viewportAware}
  bind:inViewport
  on:viewportenter
  on:viewportleave
>
  <slot />
</MeshInstance>
