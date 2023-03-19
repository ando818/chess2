import { SvelteComponentTyped } from "svelte";
import type { Text as TextType } from '../../types/types';
import type { TextProperties } from '../../types/components';
declare const __propDef: {
    props: {
        position?: TextProperties['position'];
        scale?: TextProperties['scale'];
        rotation?: TextProperties['rotation'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: TextProperties['castShadow'];
        receiveShadow?: TextProperties['receiveShadow'];
        frustumCulled?: TextProperties['frustumCulled'];
        renderOrder?: TextProperties['renderOrder'];
        visible?: TextProperties['visible'];
        userData?: TextProperties['userData'];
        dispose?: TextProperties['dispose'];
        interactive?: boolean | undefined;
        ignorePointer?: boolean | undefined;
        lookAt?: TextProperties['lookAt'];
        text?: TextProperties['text'];
        anchorX?: TextProperties['anchorX'];
        anchorY?: TextProperties['anchorY'];
        curveRadius?: TextProperties['curveRadius'];
        font?: TextProperties['font'];
        fontSize?: TextProperties['fontSize'];
        letterSpacing?: TextProperties['letterSpacing'];
        lineHeight?: TextProperties['lineHeight'];
        maxWidth?: TextProperties['maxWidth'];
        overflowWrap?: TextProperties['overflowWrap'];
        textAlign?: TextProperties['textAlign'];
        textIndent?: TextProperties['textIndent'];
        whiteSpace?: TextProperties['whiteSpace'];
        material?: TextProperties['material'] | null;
        color?: TextProperties['color'] | null;
        depthOffset?: TextProperties['depthOffset'];
        clipRect?: TextProperties['clipRect'] | null;
        glyphGeometryDetail?: TextProperties['glyphGeometryDetail'];
        sdfGlyphSize?: TextProperties['sdfGlyphSize'];
        outlineWidth?: TextProperties['outlineWidth'];
        outlineColor?: TextProperties['outlineColor'];
        outlineOpacity?: TextProperties['outlineOpacity'];
        outlineBlur?: TextProperties['outlineBlur'];
        outlineOffsetX?: TextProperties['outlineOffsetX'];
        outlineOffsetY?: TextProperties['outlineOffsetY'];
        strokeWidth?: TextProperties['strokeWidth'];
        strokeColor?: TextProperties['strokeColor'];
        strokeOpacity?: TextProperties['strokeOpacity'];
        fillOpacity?: TextProperties['fillOpacity'];
        direction?: TextProperties['direction'];
        textObject?: TextType | undefined;
    };
    events: {
        click: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        contextmenu: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        pointerup: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        pointerdown: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        pointerenter: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        pointerleave: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        pointermove: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        viewportenter: CustomEvent<import("three").Object3D<import("three").Event>>;
        viewportleave: CustomEvent<import("three").Object3D<import("three").Event>>;
        sync: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type TextProps = typeof __propDef.props;
export declare type TextEvents = typeof __propDef.events;
export declare type TextSlots = typeof __propDef.slots;
export default class Text extends SvelteComponentTyped<TextProps, TextEvents, TextSlots> {
    get textObject(): TextType;
}
export {};
