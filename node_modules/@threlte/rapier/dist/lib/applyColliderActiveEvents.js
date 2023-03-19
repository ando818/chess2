import { ActiveEvents } from '@dimforge/rapier3d-compat';
export const applyColliderActiveEvents = (collider, colliderHasEventListeners, rigidBodyHasEventListeners) => {
    let events = 0;
    if (colliderHasEventListeners('collisionenter') ||
        colliderHasEventListeners('collisionexit') ||
        rigidBodyHasEventListeners?.('collisionenter') ||
        rigidBodyHasEventListeners?.('collisionexit') ||
        colliderHasEventListeners('sensorenter') ||
        colliderHasEventListeners('sensorexit') ||
        rigidBodyHasEventListeners?.('sensorenter') ||
        rigidBodyHasEventListeners?.('sensorexit')) {
        events = events | ActiveEvents.COLLISION_EVENTS;
    }
    if (colliderHasEventListeners('contact') || rigidBodyHasEventListeners?.('contact')) {
        events = events | ActiveEvents.CONTACT_FORCE_EVENTS;
    }
    if (events > 0) {
        collider.setActiveEvents(events);
    }
};
