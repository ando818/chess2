import { setContext, tick } from 'svelte';
import { derived, writable } from 'svelte/store';
import { Camera, Clock, Object3D, Raycaster, Scene, Vector2 } from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { getDefaultCamera } from './defaultCamera';
export const createContexts = (linear, flat, dpr, userSize, parentSize, debugFrameloop, frameloop) => {
    const audioCtx = {
        audioListeners: new Map(),
        addAudioListener: (listener, id) => {
            id = id ?? 'default';
            if (audioCtx.audioListeners.has(id)) {
                console.warn(`An AudioListener with the id "${id}" has already been added, aborting.`);
                return;
            }
            audioCtx.audioListeners.set(id, listener);
        },
        removeAudioListener: (id) => {
            id = id ?? 'default';
            if (!audioCtx.audioListeners.has(id)) {
                console.warn(`No AudioListener with the id "${id}" found, aborting.`);
                return;
            }
            audioCtx.audioListeners.delete(id);
        },
        getAudioListener: (id) => {
            id = id ?? 'default';
            if (!audioCtx.audioListeners.has(id)) {
                console.warn(`No AudioListener with the id "${id}" found, aborting.`);
                return;
            }
            return audioCtx.audioListeners.get(id);
        }
    };
    const renderCtx = {
        debugFrameloop,
        frameloop,
        frame: 0,
        frameInvalidated: true,
        pointerInvalidated: true,
        invalidations: {},
        frameHandlers: new Set(),
        advance: false
    };
    const ctx = {
        size: derived([userSize, parentSize], ([uSize, pSize]) => {
            return uSize ? uSize : pSize;
        }),
        pointer: writable(new Vector2()),
        pointerOverCanvas: writable(false),
        clock: new Clock(),
        camera: writable(getDefaultCamera()),
        scene: new Scene(),
        renderer: undefined,
        composer: undefined,
        invalidate: (debugFrameloopMessage) => {
            renderCtx.frameInvalidated = true;
            if (renderCtx.debugFrameloop && debugFrameloopMessage) {
                renderCtx.invalidations[debugFrameloopMessage] = renderCtx.invalidations[debugFrameloopMessage]
                    ? renderCtx.invalidations[debugFrameloopMessage] + 1
                    : 1;
            }
        },
        advance: () => {
            renderCtx.advance = true;
        }
    };
    const rootCtx = {
        flat: writable(flat),
        linear: writable(linear),
        dpr: writable(dpr),
        setCamera: (camera) => {
            ctx.camera.set(camera);
            if (!ctx.composer)
                return;
            ctx.composer.passes.forEach((pass) => {
                if (pass instanceof RenderPass) {
                    pass.camera = camera;
                }
            });
            ctx.invalidate('Canvas: setting camera');
        },
        raycastableObjects: new Set(),
        interactiveObjects: new Set(),
        raycaster: new Raycaster(),
        lastIntersection: null,
        addRaycastableObject: (object) => {
            rootCtx.raycastableObjects.add(object);
        },
        removeRaycastableObject: (object) => {
            rootCtx.raycastableObjects.delete(object);
        },
        addInteractiveObject: (object) => {
            rootCtx.interactiveObjects.add(object);
        },
        removeInteractiveObject: (object) => {
            rootCtx.interactiveObjects.delete(object);
        },
        addPass: (pass) => {
            if (!ctx.composer)
                return;
            ctx.composer.addPass(pass);
            ctx.invalidate('Canvas: adding pass');
        },
        removePass: (pass) => {
            if (!ctx.composer)
                return;
            ctx.composer.removePass(pass);
            ctx.invalidate('Canvas: removing pass');
        }
    };
    const disposalCtx = {
        dispose: async (force = false) => {
            await tick();
            if (!disposalCtx.shouldDispose && !force)
                return;
            disposalCtx.disposableObjects.forEach((mounted, object) => {
                if (mounted === 0 || force) {
                    object?.dispose?.();
                    disposalCtx.disposableObjects.delete(object);
                }
            });
            disposalCtx.shouldDispose = false;
        },
        collectDisposableObjects: (object, objects) => {
            const disposables = objects ?? [];
            if (!object)
                return disposables;
            // Scenes can't be disposed
            if (object?.dispose && typeof object.dispose === 'function' && object.type !== 'Scene') {
                disposables.push(object);
            }
            // iterate over properties of object
            Object.entries(object).forEach(([propKey, propValue]) => {
                // we don't want to dispose the parent, we can skip "children"
                if (propKey === 'parent' || propKey === 'children' || typeof propValue !== 'object')
                    return;
                const value = propValue;
                if (value?.dispose) {
                    disposalCtx.collectDisposableObjects(value, disposables);
                }
            });
            return disposables;
        },
        addDisposableObjects: (objects) => {
            objects.forEach((obj) => {
                const currentValue = disposalCtx.disposableObjects.get(obj);
                if (currentValue) {
                    disposalCtx.disposableObjects.set(obj, currentValue + 1);
                }
                else {
                    disposalCtx.disposableObjects.set(obj, 1);
                }
            });
        },
        removeDisposableObjects: (objects) => {
            if (objects.length === 0)
                return;
            objects.forEach((obj) => {
                const currentValue = disposalCtx.disposableObjects.get(obj);
                if (currentValue && currentValue > 0) {
                    disposalCtx.disposableObjects.set(obj, currentValue - 1);
                }
            });
            disposalCtx.shouldDispose = true;
        },
        disposableObjects: new Map(),
        shouldDispose: false
    };
    setContext('threlte', ctx);
    setContext('threlte-root', rootCtx);
    setContext('threlte-render-context', renderCtx);
    setContext('threlte-audio-context', audioCtx);
    setContext('threlte-disposal-context', disposalCtx);
    const getCtx = () => ctx;
    const getRootCtx = () => rootCtx;
    const getRenderCtx = () => renderCtx;
    const getAudioCtx = () => audioCtx;
    const getDisposalCtx = () => disposalCtx;
    return {
        ctx,
        rootCtx,
        renderCtx,
        audioCtx,
        disposalCtx,
        getCtx,
        getRootCtx,
        getRenderCtx,
        getAudioCtx,
        getDisposalCtx
    };
};
