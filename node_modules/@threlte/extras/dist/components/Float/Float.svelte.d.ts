import { SvelteComponentTyped } from "svelte";
import { Group as ThreeGroup } from 'three';
import type { FloatProperties } from '../../types/components';
declare const __propDef: {
    props: {
        position?: FloatProperties['position'];
        scale?: FloatProperties['scale'];
        rotation?: FloatProperties['rotation'];
        lookAt?: FloatProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: FloatProperties['castShadow'];
        receiveShadow?: FloatProperties['receiveShadow'];
        frustumCulled?: FloatProperties['frustumCulled'];
        renderOrder?: FloatProperties['renderOrder'];
        visible?: FloatProperties['visible'];
        userData?: FloatProperties['userData'];
        dispose?: FloatProperties['dispose'];
        speed?: number | undefined;
        rotationIntensity?: number | undefined;
        floatIntensity?: number | undefined;
        floatingRange?: [number, number] | undefined;
        group?: ThreeGroup | undefined;
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
export declare type FloatProps = typeof __propDef.props;
export declare type FloatEvents = typeof __propDef.events;
export declare type FloatSlots = typeof __propDef.slots;
export default class Float extends SvelteComponentTyped<FloatProps, FloatEvents, FloatSlots> {
}
export {};
