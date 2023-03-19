<script>import { ActiveCollisionTypes, ActiveEvents, CoefficientCombineRule } from '@dimforge/rapier3d-compat';
import { SceneGraphObject } from '@threlte/core';
import { createEventDispatcher, onDestroy, onMount } from 'svelte';
import { Object3D } from 'three';
import { useCollisionGroups } from '../../hooks/useCollisionGroups';
import { useHasEventListeners } from '../../hooks/useHasEventListener';
import { useRapier } from '../../hooks/useRapier';
import { useRigidBody } from '../../hooks/useRigidBody';
import { applyColliderActiveEvents } from '../../lib/applyColliderActiveEvents';
import { applyTransforms } from '../../lib/applyTransforms';
import { createCollidersFromChildren } from '../../lib/createCollidersFromChildren';
import { positionToVector3 } from '../../lib/positionToVector3';
import { rotationToQuaternion } from '../../lib/rotationToQuaternion';
export let shape = 'convexHull';
export let position = undefined;
export let rotation = undefined;
export let scale = undefined;
export let lookAt = undefined;
export let restitution = undefined;
export let restitutionCombineRule = undefined;
export let friction = undefined;
export let frictionCombineRule = undefined;
export let sensor = undefined;
export let contactForceEventThreshold = undefined;
export let density = undefined;
export let mass = undefined;
export let massProperties = undefined;
const object = new Object3D();
/**
 * Immediately apply transforms
 */
applyTransforms(object, position, rotation, scale, lookAt);
object.updateWorldMatrix(true, false);
const rigidBody = useRigidBody();
const { world, addColliderToContext, removeColliderFromContext } = useRapier();
export let colliders = [];
const collisionGroups = useCollisionGroups();
const dispatcher = createEventDispatcher();
const { hasEventListeners: colliderHasEventListeners } = useHasEventListeners();
onMount(() => {
    colliders = createCollidersFromChildren(object, shape ?? 'convexHull', world, rigidBody);
    colliders.forEach((c) => addColliderToContext(c, object, dispatcher));
    collisionGroups.registerColliders(colliders);
});
$: {
    if (colliders.length > 0) {
        colliders.forEach((collider) => {
            applyColliderActiveEvents(collider, colliderHasEventListeners, rigidBody?.userData?.hasEventListeners);
            collider.setActiveCollisionTypes(ActiveCollisionTypes.ALL);
            collider.setRestitution(restitution ?? 0);
            collider.setRestitutionCombineRule(restitutionCombineRule ?? CoefficientCombineRule.Average);
            collider.setFriction(friction ?? 0.7);
            collider.setFrictionCombineRule(frictionCombineRule ?? CoefficientCombineRule.Average);
            collider.setSensor(sensor ?? false);
            collider.setContactForceEventThreshold(contactForceEventThreshold ?? 0);
            if (density)
                collider.setDensity(density);
            if (mass)
                collider.setMass(mass);
            if (massProperties)
                collider.setMassProperties(massProperties.mass, positionToVector3(massProperties.centerOfMass), positionToVector3(massProperties.principalAngularInertia), rotationToQuaternion(massProperties.angularInertiaLocalFrame));
        });
    }
}
/**
 * Cleanup
 */
onDestroy(() => {
    collisionGroups.removeColliders(colliders);
    colliders.forEach((c) => {
        removeColliderFromContext(c);
        world.removeCollider(c, true);
    });
});
</script>

<SceneGraphObject {object}>
  <slot />
</SceneGraphObject>
