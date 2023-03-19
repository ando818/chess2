import { SvelteComponentTyped } from "svelte";
import { type Position } from '@threlte/core';
import type { CollisionGroupsBitMask } from '../types/types';
declare const __propDef: {
    props: {
        position?: Position | undefined;
        height?: number | undefined;
        radius?: number | undefined;
        speed?: number | undefined;
        jumpStrength?: number | undefined;
        playerCollisionGroups?: CollisionGroupsBitMask | undefined;
        groundCollisionGroups?: CollisionGroupsBitMask | undefined;
    };
    events: {
        groundenter: CustomEvent<void>;
        groundexit: CustomEvent<void>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type BasicPlayerControllerProps = typeof __propDef.props;
export declare type BasicPlayerControllerEvents = typeof __propDef.events;
export declare type BasicPlayerControllerSlots = typeof __propDef.slots;
export default class BasicPlayerController extends SvelteComponentTyped<BasicPlayerControllerProps, BasicPlayerControllerEvents, BasicPlayerControllerSlots> {
}
export {};
