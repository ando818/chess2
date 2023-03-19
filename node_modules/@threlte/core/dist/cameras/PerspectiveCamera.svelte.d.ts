import { SvelteComponentTyped } from "svelte";
import { PerspectiveCamera as ThreePerspectiveCamera } from 'three';
import type { PerspectiveCameraProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: PerspectiveCameraProperties['position'];
        scale?: PerspectiveCameraProperties['scale'];
        rotation?: PerspectiveCameraProperties['rotation'];
        lookAt?: PerspectiveCameraProperties['lookAt'];
        castShadow?: PerspectiveCameraProperties['castShadow'];
        receiveShadow?: PerspectiveCameraProperties['receiveShadow'];
        frustumCulled?: PerspectiveCameraProperties['frustumCulled'];
        renderOrder?: PerspectiveCameraProperties['renderOrder'];
        visible?: PerspectiveCameraProperties['visible'];
        userData?: PerspectiveCameraProperties['userData'];
        dispose?: PerspectiveCameraProperties['dispose'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        useCamera?: boolean | undefined;
        near?: PerspectiveCameraProperties['near'];
        far?: PerspectiveCameraProperties['far'];
        fov?: PerspectiveCameraProperties['fov'];
        camera?: ThreePerspectiveCamera | undefined;
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
export declare type PerspectiveCameraProps = typeof __propDef.props;
export declare type PerspectiveCameraEvents = typeof __propDef.events;
export declare type PerspectiveCameraSlots = typeof __propDef.slots;
export default class PerspectiveCamera extends SvelteComponentTyped<PerspectiveCameraProps, PerspectiveCameraEvents, PerspectiveCameraSlots> {
    get camera(): ThreePerspectiveCamera;
}
export {};
