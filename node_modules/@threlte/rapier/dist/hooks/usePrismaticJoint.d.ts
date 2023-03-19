import type { PrismaticImpulseJoint } from '@dimforge/rapier3d-compat';
import type { Position } from '@threlte/core';
export declare const usePrismaticJoint: (anchorA: Position, anchorB: Position, axis: Position, limits?: [min: number, max: number]) => {
    joint: import("svelte/store").Writable<PrismaticImpulseJoint>;
    rigidBodyA: import("svelte/store").Writable<import("@dimforge/rapier3d-compat").RigidBody | undefined>;
    rigidBodyB: import("svelte/store").Writable<import("@dimforge/rapier3d-compat").RigidBody | undefined>;
};
