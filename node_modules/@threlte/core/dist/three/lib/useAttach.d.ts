import type { Props } from '../types';
export declare const useAttach: <T>() => {
    update: (instance: T, parent: any, attach?: Props<T>["attach"] | undefined) => void;
};
