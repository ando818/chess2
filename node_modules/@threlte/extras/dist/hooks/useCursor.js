import { onDestroy } from 'svelte';
import { get, writable } from 'svelte/store';
import { useThrelte } from '@threlte/core';
export const useCursor = (onPointerOver = 'pointer', onPointerOut = 'auto') => {
    let hovering = false;
    const hoveringStore = writable(false);
    const onPointerEnter = () => {
        hoveringStore.set(true);
    };
    const onPointerLeave = () => {
        hoveringStore.set(false);
    };
    // Account for SSR use
    if (typeof window === 'undefined') {
        return {
            hovering: hoveringStore,
            onPointerEnter,
            onPointerLeave
        };
    }
    let el = document.body;
    const rootCtx = useThrelte();
    if (rootCtx && rootCtx.renderer)
        el = rootCtx.renderer.domElement;
    let onPointerOverValue = typeof onPointerOver === 'string' ? onPointerOver : get(onPointerOver);
    if (typeof onPointerOver !== 'string') {
        const unsubscribeOnPointerOver = onPointerOver.subscribe((cursorStyle) => {
            onPointerOverValue = cursorStyle;
            if (hovering) {
                el.style.cursor = cursorStyle;
            }
        });
        onDestroy(unsubscribeOnPointerOver);
    }
    let onPointerOutValue = typeof onPointerOut === 'string' ? onPointerOut : get(onPointerOut);
    if (typeof onPointerOut !== 'string') {
        const unsubscribeOnPointerOut = onPointerOut.subscribe((cursorStyle) => {
            onPointerOutValue = cursorStyle;
            if (!hovering) {
                el.style.cursor = cursorStyle;
            }
        });
        onDestroy(unsubscribeOnPointerOut);
    }
    const unsubscribeHovering = hoveringStore.subscribe((isHovering) => {
        hovering = isHovering;
        if (isHovering) {
            el.style.cursor = onPointerOverValue;
        }
        else {
            el.style.cursor = onPointerOutValue;
        }
    });
    onDestroy(unsubscribeHovering);
    // onDestroy: Reset the cursor style
    onDestroy(() => {
        el.style.cursor = onPointerOutValue;
    });
    return {
        hovering: hoveringStore,
        onPointerEnter,
        onPointerLeave
    };
};
