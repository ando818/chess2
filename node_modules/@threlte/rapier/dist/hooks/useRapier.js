import { getContext } from 'svelte';
export const useRapier = () => {
    return getContext('threlte-rapier-context');
};
