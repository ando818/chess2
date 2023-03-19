import { type Writable } from 'svelte/store';
/**
 * A store that only ever updates if the objects are actually different.
 * Accepts any object that has a property "uuid" (i.e. most Three.js objects).
 *
 * ### Example
 *
 * ```ts
 * const store = createObjectStore(object)
 * store.set(sameObject) // will not update
 * store.set(otherObject) // will update
 * ```
 *
 * @param object
 * @returns store
 */
export declare function createObjectStore<T extends {
    uuid: string;
} | undefined>(object: T, onChange?: (newObject: T, oldObject: T) => void): Writable<T>;
export declare function createObjectStore<T extends {
    uuid: string;
}>(object: T, onChange?: (newObject: T, oldObject: T) => void): Writable<T>;
