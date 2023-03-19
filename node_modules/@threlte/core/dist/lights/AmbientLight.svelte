<script>import { AmbientLight as ThreeAmbientLight } from 'three';
import LightInstance from '../instances/LightInstance.svelte';
export let position = undefined;
export let scale = undefined;
export let rotation = undefined;
export let lookAt = undefined;
export let castShadow = undefined;
export let receiveShadow = undefined;
export let frustumCulled = undefined;
export let renderOrder = undefined;
export let visible = undefined;
export let userData = undefined;
export let dispose = undefined;
export let viewportAware = false;
export let inViewport = false;
export let color = undefined;
export let intensity = undefined;
export const light = new ThreeAmbientLight(color, intensity);
</script>

<LightInstance
  {light}
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
  bind:inViewport
  on:viewportenter
  on:viewportleave
  {color}
  {intensity}
>
  <slot />
</LightInstance>
