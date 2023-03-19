<script>import { Group as ThreeGroup, MathUtils } from 'three';
import { useFrame, Group } from '@threlte/core';
// Group Properties
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
// Float Properties
export let speed = 1;
export let rotationIntensity = 1;
export let floatIntensity = 1;
export let floatingRange = [-0.1, 0.1];
// THREE.Group binding
export let group = undefined;
let t = Math.random() * 10000;
const map = MathUtils.mapLinear;
let combinedRotation = {
    x: rotation?.x ?? 0 + (Math.cos((t / 4) * speed) / 8) * rotationIntensity,
    y: rotation?.y ?? 0 + (Math.sin((t / 4) * speed) / 8) * rotationIntensity,
    z: rotation?.z ?? 0 + (Math.sin((t / 4) * speed) / 20) * rotationIntensity
};
let combinedPosition = {
    ...position,
    y: position?.y ??
        0 + map(Math.sin((t / 4) * speed) / 10, -0.1, 0.1, ...floatingRange) * floatIntensity
};
useFrame((_, delta) => {
    t += delta;
    combinedRotation = {
        x: rotation?.x ?? 0 + (Math.cos((t / 4) * speed) / 8) * rotationIntensity,
        y: rotation?.y ?? 0 + (Math.sin((t / 4) * speed) / 8) * rotationIntensity,
        z: rotation?.z ?? 0 + (Math.sin((t / 4) * speed) / 20) * rotationIntensity
    };
    combinedPosition = {
        ...position,
        y: position?.y ??
            0 + map(Math.sin((t / 4) * speed) / 10, -0.1, 0.1, ...floatingRange) * floatIntensity
    };
}, {
    debugFrameloopMessage: 'Float: framehandler'
});
</script>

<Group
  bind:group
  position={combinedPosition}
  {scale}
  rotation={combinedRotation}
  {lookAt}
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
>
  <slot />
</Group>
