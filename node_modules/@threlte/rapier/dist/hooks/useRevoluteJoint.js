import { positionToVector3 } from '../lib/positionToVector3';
import { useJoint } from './useJoint';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useRevoluteJoint = (anchorA, anchorB, axis, limits) => {
    return useJoint((rbA, rbB, { world, rapier }) => {
        const params = rapier.JointData.revolute(positionToVector3(anchorA), positionToVector3(anchorB), positionToVector3(axis).normalize());
        if (limits) {
            params.limitsEnabled = true;
            params.limits = limits;
        }
        return world.createImpulseJoint(params, rbA, rbB, true);
    });
};
