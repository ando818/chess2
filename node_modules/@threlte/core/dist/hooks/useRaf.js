import { browser } from '../lib/browser';
import { onDestroy } from 'svelte';
export const useRaf = (cb) => {
    if (!browser)
        return;
    let handle;
    const tick = () => {
        cb();
        handle = requestAnimationFrame(tick);
    };
    tick();
    onDestroy(() => {
        if (!handle)
            return;
        cancelAnimationFrame(handle);
    });
};
