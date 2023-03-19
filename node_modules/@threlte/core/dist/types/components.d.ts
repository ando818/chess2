import type { Audio, BufferGeometry, Camera, ColorRepresentation, Light, Line, Material, Mesh, Object3D, PositionalAudio, Vector3, Vector3Tuple } from 'three';
import type { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import type { Pass } from 'three/examples/jsm/postprocessing/Pass';
import type { LookAt, Position, Rotation, Scale, ThrelteLayers } from './types';
import type { SetOptional } from 'type-fest';
export declare type HierarchicalObjectProperties = {
    object?: Object3D;
    onChildMount?: (child: Object3D) => void;
    onChildDestroy?: (child: Object3D) => void;
};
export declare type DisposableThreeObject = {
    dispose?: () => void;
    type?: string;
} & Record<string, any>;
export declare type DisposableObjectProperties = {
    object?: DisposableThreeObject;
    dispose?: boolean;
};
export declare type SceneGraphObjectProperties = {
    object: Object3D;
};
export declare type InteractiveObjectProperties = {
    object: Object3D;
    interactive: boolean;
    ignorePointer: boolean;
};
export declare type LayerableObjectProperties = {
    object: Object3D;
};
export declare type TransformableObjectProperties = {
    object: Object3D;
    position?: Position;
    scale?: Scale;
    rotation?: Rotation;
    lookAt?: LookAt;
};
export declare type ViewportAwareObjectProperties = {
    object: Object3D;
    viewportAware: boolean;
    /**
     * Use as a binding.
     */
    inViewport: boolean;
};
export declare type Object3DInstanceProperties = SceneGraphObjectProperties & LayerableObjectProperties & TransformableObjectProperties & ViewportAwareObjectProperties & DisposableObjectProperties & {
    castShadow?: boolean;
    receiveShadow?: boolean;
    frustumCulled?: boolean;
    renderOrder?: number;
    visible?: boolean;
    userData?: Record<string, any>;
};
export declare type MeshInstanceProperties = Omit<Object3DInstanceProperties, 'object'> & Omit<InteractiveObjectProperties, 'object'> & {
    mesh: Mesh;
};
export declare type LineInstanceProperties = Omit<InteractiveObjectProperties, 'object'> & Omit<Object3DInstanceProperties, 'object'> & {
    line: Line;
};
export declare type LightInstanceProperties = Omit<Object3DInstanceProperties, 'object'> & {
    light: Light;
    color?: ColorRepresentation;
    intensity?: number;
};
export declare type CameraInstanceProperties = Omit<Object3DInstanceProperties, 'object'> & {
    camera: Camera;
    useCamera: boolean;
};
export declare type OrthographicCameraProperties = Omit<CameraInstanceProperties, 'camera'> & {
    near?: number;
    far?: number;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    zoom?: number;
};
export declare type PerspectiveCameraProperties = Omit<CameraInstanceProperties, 'camera'> & {
    near?: number;
    far?: number;
    fov?: number;
};
export declare type OrbitControlsProperties = {
    dispose?: boolean;
    autoRotate?: boolean;
    autoRotateSpeed?: number;
    dampingFactor?: number;
    enableDamping?: boolean;
    enabled?: boolean;
    enablePan?: boolean;
    enableRotate?: boolean;
    enableZoom?: boolean;
    keyPanSpeed?: number;
    keys?: OrbitControls['keys'];
    maxAzimuthAngle?: number;
    maxDistance?: number;
    maxPolarAngle?: number;
    maxZoom?: number;
    minAzimuthAngle?: number;
    minDistance?: number;
    minPolarAngle?: number;
    minZoom?: number;
    mouseButtons?: OrbitControls['mouseButtons'];
    panSpeed?: number;
    rotateSpeed?: number;
    screenSpacePanning?: boolean;
    touches?: OrbitControls['touches'];
    zoomSpeed?: number;
    target?: TransformableObjectProperties['position'];
};
export declare type TransformControlsProperties = {
    autoPauseOrbitControls?: boolean;
    mode?: 'translate' | 'rotate' | 'scale' | undefined;
    axis?: 'X' | 'Y' | 'Z' | 'E' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'XYZE' | null;
    dragging?: boolean;
    enabled?: boolean;
    translationSnap?: number | null;
    scaleSnap?: number | null;
    rotationSnap?: number | null;
    showX?: boolean;
    showY?: boolean;
    showZ?: boolean;
    size?: number;
    space?: 'world' | 'local' | undefined;
    dispose?: boolean;
};
export declare type PassProperties = {
    pass: Pass;
};
export declare type AmbientLightProperties = Omit<LightInstanceProperties, 'light'>;
export declare type DirectionalLightProperties = Omit<LightInstanceProperties, 'light' | 'castShadow' | 'lookAt'> & {
    target?: Position | Object3D;
    shadow?: boolean | {
        mapSize?: [number, number];
        camera?: {
            left?: number;
            right?: number;
            top?: number;
            bottom?: number;
            near?: number;
            far?: number;
        };
        bias?: number;
        radius?: number;
    };
};
export declare type HemisphereLightProperties = Omit<LightInstanceProperties, 'color' | 'light'> & {
    skyColor: LightInstanceProperties['color'];
    groundColor?: ColorRepresentation;
};
export declare type PointLightProperties = Omit<LightInstanceProperties, 'light' | 'castShadow'> & {
    distance?: number;
    decay?: number;
    power?: number;
    shadow?: boolean | {
        mapSize?: [number, number];
        camera?: {
            near?: number;
            far?: number;
        };
        bias?: number;
        radius?: number;
    };
};
export declare type SpotLightProperties = Omit<LightInstanceProperties, 'lookAt' | 'light' | 'castShadow'> & {
    angle?: number;
    decay?: number;
    distance?: number;
    penumbra?: number;
    power?: number;
    target?: Position | Object3D;
    shadow?: boolean | {
        mapSize?: [number, number];
        camera?: {
            near?: number;
            far?: number;
        };
        bias?: number;
        radius?: number;
    };
};
export declare type FogProperties = {
    color: ColorRepresentation;
    near?: number;
    far?: number;
};
export declare type FogExp2Properties = {
    color: ColorRepresentation;
    density?: number;
};
export declare type LayersProperties = {
    layers: ThrelteLayers;
};
export declare type GroupProperties = Omit<Object3DInstanceProperties, 'object'>;
export declare type MeshProperties = Omit<MeshInstanceProperties, 'mesh'> & {
    geometry: BufferGeometry;
    material: Material | Material[];
};
export declare type LineProperties = Omit<LineInstanceProperties, 'line'> & {
    geometry?: BufferGeometry;
    points?: Vector3[] | Vector3Tuple[];
    material: Material | Material[];
};
export declare type Line2Properties = Omit<MeshInstanceProperties, 'mesh'> & {
    points: Vector3[] | Vector3Tuple[];
    material: LineMaterial;
};
export declare type LineSegmentsProperties = Omit<LineInstanceProperties, 'line'> & {
    geometry: BufferGeometry;
    material: Material | Material[];
};
export declare type InstancedMeshProperties = Omit<MeshInstanceProperties, 'mesh' | 'frustumCulled'> & {
    geometry: BufferGeometry;
    material: Material | Material[];
    count?: number;
    id?: string;
};
export declare type InstanceProperties = Omit<TransformableObjectProperties, 'object'> & {
    color?: ColorRepresentation;
    id?: string;
};
export declare type Object3DProperties = Omit<Object3DInstanceProperties, 'object'>;
export declare type AudioListenerProperties = Omit<Object3DInstanceProperties, 'object'> & {
    id?: string;
    masterVolume?: number;
};
declare type AudioSource = string | AudioBuffer | HTMLMediaElement | AudioBufferSourceNode | MediaStream;
export declare type AudioInstanceProperties<T extends Audio<GainNode> | PositionalAudio> = Omit<Object3DInstanceProperties, 'object'> & {
    audio: T;
    autoplay?: boolean;
    detune?: number;
    source?: AudioSource;
    volume?: number;
    loop?: boolean;
    filters?: BiquadFilterNode[] | BiquadFilterNode;
    playbackRate?: number;
    play: (delay?: number | any) => Promise<T>;
    pause: () => T;
    stop: () => T;
};
export declare type AudioProperties = Omit<SetOptional<AudioInstanceProperties<Audio>, 'play' | 'pause' | 'stop'>, 'audio'> & {
    id?: string;
};
export declare type PositionalAudioProperties = Omit<SetOptional<AudioInstanceProperties<PositionalAudio>, 'play' | 'pause' | 'stop'>, 'audio'> & {
    id?: string;
    refDistance?: number;
    rolloffFactor?: number;
    distanceModel?: string;
    maxDistance?: number;
    directionalCone?: {
        coneInnerAngle: number;
        coneOuterAngle: number;
        coneOuterGain: number;
    };
};
export {};
