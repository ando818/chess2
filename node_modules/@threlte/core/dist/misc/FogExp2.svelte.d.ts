import { SvelteComponentTyped } from "svelte";
import { FogExp2 as ThreeFogExp2 } from 'three';
import type { FogExp2Properties } from '../types/components';
declare const __propDef: {
    props: {
        color?: import("three").ColorRepresentation | undefined;
        density?: FogExp2Properties['density'];
        fog?: ThreeFogExp2 | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FogExp2Props = typeof __propDef.props;
export declare type FogExp2Events = typeof __propDef.events;
export declare type FogExp2Slots = typeof __propDef.slots;
export default class FogExp2 extends SvelteComponentTyped<FogExp2Props, FogExp2Events, FogExp2Slots> {
    get fog(): ThreeFogExp2;
}
export {};
