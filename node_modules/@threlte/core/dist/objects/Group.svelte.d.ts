import { SvelteComponentTyped } from "svelte";
import { Group as ThreeGroup } from 'three';
import type { GroupProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: GroupProperties['position'];
        scale?: GroupProperties['scale'];
        rotation?: GroupProperties['rotation'];
        lookAt?: GroupProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: GroupProperties['castShadow'];
        receiveShadow?: GroupProperties['receiveShadow'];
        frustumCulled?: GroupProperties['frustumCulled'];
        renderOrder?: GroupProperties['renderOrder'];
        visible?: GroupProperties['visible'];
        userData?: GroupProperties['userData'];
        dispose?: GroupProperties['dispose'];
        group?: ThreeGroup | undefined;
    };
    events: {
        viewportenter: CustomEvent<import("three").Object3D<import("three").Event>>;
        viewportleave: CustomEvent<import("three").Object3D<import("three").Event>>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type GroupProps = typeof __propDef.props;
export declare type GroupEvents = typeof __propDef.events;
export declare type GroupSlots = typeof __propDef.slots;
export default class Group extends SvelteComponentTyped<GroupProps, GroupEvents, GroupSlots> {
    get group(): ThreeGroup;
}
export {};
