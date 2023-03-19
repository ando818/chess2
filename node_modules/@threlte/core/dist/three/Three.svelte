<script>import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import DisposableObject from '../internal/DisposableObject.svelte';
import SceneGraphObject from '../internal/SceneGraphObject.svelte';
import { useAttach } from './lib/useAttach';
import { useCamera } from './lib/useCamera';
import { useEvents } from './lib/useEvents';
import { useProps } from './lib/useProps';
export let type;
export let args = undefined;
export let attach = undefined;
export let manual = undefined;
export let makeDefault = undefined;
export let dispose = undefined;
const parent = getContext('threlte-hierarchical-parent-context');
// Type Gaurds
const isClass = (type) => {
    return typeof type === 'function' && /^\s*class\s+/.test(type.toString());
};
const argsIsConstructorParameters = (args) => {
    return Array.isArray(args);
};
// We can't create the object in a reactive statement due to providing context
export let ref = (isClass(type) && argsIsConstructorParameters(args)
    ? new type(...args) // TODO: fix this any
    : isClass(type)
        ? new type()
        : type);
let initialized = false;
$: if (initialized) {
    ref = (isClass(type) && argsIsConstructorParameters(args)
        ? new type(...args) // TODO: fix this any
        : isClass(type)
            ? new type()
            : type);
}
else {
    initialized = true;
}
const objectStore = writable(ref);
$: objectStore.set(ref);
setContext('threlte-hierarchical-parent-context', objectStore);
// Props
const props = useProps();
$: props.updateProps(ref, $$restProps, {
    manualCamera: manual
});
// Camera
const camera = useCamera();
$: camera.update(ref, manual);
$: camera.makeDefaultCamera(ref, makeDefault);
// Attachment
const attachment = useAttach();
$: attachment.update(ref, $parent, attach);
// Events
const events = useEvents();
$: events.updateRef(ref);
const extendsObject3D = (object) => {
    return !!object.isObject3D;
};
const isDisposableObject = (object) => {
    return object.dispose !== undefined;
};
</script>

{#if isDisposableObject(ref)}
  <DisposableObject
    object={ref}
    {dispose}
  />
{/if}

{#if extendsObject3D(ref)}
  <SceneGraphObject object={ref}>
    <slot {ref} />
  </SceneGraphObject>
{:else}
  <slot {ref} />
{/if}
