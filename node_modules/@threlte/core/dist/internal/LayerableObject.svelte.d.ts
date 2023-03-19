import { SvelteComponentTyped } from "svelte";
import type { Object3D } from 'three';
declare const __propDef: {
    props: {
        object: Object3D;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type LayerableObjectProps = typeof __propDef.props;
export declare type LayerableObjectEvents = typeof __propDef.events;
export declare type LayerableObjectSlots = typeof __propDef.slots;
export default class LayerableObject extends SvelteComponentTyped<LayerableObjectProps, LayerableObjectEvents, LayerableObjectSlots> {
}
export {};
