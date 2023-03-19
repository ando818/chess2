import { tick } from 'svelte';
import { writable } from 'svelte/store';
export const useTicked = () => {
    const ticked = writable(false);
    const init = async () => {
        await tick();
        ticked.set(true);
    };
    init();
    return ticked;
};
