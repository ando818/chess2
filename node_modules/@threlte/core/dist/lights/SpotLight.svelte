<script>import { Object3D, SpotLight as ThreeSpotLight } from 'three';
import { useFrame } from '../hooks/useFrame';
import { useThrelte } from '../hooks/useThrelte';
import LightInstance from '../instances/LightInstance.svelte';
import SceneGraphObject from '../internal/SceneGraphObject.svelte';
import TransformableObject from '../internal/TransformableObject.svelte';
// LightInstance
export let position = undefined;
export let scale = undefined;
export let rotation = undefined;
export let viewportAware = false;
export let inViewport = false;
export let frustumCulled = undefined;
export let receiveShadow = undefined;
export let renderOrder = undefined;
export let visible = undefined;
export let userData = undefined;
export let dispose = undefined;
export let color = undefined;
export let intensity = undefined;
// self
export let angle = undefined;
export let decay = undefined;
export let distance = undefined;
export let penumbra = undefined;
export let power = undefined;
export let target = undefined;
export let shadow = undefined;
const { invalidate } = useThrelte();
export const light = new ThreeSpotLight(color, intensity);
const originalTarget = light.target;
const { start, stop, started } = useFrame(() => { }, {
    autostart: false,
    debugFrameloopMessage: 'SpotLight: tracking target'
});
const updateLightTarget = (target) => {
    if (target && target instanceof Object3D && !$started) {
        light.target = target;
        start();
        invalidate('SpotLight: target changed');
    }
    else if ((!target || !(target instanceof Object3D)) && $started) {
        light.target = originalTarget;
        stop();
        invalidate('SpotLight: target changed');
    }
};
$: updateLightTarget(target);
const updateLightShadow = (shadow) => {
    if (shadow) {
        const { mapSize = [512, 512], camera: { near = 0.5, far = 500 } = {}, bias = 0, radius = 1 } = shadow === true ? {} : shadow;
        light.shadow.mapSize.set(mapSize[0], mapSize[1]);
        light.shadow.camera.near = near;
        light.shadow.camera.far = far;
        light.shadow.bias = bias;
        light.shadow.radius = radius;
    }
    invalidate('SpotLight: shadow changed');
};
$: updateLightShadow(shadow);
$: {
    if (distance !== undefined)
        light.distance = distance;
    if (decay !== undefined)
        light.decay = decay;
    if (angle !== undefined)
        light.angle = angle;
    if (penumbra !== undefined)
        light.penumbra = penumbra;
    if (power !== undefined)
        light.power = power;
    invalidate('SpotLight: props changed');
}
</script>

{#if target && !(target instanceof Object3D)}
  <SceneGraphObject object={originalTarget} />
  <TransformableObject object={originalTarget} position={target} />
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
