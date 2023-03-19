import { SvelteComponentTyped } from "svelte";
import type { TransformableObjectProperties } from '../types/components';
declare const __propDef: {
    props: {
        object: TransformableObjectProperties['object'];
        position?: TransformableObjectProperties['position'];
        scale?: TransformableObjectProperties['scale'];
        rotation?: TransformableObjectProperties['rotation'];
        lookAt?: TransformableObjectProperties['lookAt'];
    };
    events: {
        transform: CustomEvent<void>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TransformableObjectProps = typeof __propDef.props;
export declare type TransformableObjectEvents = typeof __propDef.events;
export declare type TransformableObjectSlots = typeof __propDef.slots;
export default class TransformableObject extends SvelteComponentTyped<TransformableObjectProps, TransformableObjectEvents, TransformableObjectSlots> {
}
export {};
