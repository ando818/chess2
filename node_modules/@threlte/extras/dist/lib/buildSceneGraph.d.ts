import type { Object3D } from 'three';
export declare type Nodes = Record<string, any>;
export declare type Materials = Record<string, any>;
export declare type SceneGraph = {
    nodes: Nodes;
    materials: Materials;
};
export declare const buildSceneGraph: <Graph extends SceneGraph = any>(object: Object3D) => Graph;
