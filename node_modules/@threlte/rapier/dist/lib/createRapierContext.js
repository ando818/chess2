import RAPIER from '@dimforge/rapier3d-compat';
import { writable } from 'svelte/store';
export const createRapierContext = (...args) => {
    const world = new RAPIER.World(...args);
    const colliderObjects = new Map();
    const rigidBodyObjects = new Map();
    const rigidBodyEventDispatchers = new Map();
    const colliderEventDispatchers = new Map();
    /**
     * Adds a collider to the context
     * @param collider
     * @param object
     * @param eventDispatcher
     */
    const addColliderToContext = (collider, object, eventDispatcher) => {
        colliderObjects.set(collider.handle, object);
        colliderEventDispatchers.set(collider.handle, eventDispatcher);
    };
    /**
     * Removes the collider from the context
     * @param collider
     */
    const removeColliderFromContext = (collider) => {
        colliderObjects.delete(collider.handle);
        colliderEventDispatchers.delete(collider.handle);
    };
    /**
     * Adds a RigidBody to the context
     * @param rigidBody
     * @param object
     * @param eventDispatcher
     */
    const addRigidBodyToContext = (rigidBody, object, eventDispatcher) => {
        rigidBodyObjects.set(rigidBody.handle, object);
        rigidBodyEventDispatchers.set(rigidBody.handle, eventDispatcher);
    };
    /**
     * Removes the RigidBody from the context
     * @param rigidBody
     */
    const removeRigidBodyFromContext = (rigidBody) => {
        rigidBodyObjects.delete(rigidBody.handle);
        rigidBodyEventDispatchers.delete(rigidBody.handle);
    };
    return {
        rapier: RAPIER,
        world,
        colliderObjects,
        rigidBodyObjects,
        rigidBodyEventDispatchers,
        colliderEventDispatchers,
        addColliderToContext,
        removeColliderFromContext,
        addRigidBodyToContext,
        removeRigidBodyFromContext,
        debug: writable(false),
    };
};
