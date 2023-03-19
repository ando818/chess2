import type { Writable } from 'svelte/store';
import type { Size, ThrelteAudioContext, ThrelteContext, ThrelteDisposalContext, ThrelteRenderContext, ThrelteRootContext } from '../types/types';
export declare const createContexts: (linear: boolean, flat: boolean, dpr: number, userSize: Writable<Size | undefined>, parentSize: Writable<Size>, debugFrameloop: boolean, frameloop: 'always' | 'demand' | 'never') => {
    ctx: ThrelteContext;
    rootCtx: ThrelteRootContext;
    renderCtx: ThrelteRenderContext;
    audioCtx: ThrelteAudioContext;
    disposalCtx: ThrelteDisposalContext;
    getCtx: () => ThrelteContext;
    getRootCtx: () => ThrelteRootContext;
    getRenderCtx: () => ThrelteRenderContext;
    getAudioCtx: () => ThrelteAudioContext;
    getDisposalCtx: () => ThrelteDisposalContext;
};
