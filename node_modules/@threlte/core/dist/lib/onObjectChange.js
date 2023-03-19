export function onObjectChange(object, onChange) {
    let currentObject = object;
    const set = (newObject) => {
        if (currentObject === undefined && newObject === undefined)
            return;
        if (newObject?.uuid === currentObject?.uuid)
            return;
        onChange?.(newObject, currentObject);
        currentObject = newObject;
    };
    return set;
}
