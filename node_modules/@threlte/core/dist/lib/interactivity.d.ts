import type { ThrelteContext, ThrelteRenderContext, ThrelteRootContext } from '../types/types';
/**
 * Mouse and Pointer Events dispatch events on Threlte components:
 * ```
 * click: ThreltePointerEvent;
 * contextmenu: ThreltePointerEvent;
 * pointerup: ThreltePointerEvent;
 * pointerdown: ThreltePointerEvent;
 * pointermove: ThreltePointerEvent;
 * ```
 *
 * @param ctx
 * @param rootCtx
 * @param renderCtx
 * @returns
 */
export declare const useEventRaycast: (ctx: ThrelteContext, rootCtx: ThrelteRootContext, renderCtx: ThrelteRenderContext) => {
    onClick: (e: MouseEvent | PointerEvent) => void;
    onContextMenu: (e: MouseEvent | PointerEvent) => void;
    onPointerUp: (e: MouseEvent | PointerEvent) => void;
    onPointerDown: (e: MouseEvent | PointerEvent) => void;
    onPointerMove: (e: MouseEvent | PointerEvent) => void;
};
/**
 * Some events can't be captured on Mouse- or PointerEvents.
 * Specifically pointerleave and pointerenter are hard to capture
 * as these events fire, when the pointer/cursor leaves the canvas
 * element.
 */
export declare const useFrameloopRaycast: (ctx: ThrelteContext, rootCtx: ThrelteRootContext) => {
    raycast: () => void;
};
