import { SvelteComponentTyped } from "svelte";
import type { PassProperties } from '../types/components';
declare const __propDef: {
    props: {
        pass: PassProperties['pass'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PassProps = typeof __propDef.props;
export declare type PassEvents = typeof __propDef.events;
export declare type PassSlots = typeof __propDef.slots;
export default class Pass extends SvelteComponentTyped<PassProps, PassEvents, PassSlots> {
}
export {};
