<script>import { DisposableObject, LineSegments, useParent, useThrelte } from '@threlte/core';
import { onDestroy } from 'svelte';
import { Color, EdgesGeometry, LineBasicMaterial, Mesh } from 'three';
export let color = undefined;
export let material = undefined;
export let threshold = undefined;
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
const parent = useParent();
if (!$parent || $parent.type !== 'Mesh')
    throw new Error('Edges: component must be a child of a Mesh');
const parentMesh = $parent;
const geometry = 'clone' in parentMesh.geometry ? parentMesh.geometry.clone() : parentMesh.geometry;
const edgesGeometry = new EdgesGeometry(geometry, threshold);
const { invalidate } = useThrelte();
let activeMaterial = !!material
    ? material
    : color
        ? new LineBasicMaterial({
            color
        })
        : new LineBasicMaterial();
let previousMaterial = material;
$: {
    if (previousMaterial !== material) {
        // material changed
        if (material) {
            // there's actually a material, prioritize that
            activeMaterial = material;
            invalidate('Edges: material changed');
        }
        previousMaterial = material;
    }
}
let previousColor = color;
$: {
    if (previousColor !== color) {
        // color changed
        if (material)
            break $; // break if there's a material set
        const mat = activeMaterial;
        mat.color = new Color(color);
        invalidate('Edges: color changed');
        previousColor = color;
    }
}
onDestroy(() => {
    edgesGeometry.dispose();
});
</script>

<!-- Force disposal: not user-provided -->
<DisposableObject dispose object={edgesGeometry} />

<DisposableObject {dispose} object={activeMaterial} />

{#if edgesGeometry}
  <LineSegments
    geometry={edgesGeometry}
    material={activeMaterial}
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
  </LineSegments>
{/if}
