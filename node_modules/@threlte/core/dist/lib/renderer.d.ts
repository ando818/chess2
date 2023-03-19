import type { ShadowMapType, WebGLRendererParameters } from 'three';
import type { Size, ThrelteContext } from '../types/types';
export declare const createRendererAndComposer: (ctx: ThrelteContext, canvas: HTMLCanvasElement, rendererParameters: WebGLRendererParameters | undefined) => void;
export declare const setRendererColorOutput: (ctx: ThrelteContext, linear: boolean, flat: boolean) => void;
export declare const setRendererAndComposerSize: (ctx: ThrelteContext, size: Size, dpr: number) => void;
export declare const setRendererShadows: (ctx: ThrelteContext, shadows: boolean, shadowMapType: ShadowMapType) => void;
