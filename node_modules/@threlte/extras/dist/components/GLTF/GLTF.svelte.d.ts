import { SvelteComponentTyped } from "svelte";
import type { GLTF as ThreeGLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import type { GLTFProperties } from '../../types/components';
import type { ThrelteGltf } from '../../types/types';
declare const __propDef: {
    props: {
        position?: GLTFProperties['position'];
        scale?: GLTFProperties['scale'];
        rotation?: GLTFProperties['rotation'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: GLTFProperties['castShadow'];
        receiveShadow?: GLTFProperties['receiveShadow'];
        frustumCulled?: GLTFProperties['frustumCulled'];
        renderOrder?: GLTFProperties['renderOrder'];
        visible?: GLTFProperties['visible'];
        dispose?: GLTFProperties['dispose'];
        lookAt?: GLTFProperties['lookAt'];
        url: GLTFProperties['url'];
        /**
           * @deprecated Use `useDraco` instead
           */ dracoDecoderPath?: GLTFProperties['dracoDecoderPath'];
        useDraco?: GLTFProperties['useDraco'];
        useMeshopt?: GLTFProperties['useMeshopt'];
        ktxTranscoderPath?: GLTFProperties['ktxTranscoderPath'];
        ignorePointer?: boolean | undefined;
        interactive?: boolean | undefined;
        gltf?: ThreeGLTF | undefined;
        scene?: ThreeGLTF['scene'] | undefined;
        animations?: ThreeGLTF['animations'] | undefined;
        asset?: ThreeGLTF['asset'] | undefined;
        cameras?: ThreeGLTF['cameras'] | undefined;
        scenes?: ThreeGLTF['scenes'] | undefined;
        userData?: ThreeGLTF['userData'] | undefined;
        parser?: ThreeGLTF['parser'] | undefined;
        materials?: Record<string, any> | undefined;
        nodes?: Record<string, any> | undefined;
    };
    events: {
        click: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        contextmenu: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        pointerup: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        pointerdown: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        pointerenter: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        pointerleave: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        pointermove: CustomEvent<import("@threlte/core").ThreltePointerEvent>;
        viewportenter: CustomEvent<import("three").Object3D<import("three").Event>>;
        viewportleave: CustomEvent<import("three").Object3D<import("three").Event>>;
        load: CustomEvent<ThreeGLTF>;
        unload: CustomEvent<undefined>;
        error: CustomEvent<string>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type GltfProps = typeof __propDef.props;
export declare type GltfEvents = typeof __propDef.events;
export declare type GltfSlots = typeof __propDef.slots;
export default class Gltf extends SvelteComponentTyped<GltfProps, GltfEvents, GltfSlots> {
}
export {};
