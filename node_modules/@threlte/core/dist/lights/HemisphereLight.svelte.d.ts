import { SvelteComponentTyped } from "svelte";
import { HemisphereLight as ThreeHemisphereLight } from 'three';
import type { HemisphereLightProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: HemisphereLightProperties['position'];
        scale?: HemisphereLightProperties['scale'];
        rotation?: HemisphereLightProperties['rotation'];
        lookAt?: HemisphereLightProperties['lookAt'];
        castShadow?: HemisphereLightProperties['castShadow'];
        receiveShadow?: HemisphereLightProperties['receiveShadow'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        frustumCulled?: HemisphereLightProperties['frustumCulled'];
        renderOrder?: HemisphereLightProperties['renderOrder'];
        visible?: HemisphereLightProperties['visible'];
        userData?: HemisphereLightProperties['userData'];
        dispose?: HemisphereLightProperties['dispose'];
        intensity?: HemisphereLightProperties['intensity'];
        skyColor?: HemisphereLightProperties['skyColor'];
        groundColor?: HemisphereLightProperties['groundColor'];
        light?: ThreeHemisphereLight | undefined;
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
export declare type HemisphereLightProps = typeof __propDef.props;
export declare type HemisphereLightEvents = typeof __propDef.events;
export declare type HemisphereLightSlots = typeof __propDef.slots;
export default class HemisphereLight extends SvelteComponentTyped<HemisphereLightProps, HemisphereLightEvents, HemisphereLightSlots> {
    get light(): ThreeHemisphereLight;
}
export {};
