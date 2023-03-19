import { Collider, World, RigidBody } from '@dimforge/rapier3d-compat';
import { type Object3D } from 'three';
import type { AutoCollidersShapes } from '../types/types';
/**
 *
 * Creates collider descriptions including default translations
 *
 * @param object
 * @param world
 * @param friction
 * @param restitution
 * @param collidersType
 * @param rigidBody
 * @returns
 */
export declare const createCollidersFromChildren: (object: Object3D, collidersType: AutoCollidersShapes, world: World, rigidBody?: RigidBody) => Collider[];
