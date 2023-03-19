import { SvelteComponentTyped } from "svelte";
import type { LightInstanceProperties } from '../types/components';
declare const __propDef: {
    props: {
        light: LightInstanceProperties['light'];
        position?: LightInstanceProperties['position'];
        scale?: LightInstanceProperties['scale'];
        rotation?: LightInstanceProperties['rotation'];
        lookAt?: LightInstanceProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: LightInstanceProperties['castShadow'];
        receiveShadow?: LightInstanceProperties['receiveShadow'];
        frustumCulled?: LightInstanceProperties['frustumCulled'];
        renderOrder?: LightInstanceProperties['renderOrder'];
        visible?: LightInstanceProperties['visible'];
        userData?: LightInstanceProperties['userData'];
        dispose?: LightInstanceProperties['dispose'];
        color?: LightInstanceProperties['color'];
        intensity?: LightInstanceProperties['intensity'];
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
export declare type LightInstanceProps = typeof __propDef.props;
export declare type LightInstanceEvents = typeof __propDef.events;
export declare type LightInstanceSlots = typeof __propDef.slots;
export default class LightInstance extends SvelteComponentTyped<LightInstanceProps, LightInstanceEvents, LightInstanceSlots> {
}
export {};
