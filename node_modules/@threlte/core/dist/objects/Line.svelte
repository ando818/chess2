<script>import { BufferGeometry, Line as ThreeLine, Vector3 } from 'three';
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
export let geometry = undefined;
export let points = [];
export let material;
let previousMaterial = material;
let previousGeometry = geometry;
let previousPoints = points;
const tempGeometry = new BufferGeometry();
const { invalidate } = useThrelte();
const maybeSetGeometryFromPoints = (points) => {
    if (!points)
        return;
    const v3Array = points.map((p) => (p instanceof Vector3 ? p : new Vector3().fromArray(p)));
    tempGeometry.setFromPoints(v3Array);
};
const useGeometry = (geometry) => !!geometry;
if (!geometry) {
    maybeSetGeometryFromPoints(points);
}
export const line = new ThreeLine(useGeometry(geometry) ? geometry : tempGeometry, material);
const getLine = () => line;
$: {
    if (material !== previousMaterial) {
        getLine().material = material;
        invalidate('Line: material changed');
    }
    else {
        invalidate('Line: material props changed');
    }
    previousMaterial = material;
}
$: {
    if (geometry !== previousGeometry) {
        if (useGeometry(geometry)) {
            getLine().geometry = geometry;
            invalidate('Line: geometry changed');
        }
    }
    else {
        if (useGeometry(geometry)) {
            invalidate('Line: geometry props changed');
        }
    }
    previousGeometry = geometry;
}
$: {
    if (previousPoints !== points) {
        if (!geometry) {
            maybeSetGeometryFromPoints(points);
            getLine().geometry = tempGeometry;
        }
        previousPoints = points;
    }
}
</script>

<DisposableObject {dispose} object={geometry} />
<DisposableObject {dispose} object={material} />

<!-- Force disposal: not user-provided -->
<DisposableObject dispose object={tempGeometry} />

<LineInstance
  {line}
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
