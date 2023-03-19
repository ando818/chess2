import { Euler, Object3D, Quaternion, Vector3 } from 'three';
/**
 * Get the world position of an object.
 * If no target is provided, a globally used
 * temporary Vector3 is used.
 *
 * @param object
 * @param target
 * @returns
 */
export declare const getWorldPosition: (object: Object3D, target?: Vector3) => Vector3;
/**
 * Get the world quaternion of an object.
 * If no target is provided, a globally used
 * temporary Quaternion is used.
 *
 * @param object
 * @param target
 * @returns
 */
export declare const getWorldQuaternion: (object: Object3D, target?: Quaternion) => Quaternion;
/**
 * Get the world rotation of an object.
 * If no target is provided, a globally used
 * temporary Euler is used.
 *
 * @param object
 * @param target
 * @returns
 */
export declare const getWorldRotation: (object: Object3D, target?: Euler) => Euler;
/**
 * Get the world scale of an object.
 * If no target is provided, a globally used
 * temporary Vector3 is used.
 *
 * @param object
 * @param target
 * @returns
 */
export declare const getWorldScale: (object: Object3D, target?: Vector3) => Vector3;
