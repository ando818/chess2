import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        ctx?: import("..").ThrelteContext | undefined;
        rootCtx?: import("..").ThrelteRootContext | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ContextBridgeProps = typeof __propDef.props;
export declare type ContextBridgeEvents = typeof __propDef.events;
export declare type ContextBridgeSlots = typeof __propDef.slots;
export default class ContextBridge extends SvelteComponentTyped<ContextBridgeProps, ContextBridgeEvents, ContextBridgeSlots> {
    get ctx(): import("..").ThrelteContext;
    get rootCtx(): import("..").ThrelteRootContext;
}
export {};
