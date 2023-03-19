import type { Writable } from 'svelte/store';
import { Camera, Matrix4, Object3D, Raycaster } from 'three';
export declare const defaultCalculatePosition: (obj: Object3D, camera: Camera, size: {
    width: number;
    height: number;
}) => [number, number];
export declare const isObjectBehindCamera: (el: Object3D, camera: Camera) => boolean;
export declare const isObjectVisible: (el: Object3D, camera: Camera, raycaster: Raycaster, occlude: Object3D[]) => boolean;
export declare const objectScale: (el: Object3D, camera: Camera) => number;
export declare const objectZIndex: (el: Object3D, camera: Camera, zIndexRange: Array<number>) => number | undefined;
export declare const epsilon: (value: number) => number;
export declare const getCSSMatrix: (matrix: Matrix4, multipliers: number[], prepend?: string) => string;
export declare const getCameraCSSMatrix: (matrix: Matrix4) => string;
export declare const getObjectCSSMatrix: (matrix: Matrix4, factor: number) => string;
export declare const compileStyles: (styles: Partial<CSSStyleDeclaration>) => string;
export declare const updateStyles: (store: Writable<Partial<CSSStyleDeclaration>>, styles: Partial<CSSStyleDeclaration>) => void;
