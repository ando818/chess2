import { SvelteComponentTyped } from "svelte";
import { OrthographicCamera as ThreeOrthographicCamera } from 'three';
import type { OrthographicCameraProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: OrthographicCameraProperties['position'];
        scale?: OrthographicCameraProperties['scale'];
        rotation?: OrthographicCameraProperties['rotation'];
        lookAt?: OrthographicCameraProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: OrthographicCameraProperties['castShadow'];
        receiveShadow?: OrthographicCameraProperties['receiveShadow'];
        frustumCulled?: OrthographicCameraProperties['frustumCulled'];
        renderOrder?: OrthographicCameraProperties['renderOrder'];
        visible?: OrthographicCameraProperties['visible'];
        userData?: OrthographicCameraProperties['userData'];
        dispose?: OrthographicCameraProperties['dispose'];
        useCamera?: boolean | undefined;
        near?: OrthographicCameraProperties['near'];
        far?: OrthographicCameraProperties['far'];
        left?: OrthographicCameraProperties['left'];
        right?: OrthographicCameraProperties['right'];
        top?: OrthographicCameraProperties['top'];
        bottom?: OrthographicCameraProperties['bottom'];
        zoom?: OrthographicCameraProperties['zoom'];
        camera?: ThreeOrthographicCamera | undefined;
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
export declare type OrthographicCameraProps = typeof __propDef.props;
export declare type OrthographicCameraEvents = typeof __propDef.events;
export declare type OrthographicCameraSlots = typeof __propDef.slots;
export default class OrthographicCamera extends SvelteComponentTyped<OrthographicCameraProps, OrthographicCameraEvents, OrthographicCameraSlots> {
    get camera(): ThreeOrthographicCamera;
}
export {};
