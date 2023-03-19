<script>import { HemisphereLight as ThreeHemisphereLight } from 'three';
import { useThrelte } from '../hooks/useThrelte';
import { useThrelteRoot } from '../hooks/useThrelteRoot';
import LightInstance from '../instances/LightInstance.svelte';
import { convertColorRepresentationToColor } from '../lib/colors';
export let position = undefined;
export let scale = undefined;
export let rotation = undefined;
export let lookAt = undefined;
export let castShadow = undefined;
export let receiveShadow = undefined;
export let viewportAware = false;
export let inViewport = false;
export let frustumCulled = undefined;
export let renderOrder = undefined;
export let visible = undefined;
export let userData = undefined;
export let dispose = undefined;
export let intensity = undefined;
export let skyColor = undefined;
export let groundColor = undefined;
export const light = new ThreeHemisphereLight(skyColor, groundColor, intensity);
const { invalidate } = useThrelte();
const { linear } = useThrelteRoot();
$: {
    if (groundColor !== undefined) {
        light.groundColor = convertColorRepresentationToColor(groundColor, $linear);
        invalidate('HemisphereLight: props changed');
    }
}
</script>

<LightInstance
  {light}
  {lookAt}
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
  color={skyColor}
  {intensity}
>
  <slot />
</LightInstance>
