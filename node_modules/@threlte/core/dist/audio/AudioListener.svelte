<script>import { onDestroy } from 'svelte';
import { AudioListener as ThreeAudioListener } from 'three';
import { useThrelteAudio } from '../hooks/useThrelteAudio';
import Object3DInstance from '../instances/Object3DInstance.svelte';
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
export let id = undefined;
export let masterVolume = undefined;
export const listener = new ThreeAudioListener();
export const context = listener.context;
export const resumeContext = async () => await listener.context.resume();
$: if (masterVolume !== undefined)
    listener.setMasterVolume(masterVolume);
const { addAudioListener, removeAudioListener } = useThrelteAudio();
addAudioListener(listener, id);
onDestroy(() => {
    removeAudioListener(id);
});
</script>

<Object3DInstance
  object={listener}
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
