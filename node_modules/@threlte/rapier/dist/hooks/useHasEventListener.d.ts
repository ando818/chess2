export declare const useHasEventListeners: <T extends (type: any) => any = any>() => {
    hasEventListeners: (type: Parameters<T>[0]) => boolean;
};
