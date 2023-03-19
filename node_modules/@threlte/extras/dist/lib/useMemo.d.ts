export declare const useMemo: <U extends unknown>(callback: () => U) => {
    memoize: (..._args: any[]) => void;
    set(this: void, value: U): void;
    update(this: void, updater: import("svelte/store").Updater<U>): void;
    subscribe(this: void, run: import("svelte/store").Subscriber<U>, invalidate?: ((value?: U | undefined) => void) | undefined): import("svelte/store").Unsubscriber;
};
