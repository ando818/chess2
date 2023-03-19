import type { ThrelteContext, ThrelteUseFrame, ThrelteUseFrameOptions } from '../types/types';
/**
 * Adds a handler to threltes unified render loop.
 *
 * `start` and `stop` functions are returned and the options allow
 * setting the handler to not start automatically.
 *
 * Provide an order to have your framehandlers running in a specific order.
 * Handlers are ordered from low to high when executing.
 * @param {(ctx: ThrelteContext, delta: number) => void} fn callback function
 * @param {ThrelteUseFrameOptions} options options
 * @returns {ThrelteUseFrame}
 */
export declare const useFrame: (fn: (ctx: ThrelteContext, delta: number) => void, options?: ThrelteUseFrameOptions) => ThrelteUseFrame;
