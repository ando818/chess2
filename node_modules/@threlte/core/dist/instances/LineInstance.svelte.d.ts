import { SvelteComponentTyped } from "svelte";
import type { LineInstanceProperties } from '../types/components';
declare const __propDef: {
    props: {
        line: LineInstanceProperties['line'];
        position?: LineInstanceProperties['position'];
        scale?: LineInstanceProperties['scale'];
        rotation?: LineInstanceProperties['rotation'];
        lookAt?: LineInstanceProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: LineInstanceProperties['castShadow'];
        receiveShadow?: LineInstanceProperties['receiveShadow'];
        frustumCulled?: LineInstanceProperties['frustumCulled'];
        renderOrder?: LineInstanceProperties['renderOrder'];
        visible?: LineInstanceProperties['visible'];
        userData?: LineInstanceProperties['userData'];
        dispose?: LineInstanceProperties['dispose'];
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
export declare type LineInstanceProps = typeof __propDef.props;
export declare type LineInstanceEvents = typeof __propDef.events;
export declare type LineInstanceSlots = typeof __propDef.slots;
export default class LineInstance extends SvelteComponentTyped<LineInstanceProps, LineInstanceEvents, LineInstanceSlots> {
}
export {};
