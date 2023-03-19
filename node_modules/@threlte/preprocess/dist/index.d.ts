import { preprocess } from 'svelte/compiler';
export declare type PreprocessOptions = {
    prefix?: string;
    /**
     * A map of extensions to import from. The key is the module to import from,
     * the value is an array of import names.
     */
    extensions: Record<string, string[]>;
};
/**
 * This preprocessor will transform <{prefix}.BoxGeometry>
 * into <Three type={BoxGeometry} /> + imports
 * @param options
 * @returns
 */
export declare const preprocessThrelte: (options?: PreprocessOptions) => Parameters<typeof preprocess>[1];
