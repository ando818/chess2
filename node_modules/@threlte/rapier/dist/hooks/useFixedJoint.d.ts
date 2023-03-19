import type { FixedImpulseJoint } from '@dimforge/rapier3d-compat';
import type { Position, Rotation } from '@threlte/core';
export declare const useFixedJoint: (anchorA: Position, frameA: Rotation, anchorB: Position, frameB: Rotation) => {
    joint: import("svelte/store").Writable<FixedImpulseJoint>;
    rigidBodyA: import("svelte/store").Writable<import("@dimforge/rapier3d-compat").RigidBody | undefined>;
    rigidBodyB: import("svelte/store").Writable<import("@dimforge/rapier3d-compat").RigidBody | undefined>;
};
