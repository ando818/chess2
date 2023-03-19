<script>import { OrthographicCamera as ThreeOrthographicCamera } from 'three';
import { useThrelte } from '../hooks/useThrelte';
import { useThrelteRoot } from '../hooks/useThrelteRoot';
import CameraInstance from '../instances/CameraInstance.svelte';
// CameraInstance
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
export let userData = undefined;
export let dispose = undefined;
export let useCamera = true;
// OrthographicCamera
export let near = undefined;
export let far = undefined;
export let left = undefined;
export let right = undefined;
export let top = undefined;
export let bottom = undefined;
export let zoom = undefined;
const { size, invalidate } = useThrelte();
const { setCamera } = useThrelteRoot();
export const camera = new ThreeOrthographicCamera(left ?? $size.width / -2, right ?? $size.width / 2, top ?? $size.height / 2, bottom ?? $size.height / -2, near, far);
$: if (useCamera)
    setCamera(camera);
$: {
    camera.left = left ?? $size.width / -2;
    camera.right = right ?? $size.width / 2;
    camera.top = top ?? $size.height / 2;
    camera.bottom = bottom ?? $size.height / -2;
    if (near !== undefined)
        camera.near = near;
    if (far !== undefined)
        camera.far = far;
    if (zoom !== undefined)
        camera.zoom = zoom;
    camera.updateProjectionMatrix();
    invalidate('OrthographicCamera: frustum changed');
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
