<script>import { getContext } from 'svelte';
import { useThrelte } from '../hooks/useThrelte';
import { createObjectStore } from '../lib/createObjectStore';
export let object;
const objectStore = createObjectStore(object);
$: objectStore.set(object);
const layers = getContext('threlte-layers');
const { invalidate } = useThrelte();
$: {
    if ($layers === 'all') {
        $objectStore.layers.enableAll();
    }
    else if ($layers === 'none') {
        $objectStore.layers.disableAll();
    }
    else if (Array.isArray($layers)) {
        for (let index = 0; index < 32; index += 1) {
            const layerIndex = index;
            const enabled = $layers.includes(layerIndex);
            if (enabled) {
                $objectStore.layers.enable(index);
            }
            else {
                $objectStore.layers.disable(index);
            }
        }
    }
    else if ($layers !== undefined) {
        $objectStore.layers.set($layers);
    }
    invalidate('LayerableObject');
}
</script>
