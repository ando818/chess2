export const resolve = (target, propertyPath) => {
    if (propertyPath.includes('.')) {
        const path = propertyPath.split('.');
        const key = path.pop();
        for (let i = 0; i < path.length; i += 1) {
            target = target[path[i]];
        }
        return {
            target,
            key
        };
    }
    else {
        return {
            target,
            key: propertyPath
        };
    }
};
