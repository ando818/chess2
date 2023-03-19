import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';
export function createObjectStore(object, onChange) {
    const objectStore = writable(object);
    let unwrappedObject = object;
    const unsubscribeObjectStore = objectStore.subscribe((o) => (unwrappedObject = o));
    onDestroy(unsubscribeObjectStore);
    const set = (newObject) => {
        if (newObject?.uuid === unwrappedObject?.uuid)
            return;
        const oldObject = unwrappedObject;
        objectStore.set(newObject);
        onChange?.(newObject, oldObject);
    };
    const update = (callback) => {
        const newObject = callback(unwrappedObject);
        if (newObject?.uuid === unwrappedObject?.uuid)
            return;
        const oldObject = unwrappedObject;
        objectStore.set(newObject);
        onChange?.(newObject, oldObject);
    };
    return {
        ...objectStore,
        set,
        update
    };
}
