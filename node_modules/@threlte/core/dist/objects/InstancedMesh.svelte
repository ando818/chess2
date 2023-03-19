<script context="module">import { getContext, setContext } from 'svelte';
import { Color, InstancedMesh as ThreeInstancedMesh, Matrix4, Object3D } from 'three';
import { useThrelte } from '../hooks/useThrelte';
import { useFrame } from '../hooks/useFrame';
import MeshInstance from '../instances/MeshInstance.svelte';
import { usePropChange } from '../lib/usePropChange';
import Object3DInstance from '../instances/Object3DInstance.svelte';
import { writable } from 'svelte/store';
const placeholderObject3D = new Object3D();
placeholderObject3D.scale.set(0, 0, 0);
const placeholderInstance = {
    matrix: placeholderObject3D.matrix,
    color: null
};
const emptyM4 = new Matrix4().fromArray(new Array(16).fill(0));
const defaultColor = new Color(0xffffff);
const instancedMeshContextName = 'threlte-instanced-mesh-context';
export const useInstancedMesh = (id) => {
    return getContext(instancedMeshContextName + id);
};
</script>

<script>import DisposableObject from '../internal/DisposableObject.svelte';
// MeshInstance
export let position = undefined;
export let scale = undefined;
export let rotation = undefined;
export let viewportAware = false;
export let inViewport = false;
export let castShadow = undefined;
export let receiveShadow = undefined;
export let renderOrder = undefined;
export let visible = undefined;
export let userData = undefined;
export let dispose = undefined;
export let interactive = false;
export let ignorePointer = false;
export let lookAt = undefined;
// self
export let geometry;
export let material;
export let count = undefined;
export let id = '';
const { onChange } = usePropChange(material);
$: onChange(material, (newMaterial) => {
    $instancedMesh.material = newMaterial;
});
const autoCount = (count) => count === undefined;
// let autoCount = count === undefined
// $: autoCount = count === undefined
export const instancedMesh = writable(new ThreeInstancedMesh(geometry, material, autoCount(count) ? 0 : count));
const parentObject = new Object3D();
const instances = [];
const { invalidate } = useThrelte();
const useInstanceIndex = (instance, callback) => {
    const index = instances.findIndex((i) => i === instance);
    if (index === -1) {
        console.warn('Instanced Mesh: Instance not found');
        return;
    }
    callback(index);
};
const { start: queueHandleInstanceCountChange, stop, started: instanceCountChangeHandlerQueued } = useFrame(() => {
    $instancedMesh.dispose();
    $instancedMesh = new ThreeInstancedMesh(geometry, material, instances.length);
    instances.forEach((instance, index) => {
        setInstanceMatrixByIndex(instance, index);
        if (instance.color) {
            $instancedMesh.setColorAt(index, instance.color);
        }
        else {
            $instancedMesh.setColorAt(index, defaultColor);
        }
    });
    $instancedMesh.instanceMatrix.needsUpdate = true;
    if ($instancedMesh.instanceColor) {
        $instancedMesh.instanceColor.needsUpdate = true;
    }
    stop();
}, {
    autostart: false,
    debugFrameloopMessage: 'Instanced Mesh: auto instance count change queued'
});
const registerInstance = (instance) => {
    if (autoCount(count)) {
        instances.push(instance);
        if (!$instanceCountChangeHandlerQueued)
            queueHandleInstanceCountChange();
    }
    else {
        const firstPlaceholderInstanceIndex = instances.findIndex((i) => i === placeholderInstance);
        if (firstPlaceholderInstanceIndex !== -1) {
            instances[firstPlaceholderInstanceIndex] = instance;
        }
        else {
            instances.push(instance);
        }
        if (instances.length > count) {
            console.warn('Instanced Mesh: More instances requested than allocated, increase count on <');
        }
    }
    setDefaultInstanceColor(instance);
    invalidate('Instanced Mesh: Instance added');
};
const removeInstance = (instance) => {
    if (autoCount(count)) {
        const index = instances.findIndex((i) => i === instance);
        instances.splice(index, 1);
        if (!$instanceCountChangeHandlerQueued)
            queueHandleInstanceCountChange();
    }
    else {
        resetInstanceMatrix(instance);
        const index = instances.findIndex((i) => i === instance);
        if (index >= count) {
            // remove the instance entirely if it's out of bounds of the InstancedMesh BufferAttribute Array
            instances.splice(index, 1);
        }
        else {
            // otherwise replace it with a placeholder instance to keep the indices in sync
            instances.splice(index, 1, placeholderInstance);
        }
    }
    invalidate('Instanced Mesh: Instance removed');
};
const setDefaultInstanceColor = (instance) => {
    if (instance.color)
        return;
    useInstanceIndex(instance, (index) => {
        $instancedMesh.setColorAt(index, defaultColor);
        if ($instancedMesh.instanceColor)
            $instancedMesh.instanceColor.needsUpdate = true;
    });
};
const resetInstanceMatrix = (instance) => {
    useInstanceIndex(instance, (index) => {
        $instancedMesh.setMatrixAt(index, emptyM4);
        $instancedMesh.instanceMatrix.needsUpdate = true;
        invalidate('Instanced Mesh: instance matrix resetted');
    });
};
const setInstanceMatrixByIndex = (instance, index) => {
    $instancedMesh.setMatrixAt(index, instance.matrix);
    $instancedMesh.instanceMatrix.needsUpdate = true;
    invalidate('Instanced Mesh: instance matrix set');
};
const setInstanceMatrix = (instance) => {
    useInstanceIndex(instance, (index) => {
        setInstanceMatrixByIndex(instance, index);
    });
};
const setInstanceColor = (instance) => {
    useInstanceIndex(instance, (index) => {
        $instancedMesh.setColorAt(index, instance.color ?? defaultColor);
        if ($instancedMesh.instanceColor)
            $instancedMesh.instanceColor.needsUpdate = true;
        invalidate('Instanced Mesh: instance color set');
    });
};
setContext(instancedMeshContextName + id, {
    registerInstance,
    removeInstance,
    setInstanceMatrix,
    setInstanceColor,
    parentObject
});
/**
 * The <InstancedMesh> component itself will not dispatch events.
 * Instances are however able to dispatch events. For now it's an
 * all-or-nothing approach where the props "interactive" and
 * "ignorePointer" are set on the <InstancedMesh> component and the
 * events are triggered on the instances.
 */
const onEvent = (e) => {
    if (e.detail.instanceId === undefined)
        return;
    const instance = instances[e.detail.instanceId];
    if (instance && instance.pointerEventDispatcher) {
        instance.pointerEventDispatcher(e.type, e.detail);
    }
};
</script>

<DisposableObject {dispose} object={geometry} />
<DisposableObject {dispose} object={material} />

<Object3DInstance object={parentObject} {position} {scale} {rotation} {lookAt}>
  {#key $instancedMesh.uuid}
    <MeshInstance
      mesh={$instancedMesh}
      {castShadow}
      {receiveShadow}
      frustumCulled={undefined}
      {renderOrder}
      {visible}
      {userData}
      {dispose}
      {interactive}
      {ignorePointer}
      on:click={onEvent}
      on:contextmenu={onEvent}
      on:pointerup={onEvent}
      on:pointerdown={onEvent}
      on:pointerenter={onEvent}
      on:pointerleave={onEvent}
      on:pointermove={onEvent}
      {viewportAware}
      bind:inViewport
      on:viewportenter
      on:viewportleave
    />
  {/key}
  <slot />
</Object3DInstance>
