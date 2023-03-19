<script>import { setContext } from 'svelte';
import { writable } from 'svelte/store';
export let layers;
const layerStore = writable(layers);
$: layerStore.set(layers);
setContext('threlte-layers', layerStore);
</script>

<slot />
