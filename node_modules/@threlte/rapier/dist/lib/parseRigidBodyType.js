import { RigidBodyType } from '@dimforge/rapier3d-compat';
const rigidBodyTypeMap = {
    dynamic: RigidBodyType.Dynamic,
    fixed: RigidBodyType.Fixed,
    kinematicPosition: RigidBodyType.KinematicPositionBased,
    kinematicVelocity: RigidBodyType.KinematicVelocityBased
};
export const parseRigidBodyType = (type) => {
    return rigidBodyTypeMap[type];
};
