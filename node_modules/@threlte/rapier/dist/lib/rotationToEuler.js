import { Euler } from 'three';
export const rotationToEuler = (rotation, euler) => {
    if (euler) {
        euler.set(rotation?.x ?? 0, rotation?.y ?? 0, rotation?.z ?? 0);
        return euler;
    }
    return new Euler(rotation?.x ?? 0, rotation?.y ?? 0, rotation?.z ?? 0);
};
