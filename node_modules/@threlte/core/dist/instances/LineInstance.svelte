<script>import InteractiveObject from '../internal/InteractiveObject.svelte';
import Object3DInstance from './Object3DInstance.svelte';
export let line;
export let position = undefined;
export let scale = undefined;
export let rotation = undefined;
export let lookAt = undefined;
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
</script>

<Object3DInstance
  object={line}
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
  {viewportAware}
  on:viewportenter
  on:viewportleave
  bind:inViewport
>
  <slot />
</Object3DInstance>

<InteractiveObject
  object={line}
  {interactive}
  {ignorePointer}
  on:click
  on:contextmenu
  on:pointerup
  on:pointerdown
  on:pointerenter
  on:pointerleave
  on:pointermove
/>
