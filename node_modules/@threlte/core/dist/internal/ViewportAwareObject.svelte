<script>import { useTicked } from '../lib/useTicked';
import { createEventDispatcher, tick } from 'svelte';
import { Frustum, Matrix4, Mesh, Object3D, Vector3 } from 'three';
import { useFrame } from '../hooks/useFrame';
import { useThrelte } from '../hooks/useThrelte';
export let object;
export let viewportAware = false;
const dispatch = createEventDispatcher();
const { camera, invalidate } = useThrelte();
const frustum = new Frustum();
const projScreenMatrix = new Matrix4();
const objectIsMesh = (objOrMesh) => {
    return objOrMesh.type === 'Mesh';
};
const v3World = new Vector3();
const checkInViewport = () => {
    if (!$camera)
        return true;
    projScreenMatrix.multiplyMatrices($camera.projectionMatrix, $camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(projScreenMatrix);
    if (objectIsMesh(object)) {
        return frustum.intersectsObject(object);
    }
    else {
        object.getWorldPosition(v3World);
        return frustum.containsPoint(v3World);
    }
};
const ticked = useTicked();
export let inViewport = checkInViewport();
const dispatchEvent = async (isInViewport) => {
    if (isInViewport) {
        if (!$ticked)
            await tick();
        dispatch('viewportenter', object);
    }
    else {
        if (!$ticked)
            await tick();
        dispatch('viewportleave', object);
    }
};
const { start, stop, started } = useFrame(() => {
    const v = checkInViewport();
    if (inViewport === undefined) {
        inViewport = checkInViewport();
        dispatchEvent(inViewport);
    }
    else if (v !== inViewport) {
        dispatchEvent(v);
        inViewport = v;
    }
}, {
    autostart: viewportAware,
    debugFrameloopMessage: 'ViewportAwareObject: tracking viewport visibility'
});
$: if (viewportAware && !$started) {
    start();
}
else if (!viewportAware && $started) {
    stop();
}
invalidate('ViewportAwareObject');
</script>
