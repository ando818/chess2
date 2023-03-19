<script context="module">import { onDestroy, onMount, setContext } from 'svelte';
import { writable } from 'svelte/store';
import { PCFSoftShadowMap } from 'three';
import { useParentSize } from './hooks/useParentSize';
import SceneGraphObject from './internal/SceneGraphObject.svelte';
import { browser } from './lib/browser';
import { createContexts } from './lib/contexts';
import { setDefaultCameraAspectOnSizeChange } from './lib/defaultCamera';
import { useFrameloop } from './lib/frameloop';
import { useEventRaycast } from './lib/interactivity';
import { createRendererAndComposer, setRendererAndComposerSize, setRendererColorOutput, setRendererShadows } from './lib/renderer';
const invalidationHandlers = new Set();
export const invalidateGlobally = (debugFrameloopMessage) => {
    invalidationHandlers.forEach((fn) => fn(debugFrameloopMessage));
};
</script>

<script>export let dpr = browser ? window.devicePixelRatio : 1;
export let flat = false;
export let linear = false;
export let frameloop = 'demand';
export let debugFrameloop = false;
export let shadows = true;
export let shadowMapType = PCFSoftShadowMap;
export let size = undefined;
export let rendererParameters = undefined;
let canvas;
let initialized = false;
// user size as a store
const userSize = writable(size);
$: userSize.set(size);
// in case the user didn't define a fixed size, use the parent elements size
const { parentSize, parentSizeAction } = useParentSize();
// creating and setting the contexts
const contexts = createContexts(linear, flat, dpr, userSize, parentSize, debugFrameloop, frameloop);
const { getCtx, renderCtx, disposalCtx } = contexts;
// context bindings
export const { ctx, rootCtx, audioCtx } = contexts;
setDefaultCameraAspectOnSizeChange(ctx);
// add invalidation handler to global invalidation handler set
invalidationHandlers.add(ctx.invalidate);
onDestroy(() => {
    invalidationHandlers.delete(ctx.invalidate);
});
// destructure stores on top level
const { size: derivedSize, scene } = ctx;
const { flat: flatStore, linear: linearStore, dpr: dprStore } = rootCtx;
setContext('threlte-parent', writable(scene));
$: $linearStore = linear;
$: $flatStore = flat;
$: $dprStore = dpr;
$: setRendererColorOutput(getCtx(), $linearStore, $flatStore);
$: setRendererAndComposerSize(getCtx(), $derivedSize, $dprStore);
$: setRendererShadows(getCtx(), shadows, shadowMapType);
onMount(() => {
    if (!canvas)
        return;
    createRendererAndComposer(ctx, canvas, rendererParameters);
    setRendererColorOutput(ctx, $linearStore, $flatStore);
    setRendererAndComposerSize(ctx, $derivedSize, $dprStore);
    setRendererShadows(ctx, shadows, shadowMapType);
    initialized = true;
});
useFrameloop(ctx, rootCtx, renderCtx, disposalCtx);
const { onClick, onContextMenu, onPointerDown, onPointerMove, onPointerUp } = useEventRaycast(ctx, rootCtx, renderCtx);
onDestroy(() => {
    disposalCtx.dispose(true);
});
</script>

<canvas
  use:parentSizeAction
  bind:this={canvas}
  on:click={onClick}
  on:contextmenu={onContextMenu}
  on:pointerup={onPointerUp}
  on:pointerdown={onPointerDown}
  on:pointermove={onPointerMove}
  on:pointerenter={() => getCtx().pointerOverCanvas.set(true)}
  on:pointerleave={() => getCtx().pointerOverCanvas.set(false)}
>
  {#if initialized}
    <SceneGraphObject object={ctx.scene}>
      <slot />
    </SceneGraphObject>
  {/if}
</canvas>

<style>
  canvas {
    display: block;
  }
</style>
