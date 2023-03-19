import { SvelteComponentTyped } from "svelte";
import type { CameraInstanceProperties } from '../types/components';
declare const __propDef: {
    props: {
        camera: CameraInstanceProperties['camera'];
        position?: CameraInstanceProperties['position'];
        scale?: CameraInstanceProperties['scale'];
        rotation?: CameraInstanceProperties['rotation'];
        lookAt?: CameraInstanceProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: CameraInstanceProperties['castShadow'];
        receiveShadow?: CameraInstanceProperties['receiveShadow'];
        frustumCulled?: CameraInstanceProperties['frustumCulled'];
        renderOrder?: CameraInstanceProperties['renderOrder'];
        visible?: CameraInstanceProperties['visible'];
        userData?: CameraInstanceProperties['userData'];
        dispose?: CameraInstanceProperties['dispose'];
        useCamera?: boolean | undefined;
    };
    events: {
        viewportenter: CustomEvent<import("three").Object3D<import("three").Event>>;
        viewportleave: CustomEvent<import("three").Object3D<import("three").Event>>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CameraInstanceProps = typeof __propDef.props;
export declare type CameraInstanceEvents = typeof __propDef.events;
export declare type CameraInstanceSlots = typeof __propDef.slots;
export default class CameraInstance extends SvelteComponentTyped<CameraInstanceProps, CameraInstanceEvents, CameraInstanceSlots> {
}
export {};
