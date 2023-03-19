import { MultibodyJoint, type ImpulseJoint, type RigidBody } from '@dimforge/rapier3d-compat';
import type { RapierContext } from '../types/types';
export declare const useJoint: <T extends ImpulseJoint | MultibodyJoint>(initializeJoint: (rigidBodyA: RigidBody, rigidBodyB: RigidBody, ctx: RapierContext) => T) => {
    joint: import("svelte/store").Writable<T>;
    rigidBodyA: import("svelte/store").Writable<RigidBody | undefined>;
    rigidBodyB: import("svelte/store").Writable<RigidBody | undefined>;
};
