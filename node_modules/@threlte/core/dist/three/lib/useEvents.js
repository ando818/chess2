import { createEventDispatcher, get_current_component, onDestroy, onMount } from 'svelte/internal';
import { writable } from 'svelte/store';
/**
 * Typeguard to check if a value is extending THREE.EventDispatcher
 * @param value
 * @returns
 */
const isEventDispatcher = (value) => {
    return !!value?.addEventListener;
};
export const useEvents = () => {
    const dispatch = createEventDispatcher();
    const component = get_current_component();
    const eventHandlerProxy = (event) => {
        if (event?.type) {
            dispatch(event.type, event);
        }
    };
    const cleanupEventListeners = (ref, events) => {
        if (isEventDispatcher(ref)) {
            events.forEach((eventName) => {
                ref.removeEventListener(eventName, eventHandlerProxy);
            });
        }
    };
    const addEventListeners = (ref, events) => {
        if (isEventDispatcher(ref)) {
            events.forEach((eventName) => {
                ref.addEventListener(eventName, eventHandlerProxy);
            });
        }
    };
    let currentEventNames = [];
    let currentRef;
    const eventNames = writable([]);
    const unsubscribeEventNames = eventNames.subscribe((eventNames) => {
        cleanupEventListeners(currentRef, currentEventNames);
        addEventListeners(currentRef, eventNames);
        currentEventNames = eventNames;
    });
    onDestroy(unsubscribeEventNames);
    const ref = writable();
    const unsubscribeRef = ref.subscribe((value) => {
        cleanupEventListeners(currentRef, currentEventNames);
        addEventListeners(value, currentEventNames);
        currentRef = value;
    });
    onDestroy(unsubscribeRef);
    // cleanup all event listeners
    onDestroy(() => {
        cleanupEventListeners(currentRef, currentEventNames);
    });
    // get all event callbacks from component
    onMount(() => {
        eventNames.set(Object.keys(component.$$.callbacks));
    });
    const updateRef = (newRef) => {
        ref.set(newRef);
    };
    return {
        updateRef
    };
};
