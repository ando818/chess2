<script context="module">import { onDestroy, setContext, tick } from 'svelte';
import { useFrameHandler } from '../../hooks/useFrameHandler';
import { createRapierContext } from '../../lib/createRapierContext';
</script>

<script>import { positionToVector3 } from '../../lib/positionToVector3';
export let gravity = { y: -9.81 };
export let rawIntegrationParameters = undefined;
export let rawIslands = undefined;
export let rawBroadPhase = undefined;
export let rawNarrowPhase = undefined;
export let rawBodies = undefined;
export let rawColliders = undefined;
export let rawImpulseJoints = undefined;
export let rawMultibodyJoints = undefined;
export let rawCCDSolver = undefined;
export let rawQueryPipeline = undefined;
export let rawPhysicsPipeline = undefined;
export let rawSerializationPipeline = undefined;
export let rawDebugRenderPipeline = undefined;
const rapierContext = createRapierContext(positionToVector3(gravity), rawIntegrationParameters, rawIslands, rawBroadPhase, rawNarrowPhase, rawBodies, rawColliders, rawImpulseJoints, rawMultibodyJoints, rawCCDSolver, rawQueryPipeline, rawPhysicsPipeline, rawSerializationPipeline, rawDebugRenderPipeline);
setContext('threlte-rapier-context', rapierContext);
$: if (gravity !== undefined)
    rapierContext.world.gravity = positionToVector3(gravity);
useFrameHandler(rapierContext);
onDestroy(async () => {
    await tick();
    rapierContext.world.free();
});
</script>

<slot />
