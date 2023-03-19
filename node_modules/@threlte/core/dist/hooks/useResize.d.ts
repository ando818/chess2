export declare type UseResizeOptions = {
    axis?: 'horizontal' | 'vertical' | 'both';
    runOnInit?: boolean;
    /**
     * In milliseconds
     */
    debounce?: number;
};
export declare const useResize: (fn: () => void, options?: UseResizeOptions) => void;
