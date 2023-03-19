<script context="module">import RAPIER from '@dimforge/rapier3d-compat';
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
/**
 * RAPIER.init() should only be called once
 */
let initialized = writable(false);
</script>

<script>import InnerWorld from './InnerWorld.svelte';
export let gravity = undefined;
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
let error = false;
const init = async () => {
    if ($initialized)
        return;
    try {
        await RAPIER.init();
        $initialized = true;
    }
    catch (e) {
        error = true;
    }
};
onMount(init);
</script>

{#if $initialized}
  <InnerWorld
    {gravity}
    {rawIntegrationParameters}
    {rawIslands}
    {rawBroadPhase}
    {rawNarrowPhase}
    {rawBodies}
    {rawColliders}
    {rawImpulseJoints}
    {rawMultibodyJoints}
    {rawCCDSolver}
    {rawQueryPipeline}
    {rawPhysicsPipeline}
    {rawSerializationPipeline}
    {rawDebugRenderPipeline}
  >
    <slot />
  </InnerWorld>
{/if}

{#if error}
  <slot name="fallback" />
{/if}
