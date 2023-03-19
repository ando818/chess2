import { getContext } from 'svelte';
export const useRigidBody = () => {
    return getContext('threlte-rapier-rigidbody');
};
