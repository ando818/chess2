import { type Readable } from 'svelte/store';
export declare const useProgress: () => {
    finishedOnce: Readable<boolean>;
    active: Readable<boolean>;
    item: Readable<string | undefined>;
    loaded: Readable<number>;
    total: Readable<number>;
    errors: Readable<string[]>;
    progress: Readable<number>;
};
