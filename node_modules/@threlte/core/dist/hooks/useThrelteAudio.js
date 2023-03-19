import { getContext } from 'svelte';
export const useThrelteAudio = () => {
    return getContext('threlte-audio-context');
};
