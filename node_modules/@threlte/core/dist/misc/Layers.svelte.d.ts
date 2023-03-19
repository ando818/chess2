import { SvelteComponentTyped } from "svelte";
import type { LayersProperties } from '../types/components';
declare const __propDef: {
    props: {
        layers: LayersProperties['layers'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type LayersProps = typeof __propDef.props;
export declare type LayersEvents = typeof __propDef.events;
export declare type LayersSlots = typeof __propDef.slots;
export default class Layers extends SvelteComponentTyped<LayersProps, LayersEvents, LayersSlots> {
}
export {};
