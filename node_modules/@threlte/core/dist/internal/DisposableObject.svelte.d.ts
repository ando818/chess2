import { SvelteComponentTyped } from "svelte";
import type { DisposableObjectProperties } from '../types/components';
declare const __propDef: {
    props: {
        object?: DisposableObjectProperties['object'];
        dispose?: DisposableObjectProperties['dispose'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DisposableObjectProps = typeof __propDef.props;
export declare type DisposableObjectEvents = typeof __propDef.events;
export declare type DisposableObjectSlots = typeof __propDef.slots;
export default class DisposableObject extends SvelteComponentTyped<DisposableObjectProps, DisposableObjectEvents, DisposableObjectSlots> {
}
export {};
