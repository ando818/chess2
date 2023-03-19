import type { ColliderDesc } from '@dimforge/rapier3d-compat';
import type { Vector3 } from 'three';
import type { ColliderShapes } from '../types/types';
export declare const scaleVertices: (vertices: ArrayLike<number>, scale: Vector3) => number[];
export declare const scaleColliderArgs: <Shape extends ColliderShapes>(shape: Shape, args: Parameters<(typeof ColliderDesc)[Shape]>, scale: Vector3) => Parameters<(typeof ColliderDesc)[Shape]>;
