export const debounce = (callback, waitFor) => {
    let timeout;
    return (...args) => {
        let result;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            result = callback(...args);
        }, waitFor);
        return result;
    };
};
