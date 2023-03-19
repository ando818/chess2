import { SvelteComponentTyped } from "svelte";
import type { InnerWorldProperties } from '../../types/components';
declare const __propDef: {
    props: {
        gravity?: InnerWorldProperties['gravity'];
        rawIntegrationParameters?: InnerWorldProperties['rawIntegrationParameters'];
        rawIslands?: InnerWorldProperties['rawIslands'];
        rawBroadPhase?: InnerWorldProperties['rawBroadPhase'];
        rawNarrowPhase?: InnerWorldProperties['rawNarrowPhase'];
        rawBodies?: InnerWorldProperties['rawBodies'];
        rawColliders?: InnerWorldProperties['rawColliders'];
        rawImpulseJoints?: InnerWorldProperties['rawImpulseJoints'];
        rawMultibodyJoints?: InnerWorldProperties['rawMultibodyJoints'];
        rawCCDSolver?: InnerWorldProperties['rawCCDSolver'];
        rawQueryPipeline?: InnerWorldProperties['rawQueryPipeline'];
        rawPhysicsPipeline?: InnerWorldProperties['rawPhysicsPipeline'];
        rawSerializationPipeline?: InnerWorldProperties['rawSerializationPipeline'];
        rawDebugRenderPipeline?: InnerWorldProperties['rawDebugRenderPipeline'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type InnerWorldProps = typeof __propDef.props;
export declare type InnerWorldEvents = typeof __propDef.events;
export declare type InnerWorldSlots = typeof __propDef.slots;
export default class InnerWorld extends SvelteComponentTyped<InnerWorldProps, InnerWorldEvents, InnerWorldSlots> {
}
export {};
