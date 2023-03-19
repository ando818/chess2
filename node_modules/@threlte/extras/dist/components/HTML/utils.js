import { Camera, Matrix4, Object3D, OrthographicCamera, PerspectiveCamera, Raycaster, Vector3 } from 'three';
const v1 = new Vector3();
const v2 = new Vector3();
const v3 = new Vector3();
export const defaultCalculatePosition = (obj, camera, size) => {
    const objectPos = v1.setFromMatrixPosition(obj.matrixWorld);
    objectPos.project(camera);
    const widthHalf = size.width / 2;
    const heightHalf = size.height / 2;
    return [objectPos.x * widthHalf + widthHalf, -(objectPos.y * heightHalf) + heightHalf];
};
export const isObjectBehindCamera = (el, camera) => {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const deltaCamObj = objectPos.sub(cameraPos);
    const camDir = camera.getWorldDirection(v3);
    return deltaCamObj.angleTo(camDir) > Math.PI / 2;
};
export const isObjectVisible = (el, camera, raycaster, occlude) => {
    const elPos = v1.setFromMatrixPosition(el.matrixWorld);
    const screenPos = elPos.clone();
    screenPos.project(camera);
    raycaster.setFromCamera(screenPos, camera);
    const intersects = raycaster.intersectObjects(occlude, true);
    if (intersects.length) {
        const intersectionDistance = intersects[0].distance;
        const pointDistance = elPos.distanceTo(raycaster.ray.origin);
        return pointDistance < intersectionDistance;
    }
    return true;
};
export const objectScale = (el, camera) => {
    if (camera instanceof OrthographicCamera) {
        return camera.zoom;
    }
    else if (camera instanceof PerspectiveCamera) {
        const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
        const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
        const vFOV = (camera.fov * Math.PI) / 180;
        const dist = objectPos.distanceTo(cameraPos);
        const scaleFOV = 2 * Math.tan(vFOV / 2) * dist;
        return 1 / scaleFOV;
    }
    else {
        return 1;
    }
};
export const objectZIndex = (el, camera, zIndexRange) => {
    if (camera instanceof PerspectiveCamera || camera instanceof OrthographicCamera) {
        const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
        const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
        const dist = objectPos.distanceTo(cameraPos);
        const A = (zIndexRange[1] - zIndexRange[0]) / (camera.far - camera.near);
        const B = zIndexRange[1] - A * camera.far;
        return Math.round(A * dist + B);
    }
    return undefined;
};
export const epsilon = (value) => (Math.abs(value) < 1e-10 ? 0 : value);
export const getCSSMatrix = (matrix, multipliers, prepend = '') => {
    let matrix3d = 'matrix3d(';
    for (let i = 0; i !== 16; i++) {
        matrix3d += epsilon(multipliers[i] * matrix.elements[i]) + (i !== 15 ? ',' : ')');
    }
    return prepend + matrix3d;
};
export const getCameraCSSMatrix = ((multipliers) => {
    return (matrix) => getCSSMatrix(matrix, multipliers);
})([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]);
export const getObjectCSSMatrix = ((scaleMultipliers) => {
    return (matrix, factor) => getCSSMatrix(matrix, scaleMultipliers(factor), 'translate(-50%,-50%)');
})((f) => [
    1 / f,
    1 / f,
    1 / f,
    1,
    -1 / f,
    -1 / f,
    -1 / f,
    -1,
    1 / f,
    1 / f,
    1 / f,
    1,
    1,
    1,
    1,
    1
]);
const styleDeclarationKeyToCssString = (s) => {
    return s
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase();
};
export const compileStyles = (styles) => {
    return Object.entries(styles)
        .filter(([_, value]) => !!value)
        .map(([key, value]) => `${styleDeclarationKeyToCssString(key)}: ${value}`)
        .join('; ');
};
export const updateStyles = (store, styles) => {
    store.update((values) => {
        return {
            ...values,
            ...styles
        };
    });
};
