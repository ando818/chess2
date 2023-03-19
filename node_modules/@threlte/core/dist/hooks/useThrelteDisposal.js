import { getContext } from 'svelte';
export const useThrelteDisposal = () => {
    return getContext('threlte-disposal-context');
};
