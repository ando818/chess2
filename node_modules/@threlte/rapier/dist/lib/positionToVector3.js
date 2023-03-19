import { Vector3 } from 'three';
export const positionToVector3 = (position, v3) => {
    if (v3) {
        v3.set(position?.x ?? 0, position?.y ?? 0, position?.z ?? 0);
        return v3;
    }
    return new Vector3(position?.x ?? 0, position?.y ?? 0, position?.z ?? 0);
};
