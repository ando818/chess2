<script>import HierarchicalObject from './HierarchicalObject.svelte';
export let object;
</script>

<HierarchicalObject
  {object}
  onChildMount={(child) => object.add(child)}
  onChildDestroy={(child) => object.remove(child)}
>
  <slot />
</HierarchicalObject>
