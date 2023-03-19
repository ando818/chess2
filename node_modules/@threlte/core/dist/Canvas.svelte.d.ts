import { SvelteComponentTyped } from "svelte";
import type { ShadowMapType, WebGLRendererParameters } from 'three';
import type { Size } from './types/types';
export declare const invalidateGlobally: (debugFrameloopMessage?: string) => void;
declare const __propDef: {
    props: {
        dpr?: number | undefined;
        flat?: boolean | undefined;
        linear?: boolean | undefined;
        frameloop?: "always" | "never" | "demand" | undefined;
        debugFrameloop?: boolean | undefined;
        shadows?: boolean | undefined;
        shadowMapType?: ShadowMapType | undefined;
        size?: Size | undefined;
        rendererParameters?: WebGLRendererParameters | undefined;
        ctx?: import("./types/types").ThrelteContext | undefined;
        rootCtx?: import("./types/types").ThrelteRootContext | undefined;
        audioCtx?: import("./types/types").ThrelteAudioContext | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CanvasProps = typeof __propDef.props;
export declare type CanvasEvents = typeof __propDef.events;
export declare type CanvasSlots = typeof __propDef.slots;
export default class Canvas extends SvelteComponentTyped<CanvasProps, CanvasEvents, CanvasSlots> {
}
export {};
