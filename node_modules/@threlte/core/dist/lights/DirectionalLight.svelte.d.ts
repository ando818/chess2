import { SvelteComponentTyped } from "svelte";
import { DirectionalLight as ThreeDirectionalLight, Object3D } from 'three';
import type { DirectionalLightProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: DirectionalLightProperties['position'];
        scale?: DirectionalLightProperties['scale'];
        rotation?: DirectionalLightProperties['rotation'];
        receiveShadow?: DirectionalLightProperties['receiveShadow'];
        frustumCulled?: DirectionalLightProperties['frustumCulled'];
        renderOrder?: DirectionalLightProperties['renderOrder'];
        visible?: DirectionalLightProperties['visible'];
        userData?: DirectionalLightProperties['userData'];
        dispose?: DirectionalLightProperties['dispose'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        color?: DirectionalLightProperties['color'];
        intensity?: DirectionalLightProperties['intensity'];
        shadow?: DirectionalLightProperties['shadow'];
        target?: DirectionalLightProperties['target'];
        light?: ThreeDirectionalLight | undefined;
    };
    events: {
        viewportenter: CustomEvent<Object3D<import("three").Event>>;
        viewportleave: CustomEvent<Object3D<import("three").Event>>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DirectionalLightProps = typeof __propDef.props;
export declare type DirectionalLightEvents = typeof __propDef.events;
export declare type DirectionalLightSlots = typeof __propDef.slots;
export default class DirectionalLight extends SvelteComponentTyped<DirectionalLightProps, DirectionalLightEvents, DirectionalLightSlots> {
    get light(): ThreeDirectionalLight;
}
export {};
