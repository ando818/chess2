<script>import { LineSegments as ThreeLineSegments } from 'three';
import { useThrelte } from '../hooks/useThrelte';
import LineInstance from '../instances/LineInstance.svelte';
import DisposableObject from '../internal/DisposableObject.svelte';
// LineInstance
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
export const lineSegments = new ThreeLineSegments(geometry, material);
const getLineSegments = () => lineSegments;
$: {
    if (material !== previousMaterial) {
        getLineSegments().material = material;
        invalidate('LineSegments: material changed');
    }
    else {
        invalidate('LineSegments: material props changed');
    }
    previousMaterial = material;
}
$: {
    if (geometry !== previousGeometry) {
        getLineSegments().geometry = geometry;
        invalidate('LineSegments: geometry changed');
    }
    else {
        invalidate('LineSegments: geometry props changed');
    }
    previousGeometry = geometry;
}
</script>

<DisposableObject {dispose} object={geometry} />
<DisposableObject {dispose} object={material} />

<LineInstance
  line={lineSegments}
  {position}
  {scale}
  {rotation}
  {lookAt}
  {castShadow}
  {receiveShadow}
  {frustumCulled}
  {renderOrder}
  {visible}
  {userData}
  {dispose}
  {interactive}
  {ignorePointer}
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
</LineInstance>
