import { writable } from 'svelte/store';
export const useMemo = (callback) => {
    let initialCallDone = false;
    const memoized = writable(callback());
    const memoize = (..._args) => {
        if (!initialCallDone) {
            initialCallDone = true;
            return;
        }
        memoized.set(callback());
    };
    return {
        ...memoized,
        memoize
    };
};
