import { SvelteComponentTyped } from "svelte";
import { Audio as ThreeAudio } from 'three';
import type { AudioProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: AudioProperties['position'];
        scale?: AudioProperties['scale'];
        rotation?: AudioProperties['rotation'];
        lookAt?: AudioProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: AudioProperties['castShadow'];
        receiveShadow?: AudioProperties['receiveShadow'];
        frustumCulled?: AudioProperties['frustumCulled'];
        renderOrder?: AudioProperties['renderOrder'];
        visible?: AudioProperties['visible'];
        userData?: AudioProperties['userData'];
        dispose?: AudioProperties['dispose'];
        autoplay?: AudioProperties['autoplay'];
        detune?: AudioProperties['detune'];
        source?: AudioProperties['source'];
        volume?: AudioProperties['volume'];
        loop?: AudioProperties['loop'];
        filters?: AudioProperties['filters'];
        playbackRate?: AudioProperties['playbackRate'];
        play?: AudioProperties['play'];
        pause?: AudioProperties['pause'];
        stop?: AudioProperties['stop'];
        id?: AudioProperties['id'];
        audio?: ThreeAudio<GainNode> | undefined;
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
export declare type AudioProps = typeof __propDef.props;
export declare type AudioEvents = typeof __propDef.events;
export declare type AudioSlots = typeof __propDef.slots;
export default class Audio extends SvelteComponentTyped<AudioProps, AudioEvents, AudioSlots> {
    get audio(): ThreeAudio<GainNode>;
}
export {};
