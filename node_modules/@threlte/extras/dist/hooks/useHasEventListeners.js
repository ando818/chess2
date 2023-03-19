import { get_current_component } from 'svelte/internal';
export const useHasEventListeners = () => {
    const component = get_current_component();
    const hasEventListeners = (type) => {
        const callbacks = component.$$.callbacks;
        return type in callbacks && callbacks[type].length > 0;
    };
    return {
        hasEventListeners
    };
};
