import type { SphericalImpulseJoint } from '@dimforge/rapier3d-compat';
import type { Position } from '@threlte/core';
export declare const useSphericalJoint: (anchorA: Position, anchorB: Position) => {
    joint: import("svelte/store").Writable<SphericalImpulseJoint>;
    rigidBodyA: import("svelte/store").Writable<import("@dimforge/rapier3d-compat").RigidBody | undefined>;
    rigidBodyB: import("svelte/store").Writable<import("@dimforge/rapier3d-compat").RigidBody | undefined>;
};
