const loaders = [];
export const useLoader = (loader, memoizeFn) => {
    const maybeLoader = loaders.find((ll) => ll instanceof loader);
    if (maybeLoader)
        return maybeLoader;
    const newLoader = memoizeFn();
    loaders.push(newLoader);
    return newLoader;
};
