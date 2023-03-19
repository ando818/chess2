import { SvelteComponentTyped } from "svelte";
import type { WorldProperties } from '../../types/components';
declare const __propDef: {
    props: {
        gravity?: WorldProperties['gravity'];
        rawIntegrationParameters?: WorldProperties['rawIntegrationParameters'];
        rawIslands?: WorldProperties['rawIslands'];
        rawBroadPhase?: WorldProperties['rawBroadPhase'];
        rawNarrowPhase?: WorldProperties['rawNarrowPhase'];
        rawBodies?: WorldProperties['rawBodies'];
        rawColliders?: WorldProperties['rawColliders'];
        rawImpulseJoints?: WorldProperties['rawImpulseJoints'];
        rawMultibodyJoints?: WorldProperties['rawMultibodyJoints'];
        rawCCDSolver?: WorldProperties['rawCCDSolver'];
        rawQueryPipeline?: WorldProperties['rawQueryPipeline'];
        rawPhysicsPipeline?: WorldProperties['rawPhysicsPipeline'];
        rawSerializationPipeline?: WorldProperties['rawSerializationPipeline'];
        rawDebugRenderPipeline?: WorldProperties['rawDebugRenderPipeline'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        fallback: {};
    };
};
export declare type WorldProps = typeof __propDef.props;
export declare type WorldEvents = typeof __propDef.events;
export declare type WorldSlots = typeof __propDef.slots;
export default class World extends SvelteComponentTyped<WorldProps, WorldEvents, WorldSlots> {
}
export {};
