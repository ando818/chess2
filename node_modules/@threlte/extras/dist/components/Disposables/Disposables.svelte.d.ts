import { SvelteComponentTyped } from "svelte";
import { type DisposableObjectProperties } from '@threlte/core';
declare const __propDef: {
    props: {
        disposables: NonNullable<DisposableObjectProperties['object']>[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DisposablesProps = typeof __propDef.props;
export declare type DisposablesEvents = typeof __propDef.events;
export declare type DisposablesSlots = typeof __propDef.slots;
export default class Disposables extends SvelteComponentTyped<DisposablesProps, DisposablesEvents, DisposablesSlots> {
}
export {};
