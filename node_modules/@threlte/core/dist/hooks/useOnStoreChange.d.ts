import { type Readable, type Writable } from 'svelte/store';
declare type EqualityFn<T> = (newValue: T, oldValue: T) => boolean;
export declare const useOnStoreChange: <T>(store: Writable<T> | Readable<T>, callback: (newValue: T, oldValue: T) => Promise<void> | void, options?: {
    equalityFn: EqualityFn<T>;
} | undefined) => void;
export {};
