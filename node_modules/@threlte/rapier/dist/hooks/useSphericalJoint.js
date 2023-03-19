import { positionToVector3 } from '../lib/positionToVector3';
import { useJoint } from './useJoint';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useSphericalJoint = (anchorA, anchorB) => {
    return useJoint((rbA, rbB, { world, rapier }) => {
        const params = rapier.JointData.spherical(positionToVector3(anchorA), positionToVector3(anchorB));
        return world.createImpulseJoint(params, rbA, rbB, true);
    });
};
