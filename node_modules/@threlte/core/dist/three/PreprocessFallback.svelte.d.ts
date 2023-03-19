import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PreprocessFallbackProps = typeof __propDef.props;
export declare type PreprocessFallbackEvents = typeof __propDef.events;
export declare type PreprocessFallbackSlots = typeof __propDef.slots;
/** This component serves as the fallback component when no preprocessor is implemented */
export default class PreprocessFallback extends SvelteComponentTyped<PreprocessFallbackProps, PreprocessFallbackEvents, PreprocessFallbackSlots> {
}
export {};
