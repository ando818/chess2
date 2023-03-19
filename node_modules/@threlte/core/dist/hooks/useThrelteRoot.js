import { getContext } from 'svelte';
export const useThrelteRoot = () => {
    return getContext('threlte-root');
};
