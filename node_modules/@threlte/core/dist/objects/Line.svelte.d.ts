import { SvelteComponentTyped } from "svelte";
import { BufferGeometry, Line as ThreeLine } from 'three';
import type { LineProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: LineProperties['position'];
        scale?: LineProperties['scale'];
        rotation?: LineProperties['rotation'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: LineProperties['castShadow'];
        receiveShadow?: LineProperties['receiveShadow'];
        frustumCulled?: LineProperties['frustumCulled'];
        renderOrder?: LineProperties['renderOrder'];
        visible?: LineProperties['visible'];
        userData?: LineProperties['userData'];
        dispose?: LineProperties['dispose'];
        interactive?: boolean | undefined;
        ignorePointer?: boolean | undefined;
        lookAt?: LineProperties['lookAt'];
        geometry?: LineProperties['geometry'];
        points?: LineProperties['points'];
        material: LineProperties['material'];
        line?: ThreeLine<BufferGeometry, import("three").Material | import("three").Material[]> | undefined;
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
export declare type LineProps = typeof __propDef.props;
export declare type LineEvents = typeof __propDef.events;
export declare type LineSlots = typeof __propDef.slots;
export default class Line extends SvelteComponentTyped<LineProps, LineEvents, LineSlots> {
    get line(): ThreeLine<BufferGeometry, import("three").Material | import("three").Material[]>;
}
export {};
