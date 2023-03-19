import { SvelteComponentTyped } from "svelte";
import type { EnvironmentProperties } from '../../types/components';
import type { Texture } from 'three';
declare const __propDef: {
    props: {
        groundProjection: EnvironmentProperties['groundProjection'];
        currentEnvMap: Texture;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type GroundProjectedEnvProps = typeof __propDef.props;
export declare type GroundProjectedEnvEvents = typeof __propDef.events;
export declare type GroundProjectedEnvSlots = typeof __propDef.slots;
export default class GroundProjectedEnv extends SvelteComponentTyped<GroundProjectedEnvProps, GroundProjectedEnvEvents, GroundProjectedEnvSlots> {
}
export {};
