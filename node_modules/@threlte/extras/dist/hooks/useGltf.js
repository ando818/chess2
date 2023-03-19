import { createEventDispatcher } from 'svelte';
import { writable } from 'svelte/store';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module';
import { useLoader } from '@threlte/core';
import { buildSceneGraph } from '../lib/buildSceneGraph';
import { DefaultLoadingManager } from 'three';
createEventDispatcher;
export const useGltf = (url, options) => {
    const gltf = writable(undefined);
    const loader = useLoader(GLTFLoader, () => new GLTFLoader(DefaultLoadingManager));
    if (options?.useDraco) {
        const dracoDecoderPath = typeof options.useDraco === 'string'
            ? options.useDraco
            : 'https://www.gstatic.com/draco/versioned/decoders/1.4.3/';
        const dracoLoader = useLoader(DRACOLoader, () => new DRACOLoader(DefaultLoadingManager).setDecoderPath(dracoDecoderPath));
        loader.setDRACOLoader(dracoLoader);
    }
    if (options?.useMeshopt) {
        loader.setMeshoptDecoder(MeshoptDecoder);
    }
    loader.load(url, (data) => {
        if (data.scene)
            Object.assign(data, buildSceneGraph(data.scene));
        gltf.set(data);
    });
    return {
        gltf
    };
};
