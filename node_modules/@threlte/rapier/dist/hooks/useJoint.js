import { MultibodyJoint } from '@dimforge/rapier3d-compat';
import { onDestroy } from 'svelte';
import { derived, get, writable } from 'svelte/store';
import { useRapier } from './useRapier';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useJoint = (initializeJoint) => {
    const rigidBodyA = writable(undefined);
    const rigidBodyB = writable(undefined);
    const ctx = useRapier();
    const bodies = derived([rigidBodyA, rigidBodyB], ([rbA, rbB]) => {
        if (!!rbA && !!rbB) {
            return [rbA, rbB];
        }
    });
    const joint = writable(undefined);
    const unsubscribeBodies = bodies.subscribe((bodies) => {
        if (bodies)
            joint.set(initializeJoint(...bodies, ctx));
    });
    onDestroy(() => {
        unsubscribeBodies();
        const j = get(joint);
        if (!j)
            return;
        if (j instanceof MultibodyJoint) {
            ctx.world.removeMultibodyJoint(j, true);
        }
        else {
            ctx.world.removeImpulseJoint(j, true);
        }
    });
    return {
        joint,
        rigidBodyA,
        rigidBodyB
    };
};
