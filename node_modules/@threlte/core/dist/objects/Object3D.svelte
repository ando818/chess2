<script>import { Object3D as ThreeObject3D } from 'three';
import Object3DInstance from '../instances/Object3DInstance.svelte';
// Object3DInstance
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
export const object = new ThreeObject3D();
</script>

<Object3DInstance
  {object}
  {position}
  {scale}
  {rotation}
  {lookAt}
  {frustumCulled}
  {renderOrder}
  {visible}
  {userData}
  {dispose}
  {castShadow}
  {receiveShadow}
  {viewportAware}
  bind:inViewport
  on:viewportenter
  on:viewportleave
>
  <slot />
</Object3DInstance>
