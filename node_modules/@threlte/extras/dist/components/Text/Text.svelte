<script>import { createEventDispatcher, onDestroy } from 'svelte';
import { Text as ThreeText } from 'troika-three-text';
import { useThrelte, MeshInstance } from '@threlte/core';
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
export let text = undefined;
export let anchorX = undefined;
export let anchorY = undefined;
export let curveRadius = undefined;
export let font = undefined;
export let fontSize = undefined;
export let letterSpacing = undefined;
export let lineHeight = undefined;
export let maxWidth = undefined;
export let overflowWrap = undefined;
export let textAlign = undefined;
export let textIndent = undefined;
export let whiteSpace = undefined;
export let material = undefined;
export let color = undefined;
export let depthOffset = undefined;
export let clipRect = undefined;
export let glyphGeometryDetail = undefined;
export let sdfGlyphSize = undefined;
export let outlineWidth = undefined;
export let outlineColor = undefined;
export let outlineOpacity = undefined;
export let outlineBlur = undefined;
export let outlineOffsetX = undefined;
export let outlineOffsetY = undefined;
export let strokeWidth = undefined;
export let strokeColor = undefined;
export let strokeOpacity = undefined;
export let fillOpacity = undefined;
export let direction = undefined;
export const textObject = new ThreeText();
const getTextObject = () => textObject;
const { invalidate } = useThrelte();
const dispatch = createEventDispatcher();
$: {
    const to = getTextObject();
    if (text !== undefined)
        to.text = text;
    if (anchorX !== undefined)
        to.anchorX = anchorX;
    if (anchorY !== undefined)
        to.anchorY = anchorY;
    if (curveRadius !== undefined)
        to.curveRadius = curveRadius;
    if (font !== undefined)
        to.font = font;
    if (fontSize !== undefined)
        to.fontSize = fontSize;
    if (letterSpacing !== undefined)
        to.letterSpacing = letterSpacing;
    if (lineHeight !== undefined)
        to.lineHeight = lineHeight;
    if (maxWidth !== undefined)
        to.maxWidth = maxWidth;
    if (overflowWrap !== undefined)
        to.overflowWrap = overflowWrap;
    if (textAlign !== undefined)
        to.textAlign = textAlign;
    if (textIndent !== undefined)
        to.textIndent = textIndent;
    if (whiteSpace !== undefined)
        to.whiteSpace = whiteSpace;
    if (material)
        to.material = material;
    if (color !== undefined)
        to.color = color;
    if (depthOffset !== undefined)
        to.depthOffset = depthOffset;
    if (clipRect !== undefined)
        to.clipRect = clipRect;
    if (glyphGeometryDetail !== undefined)
        to.glyphGeometryDetail = glyphGeometryDetail;
    if (sdfGlyphSize !== undefined)
        to.sdfGlyphSize = sdfGlyphSize;
    if (outlineWidth !== undefined)
        to.outlineWidth = outlineWidth;
    if (outlineColor !== undefined)
        to.outlineColor = outlineColor;
    if (outlineOpacity !== undefined)
        to.outlineOpacity = outlineOpacity;
    if (outlineBlur !== undefined)
        to.outlineBlur = outlineBlur;
    if (outlineOffsetX !== undefined)
        to.outlineOffsetX = outlineOffsetX;
    if (outlineOffsetY !== undefined)
        to.outlineOffsetY = outlineOffsetY;
    if (strokeWidth !== undefined)
        to.strokeWidth = strokeWidth;
    if (strokeColor !== undefined)
        to.strokeColor = strokeColor;
    if (strokeOpacity !== undefined)
        to.strokeOpacity = strokeOpacity;
    if (fillOpacity !== undefined)
        to.fillOpacity = fillOpacity;
    if (direction !== undefined)
        to.direction = direction;
    to.sync(() => {
        invalidate('Text: sync finished');
        dispatch('sync');
    });
}
</script>

<MeshInstance
  mesh={textObject}
  {lookAt}
  {position}
  {scale}
  {rotation}
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
