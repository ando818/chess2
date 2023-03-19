import { SvelteComponentTyped } from "svelte";
import type { AttractorProperties } from '../../types/components';
declare const __propDef: {
    props: {
        position?: AttractorProperties['position'];
        strength?: number | undefined;
        range?: number | undefined;
        gravityType?: import("../../types/components").GravityType | undefined;
        gravitationalConstant?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type AttractorProps = typeof __propDef.props;
export declare type AttractorEvents = typeof __propDef.events;
export declare type AttractorSlots = typeof __propDef.slots;
export default class Attractor extends SvelteComponentTyped<AttractorProps, AttractorEvents, AttractorSlots> {
}
export {};
