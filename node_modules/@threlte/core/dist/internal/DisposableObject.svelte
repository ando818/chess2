<script>import { getContext, onDestroy, setContext } from 'svelte';
import { writable } from 'svelte/store';
import { useThrelteDisposal } from '../hooks/useThrelteDisposal';
const { collectDisposableObjects, addDisposableObjects, removeDisposableObjects } = useThrelteDisposal();
export let object = undefined;
let previousObject = object;
export let dispose = undefined;
const contextName = 'threlte-disposable-object-context';
const parentDispose = getContext(contextName);
const mergedDispose = writable(dispose ?? $parentDispose ?? true);
$: mergedDispose.set(dispose ?? $parentDispose ?? true);
setContext(contextName, mergedDispose);
let disposables = $mergedDispose ? collectDisposableObjects(object) : [];
addDisposableObjects(disposables);
$: {
    if (object !== previousObject) {
        removeDisposableObjects(disposables);
        disposables = $mergedDispose ? collectDisposableObjects(object) : [];
        addDisposableObjects(disposables);
        previousObject = object;
    }
}
onDestroy(() => {
    removeDisposableObjects(disposables);
});
</script>

<slot />
