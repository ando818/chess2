import type { Writable } from 'svelte/store';
import type { Size } from '../types/types';
export declare const useParentSize: () => {
    parentSizeAction: (node: HTMLElement) => void;
    parentSize: Writable<Size>;
};
