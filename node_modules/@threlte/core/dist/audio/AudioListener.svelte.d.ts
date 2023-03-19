import { SvelteComponentTyped } from "svelte";
import { AudioListener as ThreeAudioListener } from 'three';
import type { AudioListenerProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: AudioListenerProperties['position'];
        scale?: AudioListenerProperties['scale'];
        rotation?: AudioListenerProperties['rotation'];
        lookAt?: AudioListenerProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: AudioListenerProperties['castShadow'];
        receiveShadow?: AudioListenerProperties['receiveShadow'];
        frustumCulled?: AudioListenerProperties['frustumCulled'];
        renderOrder?: AudioListenerProperties['renderOrder'];
        visible?: AudioListenerProperties['visible'];
        userData?: AudioListenerProperties['userData'];
        dispose?: AudioListenerProperties['dispose'];
        id?: AudioListenerProperties['id'];
        masterVolume?: AudioListenerProperties['masterVolume'];
        listener?: ThreeAudioListener | undefined;
        context?: AudioContext | undefined;
        resumeContext?: (() => Promise<void>) | undefined;
    };
    events: {
        viewportenter: CustomEvent<import("three").Object3D<import("three").Event>>;
        viewportleave: CustomEvent<import("three").Object3D<import("three").Event>>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type AudioListenerProps = typeof __propDef.props;
export declare type AudioListenerEvents = typeof __propDef.events;
export declare type AudioListenerSlots = typeof __propDef.slots;
export default class AudioListener extends SvelteComponentTyped<AudioListenerProps, AudioListenerEvents, AudioListenerSlots> {
    get listener(): ThreeAudioListener;
    get context(): AudioContext;
    get resumeContext(): () => Promise<void>;
}
export {};
