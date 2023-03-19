import { SvelteComponentTyped } from "svelte";
import { Object3D, SpotLight as ThreeSpotLight } from 'three';
import type { SpotLightProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: SpotLightProperties['position'];
        scale?: SpotLightProperties['scale'];
        rotation?: SpotLightProperties['rotation'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        frustumCulled?: SpotLightProperties['frustumCulled'];
        receiveShadow?: SpotLightProperties['receiveShadow'];
        renderOrder?: SpotLightProperties['renderOrder'];
        visible?: SpotLightProperties['visible'];
        userData?: SpotLightProperties['userData'];
        dispose?: SpotLightProperties['dispose'];
        color?: SpotLightProperties['color'];
        intensity?: SpotLightProperties['intensity'];
        angle?: SpotLightProperties['angle'];
        decay?: SpotLightProperties['decay'];
        distance?: SpotLightProperties['distance'];
        penumbra?: SpotLightProperties['penumbra'];
        power?: SpotLightProperties['power'];
        target?: SpotLightProperties['target'];
        shadow?: SpotLightProperties['shadow'];
        light?: ThreeSpotLight | undefined;
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
export declare type SpotLightProps = typeof __propDef.props;
export declare type SpotLightEvents = typeof __propDef.events;
export declare type SpotLightSlots = typeof __propDef.slots;
export default class SpotLight extends SvelteComponentTyped<SpotLightProps, SpotLightEvents, SpotLightSlots> {
    get light(): ThreeSpotLight;
}
export {};
