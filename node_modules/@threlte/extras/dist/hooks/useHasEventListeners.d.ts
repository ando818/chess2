export declare const useHasEventListeners: <T extends (type: any) => void = any>() => {
    hasEventListeners: (type: Parameters<T>[0]) => boolean;
};
