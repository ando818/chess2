import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';
import { AnimationMixer } from 'three';
import { useFrame } from '@threlte/core';
const isRoot = (value) => !!value?.isObject3D;
const isGltfStore = (value) => !!value?.subscribe && typeof value.subscribe === 'function';
const isCallback = (value) => typeof value === 'function';
export function useGltfAnimations(rootOrGltfOrCallback, callbackOrRoot, maybeRoot) {
    const gltf = isGltfStore(rootOrGltfOrCallback)
        ? rootOrGltfOrCallback
        : writable(undefined);
    const cb = isCallback(rootOrGltfOrCallback)
        ? rootOrGltfOrCallback
        : isCallback(callbackOrRoot)
            ? callbackOrRoot
            : undefined;
    const root = isRoot(rootOrGltfOrCallback)
        ? rootOrGltfOrCallback
        : isRoot(callbackOrRoot)
            ? callbackOrRoot
            : maybeRoot;
    const mixerStore = writable(undefined);
    const actions = writable({});
    const unsubscribe = gltf.subscribe((gltf) => {
        if (!gltf || !gltf.scene || !gltf.animations.length)
            return;
        const newMixer = new AnimationMixer(undefined);
        const newActions = gltf.animations.reduce((acc, clip) => {
            const action = newMixer.clipAction(clip, root ?? gltf.scene);
            return {
                ...acc,
                [clip.name]: action
            };
        }, {});
        mixerStore.set(newMixer);
        actions.set(newActions);
        cb?.({
            actions: newActions,
            mixer: newMixer
        });
    });
    onDestroy(unsubscribe);
    let mixer = undefined;
    const unsubscribeMixer = mixerStore.subscribe((m) => (mixer = m));
    onDestroy(unsubscribeMixer);
    useFrame((_, delta) => {
        if (!mixer)
            return;
        mixer.update(delta);
    }, {
        debugFrameloopMessage: 'useGltfAnimations: AnimationMixer updated'
    });
    return {
        gltf,
        mixer: mixerStore,
        actions
    };
}
