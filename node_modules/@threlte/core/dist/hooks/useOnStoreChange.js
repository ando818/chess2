import { onDestroy } from 'svelte';
import { get } from 'svelte/store';
export const useOnStoreChange = (store, callback, options) => {
    let oldValue = get(store);
    let initialized = false;
    const unsubscribe = store.subscribe(async (newValue) => {
        if (!initialized) {
            oldValue = newValue;
            initialized = true;
            return;
        }
        if (options?.equalityFn && !options.equalityFn(newValue, oldValue)) {
            await callback(newValue, oldValue);
        }
        else {
            await callback(newValue, oldValue);
        }
        oldValue = newValue;
    });
    onDestroy(unsubscribe);
};
