export declare const usePropChange: <T extends unknown>(prop: T, equalityFn?: ((newValue: T, oldValue: T) => boolean) | undefined) => {
    onChange: (newValue: T, callback: (newValue: T, oldValue: T) => void) => void;
};
