import { browser } from '../lib/browser';
import { onDestroy } from 'svelte';
import { debounce } from '../lib/debounce';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useResize = (fn, options = {}) => {
    if (!browser)
        return;
    if (options.runOnInit)
        fn();
    if (options.debounce !== undefined && options.debounce > 0) {
        fn = debounce(fn, options.debounce);
    }
    const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    const proxy = () => {
        if (options.axis === 'horizontal') {
            if (viewport.width !== window.innerWidth) {
                fn();
            }
        }
        else if (options.axis === 'vertical') {
            if (viewport.height !== window.innerHeight) {
                fn();
            }
        }
        else {
            if (viewport.width !== window.innerWidth || viewport.height !== window.innerHeight) {
                fn();
            }
        }
    };
    window.addEventListener('resize', proxy);
    onDestroy(() => {
        window.removeEventListener('resize', proxy);
    });
};
