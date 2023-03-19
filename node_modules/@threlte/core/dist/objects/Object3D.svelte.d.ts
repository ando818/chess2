import { SvelteComponentTyped } from "svelte";
import { Object3D as ThreeObject3D } from 'three';
import type { Object3DProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: Object3DProperties['position'];
        scale?: Object3DProperties['scale'];
        rotation?: Object3DProperties['rotation'];
        lookAt?: Object3DProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: Object3DProperties['castShadow'];
        receiveShadow?: Object3DProperties['receiveShadow'];
        frustumCulled?: Object3DProperties['frustumCulled'];
        renderOrder?: Object3DProperties['renderOrder'];
        visible?: Object3DProperties['visible'];
        userData?: Object3DProperties['userData'];
        dispose?: Object3DProperties['dispose'];
        object?: ThreeObject3D<import("three").Event> | undefined;
    };
    events: {
        viewportenter: CustomEvent<ThreeObject3D<import("three").Event>>;
        viewportleave: CustomEvent<ThreeObject3D<import("three").Event>>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type Object3DProps = typeof __propDef.props;
export declare type Object3DEvents = typeof __propDef.events;
export declare type Object3DSlots = typeof __propDef.slots;
export default class Object3D extends SvelteComponentTyped<Object3DProps, Object3DEvents, Object3DSlots> {
    get object(): ThreeObject3D<import("three").Event>;
}
export {};
