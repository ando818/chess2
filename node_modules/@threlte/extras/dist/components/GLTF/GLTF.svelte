<script>import { DisposableObject, InteractiveObject, LayerableObject, Object3DInstance, useLoader, useThrelte } from '@threlte/core';
import { createEventDispatcher } from 'svelte';
import { DefaultLoadingManager } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { buildSceneGraph } from '../../lib/buildSceneGraph';
export let position = undefined;
export let scale = undefined;
export let rotation = undefined;
export let viewportAware = false;
export let inViewport = false;
export let castShadow = undefined;
export let receiveShadow = undefined;
export let frustumCulled = undefined;
export let renderOrder = undefined;
export let visible = undefined;
export let dispose = undefined;
export let lookAt = undefined;
export let url;
/**
 * @deprecated Use `useDraco` instead
 */
export let dracoDecoderPath = undefined;
export let useDraco = false;
export let useMeshopt = false;
export let ktxTranscoderPath = undefined;
export let ignorePointer = false;
export let interactive = false;
const { invalidate } = useThrelte();
const dispatch = createEventDispatcher();
export let gltf = undefined;
export let scene = undefined;
export let animations = undefined;
export let asset = undefined;
export let cameras = undefined;
export let scenes = undefined;
export let userData = undefined;
export let parser = undefined;
export let materials = undefined;
export let nodes = undefined;
const loader = useLoader(GLTFLoader, () => new GLTFLoader(DefaultLoadingManager));
if (useDraco) {
    // This has a priority over the deprecated `dracoDecoderPath` property
    if (useDraco === true) {
        setDracoPath('https://www.gstatic.com/draco/v1/decoders/');
    }
    else if (typeof useDraco === 'string') {
        setDracoPath(useDraco);
    }
}
else if (dracoDecoderPath) {
    // This is discarded if `useDraco` is used
    console.warn('⚠️ dracoDecoderPath is deprecated, use useDraco instead');
    setDracoPath(dracoDecoderPath);
}
function setDracoPath(path) {
    const dracoLoader = useLoader(DRACOLoader, () => new DRACOLoader(DefaultLoadingManager).setDecoderPath(path));
    loader.setDRACOLoader(dracoLoader);
}
if (useMeshopt) {
    loader.setMeshoptDecoder(MeshoptDecoder);
}
const { renderer } = useThrelte();
if (renderer && ktxTranscoderPath) {
    const ktx2Loader = useLoader(KTX2Loader, () => new KTX2Loader(DefaultLoadingManager)
        .setTranscoderPath(ktxTranscoderPath)
        .detectSupport(renderer));
    loader.setKTX2Loader(ktx2Loader);
}
const onLoad = (data) => {
    // unload is not in use anymore
    if (gltf)
        dispatch('unload');
    gltf = data;
    scene = gltf.scene;
    animations = gltf.animations;
    asset = gltf.asset;
    cameras = gltf.cameras;
    scenes = gltf.scenes;
    userData = gltf.userData;
    parser = gltf.parser;
    const { materials: m, nodes: n } = buildSceneGraph(data.scene);
    materials = m;
    nodes = n;
    invalidate('GLTF: model loaded');
    dispatch('load', gltf);
};
const onError = (e) => {
    console.error(`Error loading GLTF: ${e.message}`);
    gltf = undefined;
    scene = undefined;
    animations = undefined;
    asset = undefined;
    cameras = undefined;
    scenes = undefined;
    userData = undefined;
    parser = undefined;
    nodes = undefined;
    materials = undefined;
    dispatch('error', e.message);
};
$: loader.load(url, onLoad, undefined, onError);
$: {
    if (scene) {
        scene.traverse((obj) => {
            if (castShadow !== undefined)
                obj.castShadow = castShadow;
            if (receiveShadow !== undefined)
                obj.receiveShadow = receiveShadow;
            if (frustumCulled !== undefined)
                obj.frustumCulled = frustumCulled;
            if (renderOrder !== undefined)
                obj.renderOrder = renderOrder;
        });
    }
}
</script>

{#if nodes}
  {#each Object.values(nodes) as node}
    {#if node}
      {#key node.uuid}
        <!-- dispose all nodes, i.e. meshes, skinnedMeshs -->
        <DisposableObject
          {dispose}
          object={node}
        />

        <LayerableObject object={node} />

        {#if node.type === 'Mesh' || node.type === 'SkinnedMesh'}
          <InteractiveObject
            object={node}
            {interactive}
            {ignorePointer}
            on:click
            on:contextmenu
            on:pointerup
            on:pointerdown
            on:pointerenter
            on:pointerleave
            on:pointermove
          />
        {/if}
      {/key}
    {/if}
  {/each}
{/if}

<!-- dispose all materials -->
{#if materials}
  {#each Object.values(materials) as material}
    <DisposableObject
      {dispose}
      object={material}
    />
  {/each}
{/if}

{#if scene}
  <Object3DInstance
    object={scene}
    {position}
    {scale}
    {rotation}
    {lookAt}
    {frustumCulled}
    {renderOrder}
    {visible}
    {dispose}
    {castShadow}
    {receiveShadow}
    {viewportAware}
    bind:inViewport
    on:viewportenter
    on:viewportleave
  >
    <slot />
  </Object3DInstance>
{/if}
