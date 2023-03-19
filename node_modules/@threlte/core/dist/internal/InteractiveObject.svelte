<script>import { createEventDispatcher, onDestroy } from 'svelte';
import { useThrelte } from '../hooks/useThrelte';
import { useThrelteRoot } from '../hooks/useThrelteRoot';
import { getThrelteUserData } from '../lib/getThrelteUserData';
export let object;
let previousObject = object;
export let interactive = false;
export let ignorePointer = false;
const eventDispatcher = createEventDispatcher();
const { addInteractiveObject, removeInteractiveObject, addRaycastableObject, removeRaycastableObject } = useThrelteRoot();
const { invalidate } = useThrelte();
const removeObjectInteractivity = (object) => {
    removeRaycastableObject(object);
    removeInteractiveObject(object);
    delete getThrelteUserData(object).eventDispatcher;
};
const setupObjectInteractivity = (object, ignorePointer, interactive) => {
    getThrelteUserData(object).eventDispatcher = eventDispatcher;
    if (ignorePointer) {
        removeRaycastableObject(object);
        removeInteractiveObject(object);
    }
    else {
        addRaycastableObject(object);
        if (interactive) {
            addInteractiveObject(object);
        }
        else {
            removeInteractiveObject(object);
        }
    }
};
$: {
    if (object !== previousObject) {
        removeObjectInteractivity(previousObject);
        setupObjectInteractivity(object, ignorePointer, interactive);
        invalidate('InteractiveObject: object changed');
        previousObject = object;
    }
    else if (object === previousObject) {
        setupObjectInteractivity(object, ignorePointer, interactive);
        invalidate('InteractiveObject: props changed');
    }
}
onDestroy(() => {
    removeObjectInteractivity(object);
    invalidate('InteractiveObject: object removed');
});
</script>
