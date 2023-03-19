import { type Writable } from 'svelte/store';
import { AnimationMixer, type AnimationAction, type Object3D } from 'three';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
declare type UseGltfAnimationsReturnType<Actions extends any> = {
    gltf: Writable<GLTF | undefined>;
    mixer: Writable<AnimationMixer | undefined>;
    actions: Writable<Actions>;
};
declare type Root = Object3D;
declare type GltfStore = Writable<GLTF | undefined>;
declare type Callback<Actions extends any> = (args: {
    actions: Actions;
    mixer: AnimationMixer;
}) => void;
/**
 * Convenience hook to use animations loaded with a <GLTF> threlte component.
 *
 * ### Example
 *
 * ```svelte
 * <script lang="ts">
 *   import { GLTF, useGltfAnimations } from '@threlte/extras'
 *
 *   const { gltf, actions } = useGltfAnimations<'All Animations'>(({ actions }) => {
 *     // Either play your animations as soon as they are loaded
 *     actions['All Animations']?.play()
 *   })
 *
 *   // Or play them whenever you need
 *   export const triggerAnimation = () => {
 *     $actions['All Animations']?.play()
 *   }
 * </script>
 *
 * <GLTF url={'/Bengal.glb'} bind:gltf={$gltf} />
 * ```
 * @param callback
 * @returns
 */
export declare function useGltfAnimations<T extends string, Actions = Partial<Record<T, AnimationAction>>>(root?: Root): UseGltfAnimationsReturnType<Actions>;
export declare function useGltfAnimations<T extends string, Actions = Partial<Record<T, AnimationAction>>>(gltf: GltfStore, root?: Root): UseGltfAnimationsReturnType<Actions>;
export declare function useGltfAnimations<T extends string, Actions = Partial<Record<T, AnimationAction>>>(callback?: Callback<Actions>, root?: Root): UseGltfAnimationsReturnType<Actions>;
export declare function useGltfAnimations<T extends string, Actions = Partial<Record<T, AnimationAction>>>(gltf: GltfStore, callback?: Callback<Actions>, root?: Root): UseGltfAnimationsReturnType<Actions>;
export {};
