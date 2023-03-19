<script>import { setContext } from 'svelte';
import { writable } from 'svelte/store';
export let groups = undefined;
export let filter = undefined;
export let memberships = undefined;
const computeBitMask = (groups, filter, memberships) => {
    if (groups !== undefined) {
        // groups is setting the filter and memberships at once
        const g = groups;
        const mask = g.reduce((acc, f) => {
            return acc | (1 << f);
        }, 0) |
            g.reduce((acc, m) => {
                return acc | (1 << (m + 16));
            }, 0);
        return mask;
    }
    const mask = memberships.reduce((acc, f) => {
        return acc | (1 << f);
    }, 0) |
        filter.reduce((acc, m) => {
            return acc | (1 << (m + 16));
        }, 0);
    return mask;
};
const store = writable(computeBitMask(groups, filter, memberships));
$: store.set(computeBitMask(groups, filter, memberships));
setContext('threlte-rapier-collision-group', store);
</script>

<slot />
