<script>import { useThrelteRoot } from '../hooks/useThrelteRoot';
import { createObjectStore } from '../lib/createObjectStore';
import Object3DInstance from './Object3DInstance.svelte';
export let camera;
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
export let useCamera = false;
const cam = createObjectStore(camera);
$: cam.set(camera);
const { setCamera } = useThrelteRoot();
$: if (useCamera) {
    setCamera($cam);
}
</script>

<Object3DInstance
  object={camera}
  {lookAt}
  {castShadow}
  {receiveShadow}
  {frustumCulled}
  {renderOrder}
  {position}
  {scale}
  {rotation}
  {viewportAware}
  {visible}
  {userData}
  {dispose}
  on:viewportenter
  on:viewportleave
  bind:inViewport
>
  <slot />
</Object3DInstance>
