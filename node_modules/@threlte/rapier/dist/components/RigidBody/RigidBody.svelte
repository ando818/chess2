<script>import { LayerableObject, SceneGraphObject } from '@threlte/core';
import { createEventDispatcher, onDestroy, setContext, tick } from 'svelte';
import { Object3D, Vector3 } from 'three';
import { useHasEventListeners } from '../../hooks/useHasEventListener';
import { useRapier } from '../../hooks/useRapier';
import { applyTransforms } from '../../lib/applyTransforms';
import { getWorldPosition, getWorldQuaternion, getWorldScale } from '../../lib/getWorldTransforms';
import { parseRigidBodyType } from '../../lib/parseRigidBodyType';
import { positionToVector3 } from '../../lib/positionToVector3';
import { rotationToEuler } from '../../lib/rotationToEuler';
const { world, rapier, addRigidBodyToContext, removeRigidBodyFromContext } = useRapier();
export let debug = false;
export let type = 'dynamic';
export let canSleep = true;
export let linearVelocity = {};
export let angularVelocity = {};
export let gravityScale = 1;
export let ccd = false;
export let angularDamping = 0;
export let linearDamping = 0;
export let lockRotations = false;
export let lockTranslations = false;
export let enabledRotations = [
    true,
    true,
    true
];
export let enabledTranslations = [
    true,
    true,
    true
];
export let dominance = 0;
export let position = undefined;
export let rotation = undefined;
export let scale = undefined;
export let lookAt = undefined;
const dispatcher = createEventDispatcher();
const object = new Object3D();
/**
 * Used to traverseAncestors to restore transform
 */
object.userData.isRigidBody = true;
/**
 * isSleeping used for events "sleep" and "wake" in `useFrameHandler`
 */
object.userData.isSleeping = false;
/**
 * Immediately apply transforms to get the objects
 * world position to apply to the RigidBody.
 * This is a one-off operation as RigidBodies should
 * not be moved around after initialization.
 */
applyTransforms(object, position, rotation, scale, lookAt);
/**
 * Update the world matrix of the object before applying
 * the world position to the RigidBody
 */
object.updateWorldMatrix(true, false);
/**
 * RigidBody Description
 */
const desc = new rapier.RigidBodyDesc(parseRigidBodyType(type)).setCanSleep(canSleep);
/**
 * Export the rigidBody only after positional initialization
 */
export let rigidBody = undefined;
/**
 * Temporary RigidBody init
 */
const rigidBodyTemp = world.createRigidBody(desc);
/**
 * Apply transforms after the parent component added "object" to itself
 */
const initPosition = async () => {
    await tick();
    applyTransforms(object, position, rotation, scale, lookAt);
    object.updateMatrix();
    object.updateWorldMatrix(true, false);
    const parentWorldScale = object.parent ? getWorldScale(object.parent) : new Vector3(1, 1, 1);
    const worldPosition = getWorldPosition(object).multiply(parentWorldScale);
    const worldQuaternion = getWorldQuaternion(object);
    rigidBodyTemp.setTranslation(worldPosition, true);
    rigidBodyTemp.setRotation(worldQuaternion, true);
    if (debug) {
        console.log('worldPosition', worldPosition);
        console.log('worldQuaternion', worldQuaternion);
    }
    if (debug)
        console.log(JSON.stringify(desc, null, 2));
    rigidBody = rigidBodyTemp;
};
initPosition();
/**
 * Will come in handy in the future for joints
 */
object.userData.rigidBody = rigidBodyTemp;
/**
 * Reactive RigidBody properties
 */
$: {
    rigidBodyTemp.setBodyType(parseRigidBodyType(type));
    rigidBodyTemp.setLinvel(positionToVector3(linearVelocity), true);
    rigidBodyTemp.setAngvel(rotationToEuler(angularVelocity), true);
    rigidBodyTemp.setGravityScale(gravityScale, true);
    rigidBodyTemp.enableCcd(ccd);
    rigidBodyTemp.setDominanceGroup(dominance);
    rigidBodyTemp.lockRotations(lockRotations, true);
    rigidBodyTemp.lockTranslations(lockTranslations, true);
    rigidBodyTemp.setEnabledRotations(...enabledRotations, true);
    rigidBodyTemp.setEnabledTranslations(...enabledTranslations, true);
    rigidBodyTemp.setAngularDamping(angularDamping);
    rigidBodyTemp.setLinearDamping(linearDamping);
}
/**
 * Add userData to the rigidBody
 */
const { hasEventListeners } = useHasEventListeners();
rigidBodyTemp.userData = {
    hasEventListeners
};
/**
 * Setting the RigidBody context so that colliders can
 * hook onto.
 */
setContext('threlte-rapier-rigidbody', rigidBodyTemp);
/**
 * Add the mesh to the context
 */
addRigidBodyToContext(rigidBodyTemp, object, dispatcher);
/**
 * cleanup
 */
onDestroy(() => {
    removeRigidBodyFromContext(rigidBodyTemp);
    world.removeRigidBody(rigidBodyTemp);
});
</script>

<SceneGraphObject {object}>
  <slot />
</SceneGraphObject>

<LayerableObject {object} />
