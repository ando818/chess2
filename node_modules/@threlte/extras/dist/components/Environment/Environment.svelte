<script>import { useParent, useThrelte } from '@threlte/core';
import { onDestroy } from 'svelte';
import { CubeReflectionMapping, CubeTextureLoader, EquirectangularReflectionMapping, FloatType, LinearEncoding, sRGBEncoding, Texture, TextureLoader } from 'three';
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import GroundProjectedEnv from './GroundProjectedEnv.svelte';
export let path = undefined;
export let files;
export let isBackground = undefined;
export let groundProjection = undefined;
export let format = undefined;
export let encoding = undefined;
const isScene = (obj) => !!obj.isScene;
const { scene: globalScene, invalidate, renderer } = useThrelte();
const parent = useParent();
let scene = globalScene;
if (isScene($parent))
    scene = $parent;
let previousSceneEnvironment = scene.environment;
let previousSceneBackground = scene.background;
$: isCubeMap = Array.isArray(files);
$: envPath = `${path || ''}${files}`;
let previousEnvPath = envPath;
let previousEnvMap;
let previousFormat;
const pickLoader = () => {
    const inferredFormat = format || (Array.isArray(files) ? files[0] : files).split('.').pop() == 'hdr' ? 'hdr' : 'ldr';
    if (isCubeMap && inferredFormat == 'ldr')
        return new CubeTextureLoader();
    if (!isCubeMap && inferredFormat == 'ldr')
        return new TextureLoader();
    if (isCubeMap && inferredFormat == 'hdr')
        return new HDRCubeTextureLoader();
    if (!isCubeMap && inferredFormat == 'hdr')
        return new RGBELoader();
    return new TextureLoader();
};
const loadEnvironment = () => {
    if (!renderer)
        throw new Error('Threlte renderer undefined. Component <Environment/> must be a descendant of <Canvas/>.');
    const loader = pickLoader();
    loader.setDataType?.(FloatType);
    loader.setPath(path || '').load(files, (texture) => {
        texture.mapping = isCubeMap ? CubeReflectionMapping : EquirectangularReflectionMapping;
        texture.encoding = encoding || isCubeMap ? LinearEncoding : sRGBEncoding;
        previousEnvMap = texture;
        scene.environment = previousEnvMap;
        if (isBackground)
            scene.background = previousEnvMap;
        invalidate();
    });
    previousFormat = format || undefined;
    previousEnvPath = envPath;
};
$: {
    if (envPath != previousEnvPath || format != previousFormat) {
        if (previousEnvMap) {
            previousEnvMap.dispose();
        }
        loadEnvironment();
        groundProjection = groundProjection;
    }
    if (!isBackground && scene.background) {
        scene.background = null;
        invalidate('Removing Environment as scene.background');
    }
    if (isBackground && !scene.background && previousEnvMap) {
        scene.background = previousEnvMap;
        invalidate('Adding Environment as scene.background');
    }
}
onDestroy(() => {
    scene.environment = previousSceneEnvironment;
    scene.background = previousSceneBackground;
    if (previousEnvMap)
        previousEnvMap.dispose();
    groundProjection = undefined;
    invalidate('Environment destroyed');
});
</script>

{#if groundProjection}
  <GroundProjectedEnv
    {groundProjection}
    currentEnvMap={previousEnvMap}
  />
{/if}
