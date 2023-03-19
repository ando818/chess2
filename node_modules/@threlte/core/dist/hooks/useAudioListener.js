import { useThrelteAudio } from './useThrelteAudio';
export function useAudioListener(callbackOrId, id) {
    const audioCtx = useThrelteAudio();
    if (!audioCtx) {
        throw new Error('No threlte audio context found, "useAudioListener" can only be used in a child component of <Canvas>');
    }
    if (callbackOrId && typeof callbackOrId === 'string') {
        const listener = audioCtx.getAudioListener(callbackOrId);
        if (!listener)
            throw new Error('No AudioListener found.');
        return {
            listener,
            context: listener.context
        };
    }
    else if (callbackOrId && typeof callbackOrId === 'function') {
        const listener = audioCtx.getAudioListener(id);
        if (!listener)
            throw new Error('No AudioListener found.');
        return callbackOrId({
            listener,
            context: listener.context
        });
    }
    else {
        const listener = audioCtx.getAudioListener();
        if (!listener)
            throw new Error('No AudioListener found.');
        return {
            listener,
            context: listener.context
        };
    }
}
