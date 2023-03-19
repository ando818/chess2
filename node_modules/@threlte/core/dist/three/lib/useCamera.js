import { onDestroy } from 'svelte';
import { useThrelte } from '../../hooks/useThrelte';
import { useThrelteRoot } from '../../hooks/useThrelteRoot';
const isCamera = (value) => {
    return value && value.isCamera;
};
const isOrthographicCamera = (value) => {
    return value && value.isOrthographicCamera;
};
const isPerspectiveCamera = (value) => {
    return value && value.isPerspectiveCamera;
};
const isPerspectiveCameraOrOrthographicCamera = (value) => {
    return isPerspectiveCamera(value) || isOrthographicCamera(value);
};
export const useCamera = () => {
    const { invalidate, size } = useThrelte();
    const { setCamera } = useThrelteRoot();
    let currentInstance;
    let unsubscribe = undefined;
    onDestroy(() => {
        unsubscribe?.();
    });
    const subscriber = (size) => {
        if (!currentInstance)
            return;
        if (isOrthographicCamera(currentInstance)) {
            currentInstance.left = size.width / -2;
            currentInstance.right = size.width / 2;
            currentInstance.top = size.height / 2;
            currentInstance.bottom = size.height / -2;
            currentInstance.updateProjectionMatrix();
            currentInstance.updateMatrixWorld();
            invalidate();
        }
        else if (isPerspectiveCamera(currentInstance)) {
            currentInstance.aspect = size.width / size.height;
            currentInstance.updateProjectionMatrix();
            currentInstance.updateMatrixWorld();
            invalidate();
        }
    };
    const update = (instance, manual) => {
        unsubscribe?.();
        if (manual || !isPerspectiveCameraOrOrthographicCamera(instance)) {
            currentInstance = undefined;
            return;
        }
        currentInstance = instance;
        unsubscribe = size.subscribe(subscriber);
    };
    const makeDefaultCamera = (instance, makeDefault) => {
        if (!isCamera(instance) || !makeDefault)
            return;
        setCamera(instance);
        invalidate();
    };
    return {
        update,
        makeDefaultCamera
    };
};
