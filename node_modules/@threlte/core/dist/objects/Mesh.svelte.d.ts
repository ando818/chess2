import { SvelteComponentTyped } from "svelte";
import { Mesh as ThreeMesh } from 'three';
import type { MeshProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: MeshProperties['position'];
        scale?: MeshProperties['scale'];
        rotation?: MeshProperties['rotation'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: MeshProperties['castShadow'];
        receiveShadow?: MeshProperties['receiveShadow'];
        frustumCulled?: MeshProperties['frustumCulled'];
        renderOrder?: MeshProperties['renderOrder'];
        visible?: MeshProperties['visible'];
        userData?: MeshProperties['userData'];
        dispose?: MeshProperties['dispose'];
        interactive?: boolean | undefined;
        ignorePointer?: boolean | undefined;
        lookAt?: MeshProperties['lookAt'];
        geometry: MeshProperties['geometry'];
        material: MeshProperties['material'];
        mesh?: ThreeMesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]> | undefined;
    };
    events: {
        click: CustomEvent<import("..").ThreltePointerEvent>;
        contextmenu: CustomEvent<import("..").ThreltePointerEvent>;
        pointerup: CustomEvent<import("..").ThreltePointerEvent>;
        pointerdown: CustomEvent<import("..").ThreltePointerEvent>;
        pointerenter: CustomEvent<import("..").ThreltePointerEvent>;
        pointerleave: CustomEvent<import("..").ThreltePointerEvent>;
        pointermove: CustomEvent<import("..").ThreltePointerEvent>;
        viewportenter: CustomEvent<import("three").Object3D<import("three").Event>>;
        viewportleave: CustomEvent<import("three").Object3D<import("three").Event>>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type MeshProps = typeof __propDef.props;
export declare type MeshEvents = typeof __propDef.events;
export declare type MeshSlots = typeof __propDef.slots;
export default class Mesh extends SvelteComponentTyped<MeshProps, MeshEvents, MeshSlots> {
    get mesh(): ThreeMesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>;
}
export {};
