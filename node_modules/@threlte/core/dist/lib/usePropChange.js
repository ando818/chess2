export const usePropChange = (prop, equalityFn) => {
    let oldValue = prop;
    const onChange = (newValue, callback) => {
        if (equalityFn && !equalityFn(newValue, oldValue)) {
            callback(newValue, oldValue);
            oldValue = newValue;
        }
        else if (!equalityFn && newValue !== oldValue) {
            callback(newValue, oldValue);
            oldValue = newValue;
        }
    };
    return {
        onChange
    };
};
