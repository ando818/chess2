import type { Collider, RigidBody } from '@dimforge/rapier3d-compat';
import RAPIER from '@dimforge/rapier3d-compat';
import type { Object3D } from 'three';
import type { ColliderEventDispatcher, ColliderEventDispatchers, RigidBodyEventDispatcher, RigidBodyEventDispatchers } from '../types/types';
export declare const createRapierContext: (gravity: RAPIER.Vector, rawIntegrationParameters?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawIntegrationParameters | undefined, rawIslands?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawIslandManager | undefined, rawBroadPhase?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawBroadPhase | undefined, rawNarrowPhase?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawNarrowPhase | undefined, rawBodies?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawRigidBodySet | undefined, rawColliders?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawColliderSet | undefined, rawImpulseJoints?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawImpulseJointSet | undefined, rawMultibodyJoints?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawMultibodyJointSet | undefined, rawCCDSolver?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawCCDSolver | undefined, rawQueryPipeline?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawQueryPipeline | undefined, rawPhysicsPipeline?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawPhysicsPipeline | undefined, rawSerializationPipeline?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawSerializationPipeline | undefined, rawDebugRenderPipeline?: import("@dimforge/rapier3d-compat/rapier_wasm3d").RawDebugRenderPipeline | undefined) => {
    rapier: typeof RAPIER;
    world: RAPIER.World;
    colliderObjects: Map<number, Object3D<import("three").Event>>;
    rigidBodyObjects: Map<number, Object3D<import("three").Event>>;
    rigidBodyEventDispatchers: RigidBodyEventDispatchers;
    colliderEventDispatchers: ColliderEventDispatchers;
    addColliderToContext: (collider: Collider, object: Object3D, eventDispatcher: ColliderEventDispatcher) => void;
    removeColliderFromContext: (collider: Collider) => void;
    addRigidBodyToContext: (rigidBody: RigidBody, object: Object3D, eventDispatcher: RigidBodyEventDispatcher) => void;
    removeRigidBodyFromContext: (rigidBody: RigidBody) => void;
    debug: import("svelte/store").Writable<boolean>;
};
