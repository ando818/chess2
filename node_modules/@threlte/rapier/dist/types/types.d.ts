import type { createEventDispatcher } from 'svelte';
import type { RigidBody, RigidBodyHandle, TempContactManifold, ColliderHandle, Collider, Vector } from '@dimforge/rapier3d-compat';
import type { createRapierContext } from '../lib/createRapierContext';
import type { Writable } from 'svelte/store';
import type { useHasEventListeners } from '../hooks/useHasEventListener';
export declare type ColliderShapes = 'ball' | 'capsule' | 'segment' | 'triangle' | 'roundTriangle' | 'polyline' | 'trimesh' | 'cuboid' | 'roundCuboid' | 'heightfield' | 'cylinder' | 'roundCylinder' | 'cone' | 'roundCone' | 'convexHull' | 'convexMesh' | 'roundConvexHull' | 'roundConvexMesh';
export declare type AutoCollidersShapes = 'cuboid' | 'ball' | 'trimesh' | 'convexHull' | 'capsule';
export declare type ColliderEventMap = {
    collisionenter: {
        targetCollider: Collider;
        targetRigidBody: RigidBody | null;
        manifold: TempContactManifold;
        flipped: boolean;
    };
    collisionexit: {
        targetCollider: Collider;
        targetRigidBody: RigidBody | null;
    };
    sensorenter: {
        targetCollider: Collider;
        targetRigidBody: RigidBody | null;
    };
    sensorexit: {
        targetCollider: Collider;
        targetRigidBody: RigidBody | null;
    };
    contact: {
        targetCollider: Collider;
        targetRigidBody: RigidBody | null;
        maxForceDirection: Vector;
        maxForceMagnitude: number;
        totalForce: Vector;
        totalForceMagnitude: number;
    };
};
export declare type CollisionEnterEvent = CustomEvent<ColliderEventMap['collisionenter']>;
export declare type CollisionExitEvent = CustomEvent<ColliderEventMap['collisionexit']>;
export declare type SensorEnterEvent = CustomEvent<ColliderEventMap['sensorenter']>;
export declare type SensorExitEvent = CustomEvent<ColliderEventMap['sensorexit']>;
export declare type ContactEvent = CustomEvent<ColliderEventMap['contact']>;
export declare type RigidBodyEventMap = ColliderEventMap & {
    sleep: void;
    wake: void;
};
export declare type RigidBodyEventDispatcher = ReturnType<typeof createEventDispatcher<RigidBodyEventMap>>;
export declare type ColliderEventDispatcher = ReturnType<typeof createEventDispatcher<ColliderEventMap>>;
export declare type RigidBodyEventDispatchers = Map<RigidBodyHandle, RigidBodyEventDispatcher>;
export declare type ColliderEventDispatchers = Map<ColliderHandle, ColliderEventDispatcher>;
export declare type RapierContext = ReturnType<typeof createRapierContext>;
export declare type CollisionGroupsContext = Writable<number> | undefined;
export declare type RigidBodyUserData = {
    hasEventListeners?: ReturnType<typeof useHasEventListeners<RigidBodyEventDispatcher>>['hasEventListeners'];
};
export declare type ThrelteRigidBody = RigidBody & {
    userData?: RigidBodyUserData;
};
export declare type RigidBodyContext = ThrelteRigidBody;
export declare type CollisionGroupsBitMask = (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[];
