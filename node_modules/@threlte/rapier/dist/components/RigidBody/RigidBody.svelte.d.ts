import { SvelteComponentTyped } from "svelte";
import type { RigidBody } from '@dimforge/rapier3d-compat';
import type { RigidBodyProperties } from '../../types/components';
declare const __propDef: {
    props: {
        debug?: boolean | undefined;
        type?: import("../../lib/parseRigidBodyType").RigidBodyTypeString | undefined;
        canSleep?: boolean | undefined;
        linearVelocity?: import("@threlte/core").Position | undefined;
        angularVelocity?: import("@threlte/core").Rotation | undefined;
        gravityScale?: number | undefined;
        ccd?: boolean | undefined;
        angularDamping?: number | undefined;
        linearDamping?: number | undefined;
        lockRotations?: boolean | undefined;
        lockTranslations?: boolean | undefined;
        enabledRotations?: import("../../types/components").Boolean3Array | undefined;
        enabledTranslations?: import("../../types/components").Boolean3Array | undefined;
        dominance?: number | undefined;
        position?: RigidBodyProperties['position'];
        rotation?: RigidBodyProperties['rotation'];
        scale?: RigidBodyProperties['scale'];
        lookAt?: RigidBodyProperties['lookAt'];
        /**
           * Export the rigidBody only after positional initialization
           */ rigidBody?: RigidBody | undefined;
    };
    slots: {
        default: {};
    };
    getters: {};
    events: {
        collisionenter: CustomEvent<{
            targetCollider: import("@dimforge/rapier3d-compat").Collider;
            targetRigidBody: RigidBody | null;
            manifold: import("@dimforge/rapier3d-compat").TempContactManifold;
            flipped: boolean;
        }>;
        collisionexit: CustomEvent<{
            targetCollider: import("@dimforge/rapier3d-compat").Collider;
            targetRigidBody: RigidBody | null;
        }>;
        sensorenter: CustomEvent<{
            targetCollider: import("@dimforge/rapier3d-compat").Collider;
            targetRigidBody: RigidBody | null;
        }>;
        sensorexit: CustomEvent<{
            targetCollider: import("@dimforge/rapier3d-compat").Collider;
            targetRigidBody: RigidBody | null;
        }>;
        contact: CustomEvent<{
            targetCollider: import("@dimforge/rapier3d-compat").Collider;
            targetRigidBody: RigidBody | null;
            maxForceDirection: import("@dimforge/rapier3d-compat").Vector;
            maxForceMagnitude: number;
            totalForce: import("@dimforge/rapier3d-compat").Vector;
            totalForceMagnitude: number;
        }>;
        sleep: CustomEvent<void>;
        wake: CustomEvent<void>;
    };
};
export declare type RigidBodyProps = typeof __propDef.props;
export declare type RigidBodyEvents = typeof __propDef.events;
export declare type RigidBodySlots = typeof __propDef.slots;
export default class RigidBody extends SvelteComponentTyped<RigidBodyProps, RigidBodyEvents, RigidBodySlots> {
}
export {};
