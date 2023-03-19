import type { Readable, Writable } from 'svelte/store';
import type { AudioListener, Camera, Clock, Color, Euler, Event, Intersection, Loader, Matrix4, Object3D, Raycaster, Scene, Vector2, Vector3, WebGLRenderer } from 'three';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import type { EffectComposer, Pass } from 'three/examples/jsm/postprocessing/EffectComposer';
import type { DisposableThreeObject } from './components';
export declare type ThreltePointerEventMap = {
    click: ThreltePointerEvent;
    contextmenu: ThreltePointerEvent;
    pointerup: ThreltePointerEvent;
    pointerdown: ThreltePointerEvent;
    pointerenter: ThreltePointerEvent;
    pointerleave: ThreltePointerEvent;
    pointermove: ThreltePointerEvent;
};
declare const createEventDispatcherType: () => <EventKey extends keyof ThreltePointerEventMap>(type: EventKey, detail?: ThreltePointerEventMap[EventKey] | undefined, options?: import("svelte/internal").DispatchOptions | undefined) => boolean;
export declare type InteractiveObjectEventDispatcher = ReturnType<typeof createEventDispatcherType>;
export declare type ThrelteInstance = {
    matrix: Matrix4;
    color: null | Color;
    pointerEventDispatcher?: InteractiveObjectEventDispatcher;
};
export declare type ThrelteRootContext = {
    setCamera: (camera: Camera) => void;
    linear: Writable<boolean>;
    flat: Writable<boolean>;
    dpr: Writable<number>;
    addPass: (pass: Pass) => void;
    removePass: (pass: Pass) => void;
    addRaycastableObject: (obj: Object3D) => void;
    removeRaycastableObject: (obj: Object3D) => void;
    addInteractiveObject: (obj: Object3D) => void;
    removeInteractiveObject: (obj: Object3D) => void;
    interactiveObjects: Set<Object3D>;
    raycastableObjects: Set<Object3D>;
    raycaster: Raycaster;
    lastIntersection: Intersection<Object3D<Event>> | null;
};
export declare type ThrelteContext = {
    size: Readable<Size>;
    pointer: Writable<Vector2>;
    pointerOverCanvas: Writable<boolean>;
    clock: Clock;
    camera: Writable<Camera>;
    scene: Scene;
    renderer?: WebGLRenderer;
    composer?: EffectComposer;
    /**
     * Invalidates the current frame when frameloop === 'demand'
     */
    invalidate: (debugFrameloopMessage?: string) => void;
    /**
     * Advance one frame when frameloop === 'never'
     */
    advance: () => void;
};
export declare type ThrelteRenderContext = {
    frameloop: 'always' | 'demand' | 'never';
    debugFrameloop: boolean;
    pointerInvalidated: boolean;
    frameInvalidated: boolean;
    frame: number;
    invalidations: Record<string, number>;
    frameHandlers: Set<ThrelteFrameHandler>;
    advance: boolean;
};
export declare type ThrelteDisposalContext = {
    /**
     * Disposes all disposable objects from disposableObjects
     * that are not mounted anymore and clears the Map entry.
     */
    dispose: (force?: boolean) => void;
    /**
     * Returns an array of disposable objects.
     * Recursively checks disposable objects for properties
     * that again hold disposable objects and returns
     * them as well.
     */
    collectDisposableObjects: (object?: DisposableThreeObject, arr?: DisposableThreeObject[]) => DisposableThreeObject[];
    /**
     * Add disposable objects that will be disposed on unmounting.
     */
    addDisposableObjects: (objects: DisposableThreeObject[]) => void;
    /**
     * Remove disposable objects and possibly dispose them
     * in the next frame if they are not mounted anywhere else.
     */
    removeDisposableObjects: (objects: DisposableThreeObject[]) => void;
    /**
     * A map of currently mounted disposable objects.
     */
    disposableObjects: Map<DisposableThreeObject, number>;
    /**
     * A flag that is used to check whether the dispose method
     * should actually run.
     */
    shouldDispose: boolean;
};
export declare type ThrelteAudioContext = {
    audioListeners: Map<string, AudioListener>;
    getAudioListener: (id?: string) => AudioListener | undefined;
    addAudioListener: (listener: AudioListener, id?: string) => void;
    removeAudioListener: (id?: string) => void;
};
export declare type ThrelteDisposeContext = Writable<boolean>;
export declare type ThrelteUseFrame = {
    stop: () => void;
    start: () => void;
    started: Readable<boolean>;
};
export declare type ThrelteUseFrameOptions = {
    autostart?: boolean;
    order?: number;
    /**
     * Optionally provide a message to use with the property
     * `debugFrameloop` of the `<Canvas>` component.
     */
    debugFrameloopMessage?: string;
};
export declare type ThrelteFrameHandler = {
    fn: (ctx: ThrelteContext, delta: number) => void;
    order?: number;
    debugFrameloopMessage?: string;
};
export declare type ThrelteParentContext = Writable<Object3D>;
export declare type Position = Vector3 | {
    x?: number;
    y?: number;
    z?: number;
};
export declare type Scale = Vector3 | number | {
    x?: number;
    y?: number;
    z?: number;
};
export declare type Rotation = Euler | {
    x?: number;
    y?: number;
    z?: number;
    order?: Euler['order'];
};
export declare type LookAt = Position | Object3D;
export declare type ThrelteLayers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31)[] | 'all' | 'none';
export declare type ThrelteLayersContext = Writable<ThrelteLayers> | undefined;
export declare type ThrelteUseLoader = <T extends typeof Loader>(loader: T, memoizeFn: () => InstanceType<T>) => InstanceType<T>;
export declare type Size = {
    width: number;
    height: number;
};
export declare type ThreltePointerEvent = Intersection<Object3D<Event>> & {
    event?: MouseEvent | PointerEvent;
};
export declare type ThrelteUserData = {
    orbitControls?: OrbitControls;
    eventDispatcher?: InteractiveObjectEventDispatcher;
    onTransform?: () => Promise<void>;
    threlteDefaultCamera?: boolean;
};
export {};
