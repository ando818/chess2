import type { Position, Rotation, Scale, LookAt } from '@threlte/core';
import { Object3D } from 'three';
export declare const applyTransforms: (object: Object3D, position?: Position, rotation?: Rotation, scale?: Scale, lookAt?: LookAt) => void;
