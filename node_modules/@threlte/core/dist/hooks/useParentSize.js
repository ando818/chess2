import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';
import { browser } from '../lib/browser';
export const useParentSize = () => {
    const parentSizeStore = writable({ width: 0, height: 0 });
    let parentSize = { width: 0, height: 0 };
    const unsubscribeParentSize = parentSizeStore.subscribe((s) => (parentSize = s));
    onDestroy(unsubscribeParentSize);
    let el;
    const proxy = () => {
        const currentParentSize = parentSize;
        if (!el)
            return;
        if (!el.parentElement)
            return;
        const { clientWidth, clientHeight } = el.parentElement;
        if (clientWidth !== currentParentSize.width || clientHeight !== currentParentSize.height) {
            parentSizeStore.set({
                width: clientWidth,
                height: clientHeight
            });
        }
    };
    const parentSizeAction = (node) => {
        el = node;
        proxy();
        window.addEventListener('resize', proxy);
    };
    if (!browser) {
        return {
            parentSize: parentSizeStore,
            parentSizeAction
        };
    }
    onDestroy(() => {
        window.removeEventListener('resize', proxy);
    });
    return {
        parentSizeAction,
        parentSize: parentSizeStore
    };
};
