import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
import type { Object3D, Object3D as ThreeObject3D } from 'three';
import type { HierarchicalObjectProperties } from '../types/components';
declare type ThrelteParentContext = Writable<ThreeObject3D | undefined>;
export declare const useParent: () => ThrelteParentContext;
declare const __propDef: {
    props: {
        object?: HierarchicalObjectProperties['object'];
        children?: Object3D<import("three").Event>[] | undefined;
        onChildMount?: HierarchicalObjectProperties['onChildMount'];
        onChildDestroy?: HierarchicalObjectProperties['onChildDestroy'];
        parent?: Object3D | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type HierarchicalObjectProps = typeof __propDef.props;
export declare type HierarchicalObjectEvents = typeof __propDef.events;
export declare type HierarchicalObjectSlots = typeof __propDef.slots;
/**
 * This component is the backbone of the scene graph hierarchy system.
 * Child objects that also house this component register themselves onto
 * this component and let the parent decide on what to do with it.
 */
export default class HierarchicalObject extends SvelteComponentTyped<HierarchicalObjectProps, HierarchicalObjectEvents, HierarchicalObjectSlots> {
}
export {};
