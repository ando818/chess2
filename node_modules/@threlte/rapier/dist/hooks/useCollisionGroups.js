import { getContext, onDestroy } from 'svelte';
import { get } from 'svelte/store';
const applyBitMask = (collidersMap, bitMask) => {
    collidersMap.forEach((c) => {
        if (c && c.collider && c.collider.isValid()) {
            c.collider.setCollisionGroups(bitMask);
        }
    });
};
export const useCollisionGroups = () => {
    const collidersMap = new Map();
    const bitMaskStore = getContext('threlte-rapier-collision-group');
    if (!bitMaskStore)
        return {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            registerColliders: (colliders) => { },
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            removeColliders: (colliders) => { }
        };
    let bitMask = get(bitMaskStore);
    const unsubscribe = bitMaskStore.subscribe((newBitMask) => {
        bitMask = newBitMask;
        applyBitMask(collidersMap, newBitMask);
    });
    onDestroy(unsubscribe);
    const registerColliders = (colliders) => {
        colliders.forEach((c) => {
            if (!collidersMap.has(c.handle)) {
                collidersMap.set(c.handle, {
                    collider: c,
                    initialCollisionGroup: c.collisionGroups()
                });
            }
        });
        applyBitMask(collidersMap, bitMask);
    };
    const removeColliders = (colliders) => {
        colliders.forEach((c) => {
            const mapItem = collidersMap.get(c.handle);
            if (mapItem) {
                if (c && c.isValid()) {
                    c.setCollisionGroups(mapItem.initialCollisionGroup);
                }
            }
            collidersMap.delete(c.handle);
        });
    };
    return {
        registerColliders,
        removeColliders
    };
};
