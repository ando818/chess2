import { SvelteComponentTyped } from "svelte";
import type { InteractiveObjectProperties } from '../types/components';
import type { ThreltePointerEvent } from '../types/types';
declare const __propDef: {
    props: {
        object: InteractiveObjectProperties['object'];
        interactive?: boolean | undefined;
        ignorePointer?: boolean | undefined;
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
    slots: {};
};
export declare type InteractiveObjectProps = typeof __propDef.props;
export declare type InteractiveObjectEvents = typeof __propDef.events;
export declare type InteractiveObjectSlots = typeof __propDef.slots;
export default class InteractiveObject extends SvelteComponentTyped<InteractiveObjectProps, InteractiveObjectEvents, InteractiveObjectSlots> {
}
export {};
