import { type Writable } from 'svelte/store';
import type { ThrelteGltf } from '../types/types';
import { type SceneGraph } from '../lib/buildSceneGraph';
declare type UseGltfOptions = {
    useDraco?: boolean | string;
    useMeshopt?: boolean;
};
export declare const useGltf: <Graph extends SceneGraph = {
    nodes: Record<string, any>;
    materials: Record<string, any>;
}>(url: string, options?: UseGltfOptions) => {
    gltf: Writable<ThrelteGltf<Graph> | undefined>;
};
export {};
