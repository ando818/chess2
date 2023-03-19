import { SvelteComponentTyped } from "svelte";
import type { Object3DInstanceProperties } from '../types/components';
declare const __propDef: {
    props: {
        object: Object3DInstanceProperties['object'];
        position?: Object3DInstanceProperties['position'];
        scale?: Object3DInstanceProperties['scale'];
        rotation?: Object3DInstanceProperties['rotation'];
        lookAt?: Object3DInstanceProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: Object3DInstanceProperties['castShadow'];
        receiveShadow?: Object3DInstanceProperties['receiveShadow'];
        frustumCulled?: Object3DInstanceProperties['frustumCulled'];
        renderOrder?: Object3DInstanceProperties['renderOrder'];
        visible?: Object3DInstanceProperties['visible'];
        dispose?: Object3DInstanceProperties['dispose'];
        userData?: Object3DInstanceProperties['userData'];
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
export declare type Object3DInstanceProps = typeof __propDef.props;
export declare type Object3DInstanceEvents = typeof __propDef.events;
export declare type Object3DInstanceSlots = typeof __propDef.slots;
export default class Object3DInstance extends SvelteComponentTyped<Object3DInstanceProps, Object3DInstanceEvents, Object3DInstanceSlots> {
}
export {};
