<script>import { Audio as ThreeAudio } from 'three';
import { useThrelteAudio } from '../hooks/useThrelteAudio';
import AudioInstance from '../instances/AudioInstance.svelte';
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
export let autoplay = undefined;
export let detune = undefined;
export let source = undefined;
export let volume = undefined;
export let loop = undefined;
export let filters = undefined;
export let playbackRate = undefined;
export let play = undefined;
export let pause = undefined;
export let stop = undefined;
export let id = undefined;
const { getAudioListener } = useThrelteAudio();
const listener = getAudioListener(id);
if (!listener) {
    throw new Error(`No Audiolistener with id ${id} found.`);
}
export const audio = new ThreeAudio(listener);
</script>

<AudioInstance
  {audio}
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
  {autoplay}
  {source}
  {detune}
  {loop}
  {filters}
  {playbackRate}
  {volume}
  bind:inViewport
  on:viewportenter
  on:viewportleave
  on:load
  on:progress
  on:error
  bind:play
  bind:pause
  bind:stop
>
  <slot />
</AudioInstance>
