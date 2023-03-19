/**
 * Callback to object changes.
 *
 * ### Example
 *
 * ```ts
 * const set = onObjectChange(object, (newObject, oldObject) => {
 *   console.log(newObject, oldObject)
 * })
 * set(sameObject) // will not trigger callback
 * set(otherObject) // will trigger callback
 * ```
 *
 * @param object
 * @returns store
 */
export declare function onObjectChange<T extends {
    uuid: string;
} | undefined>(object: T, onChange?: (newObject: T, oldObject: T) => void): (object: T) => void;
export declare function onObjectChange<T extends {
    uuid: string;
}>(object: T, onChange?: (newObject: T, oldObject: T) => void): (object: T) => void;
