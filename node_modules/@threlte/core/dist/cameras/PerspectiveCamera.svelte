<script>import { PerspectiveCamera as ThreePerspectiveCamera } from 'three';
import { useThrelte } from '../hooks/useThrelte';
import CameraInstance from '../instances/CameraInstance.svelte';
// CameraInstance
export let position = undefined;
export let scale = undefined;
export let rotation = undefined;
export let lookAt = undefined;
export let castShadow = undefined;
export let receiveShadow = undefined;
export let frustumCulled = undefined;
export let renderOrder = undefined;
export let visible = undefined;
export let userData = undefined;
export let dispose = undefined;
export let viewportAware = false;
export let inViewport = false;
export let useCamera = true;
// self
export let near = undefined;
export let far = undefined;
export let fov = undefined;
const { size, invalidate } = useThrelte();
export const camera = new ThreePerspectiveCamera(fov, $size.width / $size.height, near, far);
$: {
    camera.aspect = $size.width / $size.height;
    camera.updateProjectionMatrix();
    invalidate('PerspectiveCamera: aspect changed');
}
$: {
    if (near !== undefined)
        camera.near = near;
    if (far !== undefined)
        camera.far = far;
    if (fov !== undefined)
        camera.fov = fov;
    camera.updateProjectionMatrix();
    invalidate('PerspectiveCamera: props changed');
}
</script>

<CameraInstance
  {camera}
  {position}
  {scale}
  {rotation}
  {castShadow}
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
  {lookAt}
  {useCamera}
>
  <slot />
</CameraInstance>
