/**
 * Only scalar values are memoized, objects and arrays are considered
 * non-equa by default, to ensure reactivity works as you would
 * expect in svelte.
 * @param value
 * @returns
 */
export declare const memoizeProp: (value: unknown) => boolean;
declare type PropOptions = {
    manualCamera?: boolean;
};
export declare const useProps: () => {
    updateProps: <T>(instance: T, props: Record<string, any>, options: PropOptions) => void;
};
export {};
