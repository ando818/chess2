import { SvelteComponentTyped } from "svelte";
import { AmbientLight as ThreeAmbientLight } from 'three';
import type { AmbientLightProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: AmbientLightProperties['position'];
        scale?: AmbientLightProperties['scale'];
        rotation?: AmbientLightProperties['rotation'];
        lookAt?: AmbientLightProperties['lookAt'];
        castShadow?: AmbientLightProperties['castShadow'];
        receiveShadow?: AmbientLightProperties['receiveShadow'];
        frustumCulled?: AmbientLightProperties['frustumCulled'];
        renderOrder?: AmbientLightProperties['renderOrder'];
        visible?: AmbientLightProperties['visible'];
        userData?: AmbientLightProperties['userData'];
        dispose?: AmbientLightProperties['dispose'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        color?: AmbientLightProperties['color'];
        intensity?: AmbientLightProperties['intensity'];
        light?: ThreeAmbientLight | undefined;
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
export declare type AmbientLightProps = typeof __propDef.props;
export declare type AmbientLightEvents = typeof __propDef.events;
export declare type AmbientLightSlots = typeof __propDef.slots;
export default class AmbientLight extends SvelteComponentTyped<AmbientLightProps, AmbientLightEvents, AmbientLightSlots> {
    get light(): ThreeAmbientLight;
}
export {};
