<script>import { createEventDispatcher, onDestroy, onMount } from 'svelte';
import { Color, Matrix4, Object3D } from 'three';
import { useFrame } from '../hooks/useFrame';
import SceneGraphObject from '../internal/SceneGraphObject.svelte';
import TransformableObject from '../internal/TransformableObject.svelte';
import { useInstancedMesh } from '../objects/InstancedMesh.svelte';
export let position = undefined;
export let scale = undefined;
export let rotation = undefined;
export let lookAt = undefined;
export let color = undefined;
export let id = '';
const { registerInstance, setInstanceMatrix, removeInstance, setInstanceColor, parentObject } = useInstancedMesh(id);
const object3d = new Object3D();
const m4 = new Matrix4();
const pointerEventDispatcher = createEventDispatcher();
const isDirectChild = () => {
    // sanity null check in case it's not mounted yet
    return parentObject.uuid === object3d.parent?.uuid;
};
const parseColor = (color) => {
    return color !== undefined ? (color instanceof Color ? color : new Color(color)) : null;
};
const instance = {
    color: parseColor(color),
    matrix: object3d.matrix,
    pointerEventDispatcher
};
$: setColor(color);
const setColor = (color) => {
    instance.color = parseColor(color);
    setInstanceColor(instance);
};
const prepareNonDirectChildMatrix = () => {
    let currentObj = object3d.parent;
    const interjacentObjects = [];
    // tiny bit faster than Object3D.traverseAncestors
    // as that cannot be broken out of
    while (currentObj && parentObject && currentObj.uuid !== parentObject.uuid) {
        interjacentObjects.push(currentObj);
        if (!currentObj.parent)
            break;
        currentObj = currentObj.parent;
    }
    object3d.updateMatrix();
    m4.copy(object3d.matrix);
    interjacentObjects.forEach((obj) => {
        obj.updateMatrix();
        m4.premultiply(obj.matrix);
    });
    instance.matrix = m4;
};
const prepareDirectChildMatrix = () => {
    object3d.updateMatrix();
    instance.matrix = object3d.matrix;
};
const setDirectChildInstanceTransform = () => {
    prepareDirectChildMatrix();
    setInstanceMatrix(instance);
};
const { start: trackNonDirectChildInstanceTransform } = useFrame(() => {
    prepareNonDirectChildMatrix();
    setInstanceMatrix(instance);
}, {
    autostart: false,
    debugFrameloopMessage: 'Instance: tracking non-direct child instance'
});
registerInstance(instance);
onMount(() => {
    if (isDirectChild())
        setDirectChildInstanceTransform();
    else
        trackNonDirectChildInstanceTransform();
    setColor(color);
});
const onTransform = () => {
    if (isDirectChild())
        setDirectChildInstanceTransform();
};
onDestroy(() => {
    removeInstance(instance);
});
</script>

<SceneGraphObject object={object3d}>
  <slot />
</SceneGraphObject>

<TransformableObject
  object={object3d}
  {position}
  {scale}
  {rotation}
  {lookAt}
  on:transform={onTransform}
/>
