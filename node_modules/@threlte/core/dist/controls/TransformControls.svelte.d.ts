import { SvelteComponentTyped } from "svelte";
import type { Camera, Object3D, Quaternion, Vector3 } from 'three';
import type { TransformControlsProperties } from '../types/components';
declare const __propDef: {
    props: {
        autoPauseOrbitControls?: TransformControlsProperties['autoPauseOrbitControls'];
        mode?: TransformControlsProperties['mode'];
        axis?: TransformControlsProperties['axis'];
        dragging?: TransformControlsProperties['dragging'];
        enabled?: TransformControlsProperties['enabled'];
        translationSnap?: TransformControlsProperties['translationSnap'];
        scaleSnap?: TransformControlsProperties['scaleSnap'];
        rotationSnap?: TransformControlsProperties['rotationSnap'];
        showX?: TransformControlsProperties['showX'];
        showY?: TransformControlsProperties['showY'];
        showZ?: TransformControlsProperties['showZ'];
        size?: TransformControlsProperties['size'];
        space?: TransformControlsProperties['space'];
        dispose?: TransformControlsProperties['dispose'];
        reset?: (() => any) | undefined;
    };
    events: {
        change: CustomEvent<void>;
        'camera-changed': CustomEvent<{
            type: 'camera-changed';
            value: Camera;
        }>;
        'object-changed': CustomEvent<{
            type: 'object-changed';
            value: Object3D;
        }>;
        'enabled-changed': CustomEvent<{
            type: 'enabled-changed';
            value: boolean;
        }>;
        'axis-changed': CustomEvent<{
            type: 'axis-changed';
            value: 'X' | 'Y' | 'Z' | 'E' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'XYZE' | null;
        }>;
        'mode-changed': CustomEvent<{
            type: 'mode-changed';
            value: 'translate' | 'rotate' | 'scale';
        }>;
        'translationSnap-changed': CustomEvent<{
            type: 'translationSnap-changed';
            value: number;
        }>;
        'rotationSnap-changed': CustomEvent<{
            type: 'rotationSnap-changed';
            value: number;
        }>;
        'scaleSnap-changed': CustomEvent<{
            type: 'scaleSnap-changed';
            value: number;
        }>;
        'space-changed': CustomEvent<{
            type: 'space-changed';
            value: 'world' | 'local';
        }>;
        'size-changed': CustomEvent<{
            type: 'size-changed';
            value: number;
        }>;
        'dragging-changed': CustomEvent<{
            type: 'dragging-changed';
            value: boolean;
        }>;
        'showX-changed': CustomEvent<{
            type: 'showX-changed';
            value: boolean;
        }>;
        'showY-changed': CustomEvent<{
            type: 'showY-changed';
            value: boolean;
        }>;
        'showZ-changed': CustomEvent<{
            type: 'showZ-changed';
            value: boolean;
        }>;
        'worldPosition-changed': CustomEvent<{
            type: 'worldPosition-changed';
            value: Vector3;
        }>;
        'worldPositionStart-changed': CustomEvent<{
            type: 'worldPositionStart-changed';
            value: Vector3;
        }>;
        'worldQuaternion-changed': CustomEvent<{
            type: 'worldQuaternion-changed';
            value: Quaternion;
        }>;
        'worldQuaternionStart-changed': CustomEvent<{
            type: 'worldQuaternionStart-changed';
            value: Quaternion;
        }>;
        'cameraPosition-changed': CustomEvent<{
            type: 'cameraPosition-changed';
            value: Vector3;
        }>;
        'cameraQuaternion-changed': CustomEvent<{
            type: 'cameraQuaternion-changed';
            value: Quaternion;
        }>;
        'pointStart-changed': CustomEvent<{
            type: 'pointStart-changed';
            value: Vector3;
        }>;
        'pointEnd-changed': CustomEvent<{
            type: 'pointEnd-changed';
            value: Vector3;
        }>;
        'rotationAxis-changed': CustomEvent<{
            type: 'rotationAxis-changed';
            value: Vector3;
        }>;
        'rotationAngle-changed': CustomEvent<{
            type: 'rotationAngle-changed';
            value: number;
        }>;
        'eye-changed': CustomEvent<{
            type: 'eye-changed';
            value: Vector3;
        }>;
        mouseDown: CustomEvent<void>;
        mouseUp: CustomEvent<void>;
        objectChange: CustomEvent<void>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TransformControlsProps = typeof __propDef.props;
export declare type TransformControlsEvents = typeof __propDef.events;
export declare type TransformControlsSlots = typeof __propDef.slots;
export default class TransformControls extends SvelteComponentTyped<TransformControlsProps, TransformControlsEvents, TransformControlsSlots> {
    get reset(): () => any;
}
export {};
