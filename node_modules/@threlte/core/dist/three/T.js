import PreprocessFallbackComponent from './PreprocessFallback.svelte';
/**
 * T is an abstract component that is used in conjunction with the package
 * '@threlte/preprocess' to render any THREE module in threlte. This proxy is
 * used to display an error message if the preprocessor is not registered.
 */
export const T = new Proxy(PreprocessFallbackComponent, {
    get(target, prop) {
        return target[prop] || PreprocessFallbackComponent;
    }
});
