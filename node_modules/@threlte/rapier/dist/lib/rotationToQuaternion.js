import { Quaternion } from 'three';
import { rotationToEuler } from './rotationToEuler';
export const rotationToQuaternion = (rotation, quaternion) => {
    const euler = rotationToEuler(rotation);
    if (quaternion) {
        quaternion.setFromEuler(euler);
        return quaternion;
    }
    return new Quaternion().setFromEuler(euler);
};
