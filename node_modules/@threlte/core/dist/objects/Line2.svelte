<script>import { onDestroy } from 'svelte';
import { Vector3 } from 'three';
import { Line2 as ThreeLine2 } from 'three/examples/jsm/lines/Line2';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry';
import { useThrelte } from '../hooks/useThrelte';
import MeshInstance from '../instances/MeshInstance.svelte';
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
export let points = [];
export let material;
let fallbackGeometry = new LineGeometry();
fallbackGeometry.setPositions([0, 0, 0]);
let geometry = undefined;
export const line2 = new ThreeLine2(undefined, material);
onDestroy(() => {
    fallbackGeometry.dispose();
    geometry?.dispose();
});
const getLine = () => line2;
const { invalidate } = useThrelte();
$: {
    geometry?.dispose();
    if (points.length) {
        geometry = new LineGeometry();
        geometry.setPositions(points.map((p) => (p instanceof Vector3 ? p.toArray() : p)).flat());
        line2.geometry = geometry;
    }
    else {
        line2.geometry = fallbackGeometry;
    }
    line2.computeLineDistances();
    invalidate('Line2: points changed');
}
let previousMaterial = material;
$: {
    if (material !== previousMaterial) {
        getLine().material = material;
        invalidate('Line2: material changed');
    }
    else {
        invalidate('Line2: material props changed');
    }
    previousMaterial = material;
}
</script>

<DisposableObject {dispose} object={geometry} />

<!-- Force disposal: not user-provided -->
<DisposableObject dispose object={fallbackGeometry} />

<MeshInstance
  mesh={line2}
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
</MeshInstance>
