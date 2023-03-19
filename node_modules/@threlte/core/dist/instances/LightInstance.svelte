<script>import { useThrelte } from '../hooks/useThrelte';
import { useThrelteRoot } from '../hooks/useThrelteRoot';
import { convertColorRepresentationToColor } from '../lib/colors';
import Object3DInstance from './Object3DInstance.svelte';
export let light;
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
export let color = undefined;
export let intensity = undefined;
const { invalidate } = useThrelte();
const { linear } = useThrelteRoot();
$: {
    if (intensity !== undefined)
        light.intensity = intensity;
    if (color !== undefined)
        light.color = convertColorRepresentationToColor(color, $linear);
    invalidate('LightInstance: props changed');
}
</script>

<Object3DInstance
  object={light}
  {lookAt}
  {castShadow}
  {receiveShadow}
  {frustumCulled}
  {renderOrder}
  {position}
  {scale}
  {rotation}
  {viewportAware}
  {visible}
  {userData}
  {dispose}
  on:viewportenter
  on:viewportleave
  bind:inViewport
>
  <slot />
</Object3DInstance>
