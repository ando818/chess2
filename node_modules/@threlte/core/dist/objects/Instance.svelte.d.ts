import { SvelteComponentTyped } from "svelte";
import type { InstanceProperties } from '../types/components';
import type { ThreltePointerEvent } from '../types/types';
declare const __propDef: {
    props: {
        position?: InstanceProperties['position'];
        scale?: InstanceProperties['scale'];
        rotation?: InstanceProperties['rotation'];
        lookAt?: InstanceProperties['lookAt'];
        color?: InstanceProperties['color'];
        id?: InstanceProperties['id'];
    };
    events: {
        click: CustomEvent<ThreltePointerEvent>;
        contextmenu: CustomEvent<ThreltePointerEvent>;
        pointerup: CustomEvent<ThreltePointerEvent>;
        pointerdown: CustomEvent<ThreltePointerEvent>;
        pointerenter: CustomEvent<ThreltePointerEvent>;
        pointerleave: CustomEvent<ThreltePointerEvent>;
        pointermove: CustomEvent<ThreltePointerEvent>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type InstanceProps = typeof __propDef.props;
export declare type InstanceEvents = typeof __propDef.events;
export declare type InstanceSlots = typeof __propDef.slots;
export default class Instance extends SvelteComponentTyped<InstanceProps, InstanceEvents, InstanceSlots> {
}
export {};
