import { SvelteComponentTyped } from "svelte";
import { Object3D } from 'three';
import type { ViewportAwareObjectProperties } from '../types/components';
declare const __propDef: {
    props: {
        object: ViewportAwareObjectProperties['object'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
    };
    events: {
        viewportenter: CustomEvent<Object3D<import("three").Event>>;
        viewportleave: CustomEvent<Object3D<import("three").Event>>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ViewportAwareObjectProps = typeof __propDef.props;
export declare type ViewportAwareObjectEvents = typeof __propDef.events;
export declare type ViewportAwareObjectSlots = typeof __propDef.slots;
export default class ViewportAwareObject extends SvelteComponentTyped<ViewportAwareObjectProps, ViewportAwareObjectEvents, ViewportAwareObjectSlots> {
}
export {};
