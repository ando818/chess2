import { SvelteComponentTyped } from "svelte";
import { Vector3 } from 'three';
import { Line2 as ThreeLine2 } from 'three/examples/jsm/lines/Line2';
import type { Line2Properties } from '../types/components';
declare const __propDef: {
    props: {
        position?: Line2Properties['position'];
        scale?: Line2Properties['scale'];
        rotation?: Line2Properties['rotation'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: Line2Properties['castShadow'];
        receiveShadow?: Line2Properties['receiveShadow'];
        frustumCulled?: Line2Properties['frustumCulled'];
        renderOrder?: Line2Properties['renderOrder'];
        visible?: Line2Properties['visible'];
        userData?: Line2Properties['userData'];
        dispose?: Line2Properties['dispose'];
        interactive?: boolean | undefined;
        ignorePointer?: boolean | undefined;
        lookAt?: Line2Properties['lookAt'];
        points?: Vector3[] | import("three").Vector3Tuple[] | undefined;
        material: Line2Properties['material'];
        line2?: ThreeLine2 | undefined;
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
export declare type Line2Props = typeof __propDef.props;
export declare type Line2Events = typeof __propDef.events;
export declare type Line2Slots = typeof __propDef.slots;
export default class Line2 extends SvelteComponentTyped<Line2Props, Line2Events, Line2Slots> {
    get line2(): ThreeLine2;
}
export {};
