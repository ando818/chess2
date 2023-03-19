import { SvelteComponentTyped } from "svelte";
import { CoefficientCombineRule, Collider, ColliderDesc, type RigidBody } from '@dimforge/rapier3d-compat';
import { type Position, type Rotation } from '@threlte/core';
declare class __sveltets_Render<Shape extends 'ball' | 'capsule' | 'segment' | 'triangle' | 'roundTriangle' | 'polyline' | 'trimesh' | 'cuboid' | 'roundCuboid' | 'heightfield' | 'cylinder' | 'roundCylinder' | 'cone' | 'roundCone' | 'convexHull' | 'convexMesh' | 'roundConvexHull' | 'roundConvexMesh', Args extends Parameters<typeof ColliderDesc[Shape]>, Density extends number | undefined, Mass extends Density extends undefined ? number | undefined : undefined, MassProperties extends Density extends undefined ? Mass extends undefined ? {
    mass: number;
    centerOfMass: Position;
    principalAngularInertia: Position;
    angularInertiaLocalFrame: Rotation;
} : undefined : undefined> {
    props(): {
        shape: Shape;
        args: Args;
        position?: Position | undefined;
        rotation?: Rotation | undefined;
        scale?: import("@threlte/core").Scale | undefined;
        lookAt?: import("@threlte/core").LookAt | undefined;
        restitution?: number | undefined;
        restitutionCombineRule?: CoefficientCombineRule | undefined;
        friction?: number | undefined;
        frictionCombineRule?: CoefficientCombineRule | undefined;
        sensor?: boolean | undefined;
        collider?: Collider | undefined;
        contactForceEventThreshold?: number | undefined;
        density?: Density | undefined;
    } | {
        shape: Shape;
        args: Args;
        position?: Position | undefined;
        rotation?: Rotation | undefined;
        scale?: import("@threlte/core").Scale | undefined;
        lookAt?: import("@threlte/core").LookAt | undefined;
        restitution?: number | undefined;
        restitutionCombineRule?: CoefficientCombineRule | undefined;
        friction?: number | undefined;
        frictionCombineRule?: CoefficientCombineRule | undefined;
        sensor?: boolean | undefined;
        collider?: Collider | undefined;
        contactForceEventThreshold?: number | undefined;
        mass?: Mass | undefined;
    } | {
        shape: Shape;
        args: Args;
        position?: Position | undefined;
        rotation?: Rotation | undefined;
        scale?: import("@threlte/core").Scale | undefined;
        lookAt?: import("@threlte/core").LookAt | undefined;
        restitution?: number | undefined;
        restitutionCombineRule?: CoefficientCombineRule | undefined;
        friction?: number | undefined;
        frictionCombineRule?: CoefficientCombineRule | undefined;
        sensor?: boolean | undefined;
        collider?: Collider | undefined;
        contactForceEventThreshold?: number | undefined;
        mass?: Mass | undefined;
        massProperties?: MassProperties | undefined;
    };
    events(): {
        collisionenter: CustomEvent<{
            targetCollider: Collider;
            targetRigidBody: RigidBody | null;
            manifold: import("@dimforge/rapier3d-compat").TempContactManifold;
            flipped: boolean;
        }>;
        collisionexit: CustomEvent<{
            targetCollider: Collider;
            targetRigidBody: RigidBody | null;
        }>;
        sensorenter: CustomEvent<{
            targetCollider: Collider;
            targetRigidBody: RigidBody | null;
        }>;
        sensorexit: CustomEvent<{
            targetCollider: Collider;
            targetRigidBody: RigidBody | null;
        }>;
        contact: CustomEvent<{
            targetCollider: Collider;
            targetRigidBody: RigidBody | null;
            maxForceDirection: import("@dimforge/rapier3d-compat").Vector;
            maxForceMagnitude: number;
            totalForce: import("@dimforge/rapier3d-compat").Vector;
            totalForceMagnitude: number;
        }>;
    };
    slots(): {
        default: {};
    };
}
export declare type ColliderProps<Shape extends 'ball' | 'capsule' | 'segment' | 'triangle' | 'roundTriangle' | 'polyline' | 'trimesh' | 'cuboid' | 'roundCuboid' | 'heightfield' | 'cylinder' | 'roundCylinder' | 'cone' | 'roundCone' | 'convexHull' | 'convexMesh' | 'roundConvexHull' | 'roundConvexMesh', Args extends Parameters<typeof ColliderDesc[Shape]>, Density extends number | undefined, Mass extends Density extends undefined ? number | undefined : undefined, MassProperties extends Density extends undefined ? Mass extends undefined ? {
    mass: number;
    centerOfMass: Position;
    principalAngularInertia: Position;
    angularInertiaLocalFrame: Rotation;
} : undefined : undefined> = ReturnType<__sveltets_Render<Shape, Args, Density, Mass, MassProperties>['props']>;
export declare type ColliderEvents<Shape extends 'ball' | 'capsule' | 'segment' | 'triangle' | 'roundTriangle' | 'polyline' | 'trimesh' | 'cuboid' | 'roundCuboid' | 'heightfield' | 'cylinder' | 'roundCylinder' | 'cone' | 'roundCone' | 'convexHull' | 'convexMesh' | 'roundConvexHull' | 'roundConvexMesh', Args extends Parameters<typeof ColliderDesc[Shape]>, Density extends number | undefined, Mass extends Density extends undefined ? number | undefined : undefined, MassProperties extends Density extends undefined ? Mass extends undefined ? {
    mass: number;
    centerOfMass: Position;
    principalAngularInertia: Position;
    angularInertiaLocalFrame: Rotation;
} : undefined : undefined> = ReturnType<__sveltets_Render<Shape, Args, Density, Mass, MassProperties>['events']>;
export declare type ColliderSlots<Shape extends 'ball' | 'capsule' | 'segment' | 'triangle' | 'roundTriangle' | 'polyline' | 'trimesh' | 'cuboid' | 'roundCuboid' | 'heightfield' | 'cylinder' | 'roundCylinder' | 'cone' | 'roundCone' | 'convexHull' | 'convexMesh' | 'roundConvexHull' | 'roundConvexMesh', Args extends Parameters<typeof ColliderDesc[Shape]>, Density extends number | undefined, Mass extends Density extends undefined ? number | undefined : undefined, MassProperties extends Density extends undefined ? Mass extends undefined ? {
    mass: number;
    centerOfMass: Position;
    principalAngularInertia: Position;
    angularInertiaLocalFrame: Rotation;
} : undefined : undefined> = ReturnType<__sveltets_Render<Shape, Args, Density, Mass, MassProperties>['slots']>;
export default class Collider<Shape extends 'ball' | 'capsule' | 'segment' | 'triangle' | 'roundTriangle' | 'polyline' | 'trimesh' | 'cuboid' | 'roundCuboid' | 'heightfield' | 'cylinder' | 'roundCylinder' | 'cone' | 'roundCone' | 'convexHull' | 'convexMesh' | 'roundConvexHull' | 'roundConvexMesh', Args extends Parameters<typeof ColliderDesc[Shape]>, Density extends number | undefined, Mass extends Density extends undefined ? number | undefined : undefined, MassProperties extends Density extends undefined ? Mass extends undefined ? {
    mass: number;
    centerOfMass: Position;
    principalAngularInertia: Position;
    angularInertiaLocalFrame: Rotation;
} : undefined : undefined> extends SvelteComponentTyped<ColliderProps<Shape, Args, Density, Mass, MassProperties>, ColliderEvents<Shape, Args, Density, Mass, MassProperties>, ColliderSlots<Shape, Args, Density, Mass, MassProperties>> {
}
export {};
