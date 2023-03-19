import { onDestroy } from 'svelte';
import { useThrelte } from '../../hooks/useThrelte';
import { resolve } from './resolve';
const initialValueBeforeAttach = Symbol('initialValueBeforeAttach');
export const useAttach = () => {
    const { invalidate } = useThrelte();
    let isAttached = false;
    let valueBeforeAttach = initialValueBeforeAttach;
    let detachFn;
    // the target that the object is attached to
    let attachedTo;
    // the property name that the object is attached to
    let attachedKey;
    const update = (instance, parent, attach) => {
        detach();
        // maybe assign 'material' or 'geometry' automatically if not specified
        if (!attach) {
            const i = instance;
            const isMaterial = i?.isMaterial || false;
            if (isMaterial) {
                attach = 'material';
            }
            const isGeometry = i?.isBufferGeometry || i?.isGeometry || false;
            if (isGeometry) {
                attach = 'geometry';
            }
        }
        if (!attach)
            return;
        if (typeof attach === 'function') {
            detachFn = attach(parent, instance);
        }
        else {
            const { target, key } = resolve(parent, attach);
            valueBeforeAttach = target[key];
            target[key] = instance;
            attachedTo = target;
            attachedKey = key;
        }
        isAttached = true;
        invalidate();
    };
    const detach = () => {
        if (!isAttached)
            return;
        if (detachFn) {
            detachFn();
            detachFn = undefined;
        }
        else if (attachedTo && attachedKey && valueBeforeAttach !== initialValueBeforeAttach) {
            attachedTo[attachedKey] = valueBeforeAttach;
            valueBeforeAttach = initialValueBeforeAttach;
            attachedTo = undefined;
            attachedKey = undefined;
        }
        isAttached = false;
        invalidate();
    };
    onDestroy(() => {
        detach();
    });
    return {
        update
    };
};
