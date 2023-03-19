import { SvelteComponentTyped } from "svelte";
import { Audio, PositionalAudio } from 'three';
declare const __propDef: {
    props: {
        position?: import("..").Position | undefined;
        scale?: import("..").Scale | undefined;
        rotation?: import("..").Rotation | undefined;
        lookAt?: import("..").LookAt | undefined;
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: boolean | undefined;
        receiveShadow?: boolean | undefined;
        frustumCulled?: boolean | undefined;
        renderOrder?: number | undefined;
        visible?: boolean | undefined;
        userData?: Record<string, any> | undefined;
        dispose?: boolean | undefined;
        autoplay?: boolean | undefined;
        detune?: number | undefined;
        source?: (string | AudioBuffer | HTMLMediaElement | MediaStream | AudioBufferSourceNode) | undefined;
        volume?: number | undefined;
        loop?: boolean | undefined;
        filters?: BiquadFilterNode | BiquadFilterNode[] | undefined;
        playbackRate?: number | undefined;
        audio: Audio<GainNode> | PositionalAudio;
        play?: ((delay?: any) => Promise<Audio<GainNode> | PositionalAudio>) | undefined;
        pause?: (() => Audio<GainNode> | PositionalAudio) | undefined;
        stop?: (() => Audio<GainNode> | PositionalAudio) | undefined;
    };
    events: {
        viewportenter: CustomEvent<import("three").Object3D<import("three").Event>>;
        viewportleave: CustomEvent<import("three").Object3D<import("three").Event>>;
        load: CustomEvent<AudioBuffer>;
        progress: CustomEvent<ProgressEvent<EventTarget>>;
        error: CustomEvent<ErrorEvent>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type AudioInstanceProps = typeof __propDef.props;
export declare type AudioInstanceEvents = typeof __propDef.events;
export declare type AudioInstanceSlots = typeof __propDef.slots;
export default class AudioInstance extends SvelteComponentTyped<AudioInstanceProps, AudioInstanceEvents, AudioInstanceSlots> {
    get play(): (delay?: any) => Promise<Audio<GainNode> | PositionalAudio>;
    get pause(): () => Audio<GainNode> | PositionalAudio;
    get stop(): () => Audio<GainNode> | PositionalAudio;
}
export {};
