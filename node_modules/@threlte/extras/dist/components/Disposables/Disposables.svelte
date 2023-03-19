<script>import { DisposableObject } from '@threlte/core';
export let disposables;
</script>

<!-- Manually dispose objects -->
{#each disposables as disposable}
  <DisposableObject dispose object={disposable} />
{/each}

<!-- Tell the tree to stop disposing from here on -->
<DisposableObject dispose={false}>
  <slot />
</DisposableObject>
