<script>import { createEventDispatcher, onDestroy } from 'svelte';
import { DefaultLoadingManager } from 'three';
import { Audio, AudioLoader, PositionalAudio } from 'three';
import { useLoader } from '../hooks/useLoader';
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
export let autoplay = undefined;
export let detune = undefined;
export let source = undefined;
export let volume = undefined;
export let loop = undefined;
export let filters = undefined;
export let playbackRate = undefined;
export let audio;
export const play = async (delay) => {
    if (audio.context.state !== 'running') {
        await audio.context.resume();
    }
    delay && typeof delay === 'number' ? audio.play(delay) : audio.play();
    setDetune(detune);
    return audio;
};
export const pause = () => audio.pause();
export const stop = () => {
    if (!audio.source)
        return audio;
    return audio.stop();
};
const setDetune = (detune) => {
    if (detune !== undefined && audio.source && audio.source.detune) {
        audio.setDetune(detune);
    }
};
$: if (autoplay !== undefined)
    audio.autoplay = autoplay;
$: setDetune(detune);
$: if (volume !== undefined)
    audio.setVolume(volume);
$: if (loop !== undefined)
    audio.setLoop(loop);
$: if (filters !== undefined)
    Array.isArray(filters) ? audio.setFilters(filters) : audio.setFilter(filters);
$: if (playbackRate !== undefined)
    audio.setPlaybackRate(playbackRate);
const dispatch = createEventDispatcher();
const loader = useLoader(AudioLoader, () => new AudioLoader(DefaultLoadingManager));
const loadBufferFromUrl = (url) => {
    return new Promise((resolve, reject) => {
        loader.load(url, (buffer) => {
            dispatch('load', buffer);
            resolve(buffer);
        }, (e) => {
            dispatch('progress', e);
        }, (e) => {
            dispatch('error', e);
            reject(e);
        });
    });
};
let previousSource;
const onSourceChange = async (newSource, signal) => {
    // stop and return if the source is undefined or an empty string is provided
    if (!newSource) {
        previousSource = newSource;
        stop();
        return;
    }
    // stop and return if the source did not actually change
    if (!newSource || newSource === previousSource) {
        stop();
        return;
    }
    previousSource = newSource;
    let aborted = false;
    const onAbort = () => {
        aborted = true;
    };
    signal.addEventListener('abort', onAbort, { once: true });
    if (typeof newSource === 'string') {
        const buffer = await loadBufferFromUrl(newSource);
        if (aborted)
            return;
        stop();
        audio.setBuffer(buffer);
    }
    else if (newSource instanceof AudioBuffer) {
        if (aborted)
            return;
        stop();
        audio.setBuffer(newSource);
    }
    else if (newSource instanceof HTMLMediaElement) {
        if (aborted)
            return;
        stop();
        audio.setMediaElementSource(newSource);
    }
    else if (newSource instanceof MediaStream) {
        if (aborted)
            return;
        stop();
        audio.setMediaStreamSource(newSource);
    }
    else if (newSource instanceof AudioBufferSourceNode) {
        if (aborted)
            return;
        stop();
        audio.setNodeSource(newSource);
    }
    signal.removeEventListener('abort', onAbort);
};
// It's possible that the source changes too quickly
// therefore an AbortController is needed in order to
// load the correct source after loading
let ac;
$: {
    if (ac)
        ac.abort();
    ac = new AbortController();
    onSourceChange(source, ac.signal);
}
onDestroy(() => {
    try {
        stop();
        if (ac)
            ac.abort;
        if (audio.source)
            audio.disconnect();
    }
    catch (error) {
        console.warn('Error unmounting <AudioInstance>');
        console.error(error);
    }
});
</script>

<Object3DInstance
  object={audio}
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
