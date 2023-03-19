import { SvelteComponentTyped } from "svelte";
import { LineSegments as ThreeLineSegments } from 'three';
import type { LineSegmentsProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: LineSegmentsProperties['position'];
        scale?: LineSegmentsProperties['scale'];
        rotation?: LineSegmentsProperties['rotation'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: LineSegmentsProperties['castShadow'];
        receiveShadow?: LineSegmentsProperties['receiveShadow'];
        frustumCulled?: LineSegmentsProperties['frustumCulled'];
        renderOrder?: LineSegmentsProperties['renderOrder'];
        visible?: LineSegmentsProperties['visible'];
        userData?: LineSegmentsProperties['userData'];
        dispose?: LineSegmentsProperties['dispose'];
        interactive?: boolean | undefined;
        ignorePointer?: boolean | undefined;
        lookAt?: LineSegmentsProperties['lookAt'];
        geometry: LineSegmentsProperties['geometry'];
        material: LineSegmentsProperties['material'];
        lineSegments?: ThreeLineSegments<import("three").BufferGeometry, import("three").Material | import("three").Material[]> | undefined;
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
export declare type LineSegmentsProps = typeof __propDef.props;
export declare type LineSegmentsEvents = typeof __propDef.events;
export declare type LineSegmentsSlots = typeof __propDef.slots;
export default class LineSegments extends SvelteComponentTyped<LineSegmentsProps, LineSegmentsEvents, LineSegmentsSlots> {
    get lineSegments(): ThreeLineSegments<import("three").BufferGeometry, import("three").Material | import("three").Material[]>;
}
export {};
