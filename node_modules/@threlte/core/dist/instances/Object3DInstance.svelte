<script>import { useThrelte } from '../hooks/useThrelte';
import DisposableObject from '../internal/DisposableObject.svelte';
import LayerableObject from '../internal/LayerableObject.svelte';
import SceneGraphObject from '../internal/SceneGraphObject.svelte';
import TransformableObject from '../internal/TransformableObject.svelte';
import ViewportAwareObject from '../internal/ViewportAwareObject.svelte';
export let object;
export let position = undefined;
export let scale = undefined;
export let rotation = undefined;
export let lookAt = undefined;
export let viewportAware = false;
export let inViewport = false;
export let castShadow = undefined;
export let receiveShadow = undefined;
export let frustumCulled = undefined;
export let renderOrder = undefined;
export let visible = undefined;
export let dispose = undefined;
export let userData = undefined;
const { invalidate } = useThrelte();
const getObject = () => object;
$: {
    if (visible !== undefined)
        getObject().visible = visible;
    if (castShadow !== undefined)
        getObject().castShadow = castShadow;
    if (receiveShadow !== undefined)
        getObject().receiveShadow = receiveShadow;
    if (frustumCulled !== undefined)
        getObject().frustumCulled = frustumCulled;
    if (renderOrder !== undefined)
        getObject().renderOrder = renderOrder;
    if (userData !== undefined) {
        getObject().userData = {
            ...getObject().userData,
            ...userData
        };
    }
    invalidate('Object3DInstance: props changed');
}
</script>

<LayerableObject {object} />

<TransformableObject {object} {position} {rotation} {scale} {lookAt} />

<DisposableObject {object} {dispose}>
  <SceneGraphObject {object}>
    <slot />
  </SceneGraphObject>
</DisposableObject>

<ViewportAwareObject bind:inViewport {object} {viewportAware} on:viewportenter on:viewportleave />
