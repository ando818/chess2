<script>import { useFrame } from '../hooks/useFrame';
import { onDestroy } from 'svelte';
import { useThrelteRoot } from '../hooks/useThrelteRoot';
export let pass;
const { addPass, removePass } = useThrelteRoot();
addPass(pass);
useFrame(() => { }, {
    debugFrameloopMessage: 'Pass component'
});
onDestroy(() => {
    removePass(pass);
});
</script>
