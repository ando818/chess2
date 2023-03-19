import { SvelteComponentTyped } from "svelte";
import { PositionalAudio as ThreePositionalAudio } from 'three';
import type { PositionalAudioProperties } from '../types/components';
declare const __propDef: {
    props: {
        position?: PositionalAudioProperties['position'];
        scale?: PositionalAudioProperties['scale'];
        rotation?: PositionalAudioProperties['rotation'];
        lookAt?: PositionalAudioProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: PositionalAudioProperties['castShadow'];
        receiveShadow?: PositionalAudioProperties['receiveShadow'];
        frustumCulled?: PositionalAudioProperties['frustumCulled'];
        renderOrder?: PositionalAudioProperties['renderOrder'];
        visible?: PositionalAudioProperties['visible'];
        userData?: PositionalAudioProperties['userData'];
        dispose?: PositionalAudioProperties['dispose'];
        autoplay?: PositionalAudioProperties['autoplay'];
        detune?: PositionalAudioProperties['detune'];
        source?: PositionalAudioProperties['source'];
        volume?: PositionalAudioProperties['volume'];
        loop?: PositionalAudioProperties['loop'];
        filters?: PositionalAudioProperties['filters'];
        playbackRate?: PositionalAudioProperties['playbackRate'];
        play?: PositionalAudioProperties['play'];
        pause?: PositionalAudioProperties['pause'];
        stop?: PositionalAudioProperties['stop'];
        id?: PositionalAudioProperties['id'];
        directionalCone?: PositionalAudioProperties['directionalCone'];
        refDistance?: PositionalAudioProperties['refDistance'];
        rolloffFactor?: PositionalAudioProperties['rolloffFactor'];
        distanceModel?: PositionalAudioProperties['distanceModel'];
        maxDistance?: PositionalAudioProperties['maxDistance'];
        audio?: ThreePositionalAudio | undefined;
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
export declare type PositionalAudioProps = typeof __propDef.props;
export declare type PositionalAudioEvents = typeof __propDef.events;
export declare type PositionalAudioSlots = typeof __propDef.slots;
export default class PositionalAudio extends SvelteComponentTyped<PositionalAudioProps, PositionalAudioEvents, PositionalAudioSlots> {
    get audio(): ThreePositionalAudio;
}
export {};
