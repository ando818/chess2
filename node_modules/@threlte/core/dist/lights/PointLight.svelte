<script>import { PointLight as ThreePointLight } from 'three';
import { useThrelte } from '../hooks/useThrelte';
import LightInstance from '../instances/LightInstance.svelte';
export let position = undefined;
export let scale = undefined;
export let rotation = undefined;
export let lookAt = undefined;
export let receiveShadow = undefined;
export let viewportAware = false;
export let inViewport = false;
export let frustumCulled = undefined;
export let renderOrder = undefined;
export let visible = undefined;
export let userData = undefined;
export let dispose = undefined;
export let intensity = undefined;
export let color = undefined;
export let distance = undefined;
export let decay = undefined;
export let power = undefined;
export let shadow = undefined;
export const light = new ThreePointLight(color, intensity, distance, decay);
const { invalidate } = useThrelte();
$: {
    if (distance !== undefined)
        light.distance = distance;
    if (decay !== undefined)
        light.decay = decay;
    if (power !== undefined)
        light.power = power;
    invalidate('PointLight: props changed');
}
$: {
    if (shadow) {
        const { mapSize = [512, 512], camera: { near = 0.5, far = 500 } = {}, bias = 0, radius = 1 } = shadow === true ? {} : shadow;
        light.shadow.mapSize.set(mapSize[0], mapSize[1]);
        light.shadow.camera.near = near;
        light.shadow.camera.far = far;
        light.shadow.bias = bias;
        light.shadow.radius = radius;
    }
    invalidate('PointLight: shadow changed');
}
</script>

<LightInstance
  {light}
  {lookAt}
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
