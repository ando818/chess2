import { SvelteComponentTyped } from "svelte";
import type { MeshInstanceProperties } from '../types/components';
declare const __propDef: {
    props: {
        mesh: MeshInstanceProperties['mesh'];
        position?: MeshInstanceProperties['position'];
        scale?: MeshInstanceProperties['scale'];
        rotation?: MeshInstanceProperties['rotation'];
        lookAt?: MeshInstanceProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: MeshInstanceProperties['castShadow'];
        receiveShadow?: MeshInstanceProperties['receiveShadow'];
        frustumCulled?: MeshInstanceProperties['frustumCulled'];
        renderOrder?: MeshInstanceProperties['renderOrder'];
        visible?: MeshInstanceProperties['visible'];
        userData?: MeshInstanceProperties['userData'];
        dispose?: MeshInstanceProperties['dispose'];
        interactive?: boolean | undefined;
        ignorePointer?: boolean | undefined;
    };
    events: {
        viewportenter: CustomEvent<import("three").Object3D<import("three").Event>>;
        viewportleave: CustomEvent<import("three").Object3D<import("three").Event>>;
        click: CustomEvent<import("..").ThreltePointerEvent>;
        contextmenu: CustomEvent<import("..").ThreltePointerEvent>;
        pointerup: CustomEvent<import("..").ThreltePointerEvent>;
        pointerdown: CustomEvent<import("..").ThreltePointerEvent>;
        pointerenter: CustomEvent<import("..").ThreltePointerEvent>;
        pointerleave: CustomEvent<import("..").ThreltePointerEvent>;
        pointermove: CustomEvent<import("..").ThreltePointerEvent>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type MeshInstanceProps = typeof __propDef.props;
export declare type MeshInstanceEvents = typeof __propDef.events;
export declare type MeshInstanceSlots = typeof __propDef.slots;
export default class MeshInstance extends SvelteComponentTyped<MeshInstanceProps, MeshInstanceEvents, MeshInstanceSlots> {
}
export {};
