import { SvelteComponentTyped } from "svelte";
import { Fog as ThreeFog } from 'three';
import type { FogProperties } from '../types/components';
declare const __propDef: {
    props: {
        color?: import("three").ColorRepresentation | undefined;
        near?: FogProperties['near'];
        far?: FogProperties['far'];
        fog?: ThreeFog | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FogProps = typeof __propDef.props;
export declare type FogEvents = typeof __propDef.events;
export declare type FogSlots = typeof __propDef.slots;
export default class Fog extends SvelteComponentTyped<FogProps, FogEvents, FogSlots> {
    get fog(): ThreeFog;
}
export {};
