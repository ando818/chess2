import type { Collider } from '@dimforge/rapier3d-compat';
export declare const useCollisionGroups: () => {
    registerColliders: (colliders: Collider[]) => void;
    removeColliders: (colliders: Collider[]) => void;
};
