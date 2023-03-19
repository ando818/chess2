import { SvelteComponentTyped } from "svelte";
import { PointLight as ThreePointLight } from 'three';
import type { PointLightProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: PointLightProperties['position'];
        scale?: PointLightProperties['scale'];
        rotation?: PointLightProperties['rotation'];
        lookAt?: PointLightProperties['lookAt'];
        receiveShadow?: PointLightProperties['receiveShadow'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        frustumCulled?: PointLightProperties['frustumCulled'];
        renderOrder?: PointLightProperties['renderOrder'];
        visible?: PointLightProperties['visible'];
        userData?: PointLightProperties['userData'];
        dispose?: PointLightProperties['dispose'];
        intensity?: PointLightProperties['intensity'];
        color?: PointLightProperties['color'];
        distance?: PointLightProperties['distance'];
        decay?: PointLightProperties['decay'];
        power?: PointLightProperties['power'];
        shadow?: PointLightProperties['shadow'];
        light?: ThreePointLight | undefined;
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
export declare type PointLightProps = typeof __propDef.props;
export declare type PointLightEvents = typeof __propDef.events;
export declare type PointLightSlots = typeof __propDef.slots;
export default class PointLight extends SvelteComponentTyped<PointLightProps, PointLightEvents, PointLightSlots> {
    get light(): ThreePointLight;
}
export {};
