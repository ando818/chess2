import { get } from 'svelte/store';
import { DefaultLoadingManager, sRGBEncoding, Texture, TextureLoader } from 'three';
import { invalidateGlobally } from '../Canvas.svelte';
import { browser } from '../lib/browser';
import { useLoader } from './useLoader';
import { useThrelteRoot } from './useThrelteRoot';
const loader = useLoader(TextureLoader, () => new TextureLoader(DefaultLoadingManager));
const loadTexture = (path, options) => {
    return loader.load(path, (t) => {
        invalidateGlobally('useTexture');
        options?.onLoad?.(t);
    }, (e) => {
        options?.onProgress?.(e);
    }, (e) => {
        options?.onError?.(e);
    });
};
const pathsIsString = (paths) => {
    return typeof paths === 'string';
};
const pathsIsArray = (paths) => {
    return Array.isArray(paths);
};
const convertTextureColor = (texture) => {
    try {
        const rootCtx = useThrelteRoot();
        if (!rootCtx)
            return texture;
        if (!get(rootCtx.linear))
            texture.encoding = sRGBEncoding;
    }
    catch (error) {
        console.warn('Calling useTexture outside component initialization does not support color correction.');
    }
    return texture;
};
export function useTexture(paths, options) {
    if (pathsIsString(paths)) {
        if (!browser)
            return new Texture();
        return convertTextureColor(loadTexture(paths, options));
    }
    else if (pathsIsArray(paths)) {
        if (!browser) {
            return paths.map(() => new Texture());
        }
        return paths.map((path) => convertTextureColor(loadTexture(path, options)));
    }
    else {
        const entries = Object.entries(paths);
        const map = entries.reduce((acc, [key, value]) => {
            acc[key] = browser ? loadTexture(value, options) : new Texture();
            return acc;
        }, {});
        return map;
    }
}
