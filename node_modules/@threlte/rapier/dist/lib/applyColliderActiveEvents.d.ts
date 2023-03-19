import { type Collider } from '@dimforge/rapier3d-compat';
import type { useHasEventListeners } from '../hooks/useHasEventListener';
import type { ColliderEventDispatcher, RigidBodyEventDispatcher } from '../types/types';
export declare const applyColliderActiveEvents: (collider: Collider, colliderHasEventListeners: ReturnType<typeof useHasEventListeners<ColliderEventDispatcher>>['hasEventListeners'], rigidBodyHasEventListeners?: ReturnType<typeof useHasEventListeners<RigidBodyEventDispatcher>>['hasEventListeners']) => void;
