import { Texture } from 'three';
declare type UseTextureOptions = {
    onLoad?: (texture: Texture) => void;
    onProgress?: (event: ProgressEvent<EventTarget>) => void;
    onError?: (event: ErrorEvent) => void;
};
export declare function useTexture(path: string, options?: UseTextureOptions): Texture;
export declare function useTexture(paths: string[], options?: UseTextureOptions): Texture[];
export declare function useTexture<T extends string>(paths: Record<T, string>, options?: UseTextureOptions): Record<T, Texture>;
export {};
