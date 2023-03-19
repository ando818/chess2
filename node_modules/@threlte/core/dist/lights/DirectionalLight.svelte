<script>import { useFrame } from '../hooks/useFrame';
import { DirectionalLight as ThreeDirectionalLight, Object3D } from 'three';
import { useThrelte } from '../hooks/useThrelte';
import LightInstance from '../instances/LightInstance.svelte';
import SceneGraphObject from '../internal/SceneGraphObject.svelte';
import TransformableObject from '../internal/TransformableObject.svelte';
import DisposableObject from '../internal/DisposableObject.svelte';
export let position = undefined;
export let scale = undefined;
export let rotation = undefined;
export let receiveShadow = undefined;
export let frustumCulled = undefined;
export let renderOrder = undefined;
export let visible = undefined;
export let userData = undefined;
export let dispose = undefined;
export let viewportAware = false;
export let inViewport = false;
export let color = undefined;
export let intensity = undefined;
export let shadow = undefined;
export let target = undefined;
export const light = new ThreeDirectionalLight(color, intensity);
const { invalidate } = useThrelte();
const originalTarget = light.target;
const { start, stop, started } = useFrame(() => { }, {
    autostart: false,
    debugFrameloopMessage: 'DirectionalLight: tracking target'
});
const updateLightTarget = (target) => {
    if (target && target instanceof Object3D && !$started) {
        light.target = target;
        start();
        invalidate('DirectionalLight: target changed');
    }
    else if ((!target || !(target instanceof Object3D)) && $started) {
        light.target = originalTarget;
        stop();
        invalidate('DirectionalLight: target changed');
    }
};
$: updateLightTarget(target);
const updateLightShadow = (shadow) => {
    if (shadow) {
        const { mapSize = [512, 512], camera: { left = -5, bottom = -5, right = 5, top = 5, near = 0.5, far = 500 } = {}, bias = 0, radius = 1 } = shadow === true ? {} : shadow;
        light.shadow.mapSize.set(mapSize[0], mapSize[1]);
        light.shadow.camera.left = left;
        light.shadow.camera.top = top;
        light.shadow.camera.right = right;
        light.shadow.camera.bottom = bottom;
        light.shadow.camera.near = near;
        light.shadow.camera.far = far;
        light.shadow.bias = bias;
        light.shadow.radius = radius;
    }
    invalidate('DirectionalLight: shadow changed');
};
$: updateLightShadow(shadow);
</script>

{#if target && !(target instanceof Object3D)}
  <SceneGraphObject object={originalTarget} />
  <TransformableObject object={originalTarget} position={target} />
  <DisposableObject {dispose} object={target} />
{/if}

<LightInstance
  {light}
  {position}
  {scale}
  {rotation}
  castShadow={shadow ? true : false}
  {receiveShadow}
  {frustumCulled}
  {renderOrder}
  {visible}
  {userData}
  {dispose}
  {viewportAware}
  bind:inViewport
  on:viewportenter
  on:viewportleave
  {color}
  {intensity}
>
  <slot />
</LightInstance>
