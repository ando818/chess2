import { RigidBodyType } from '@dimforge/rapier3d-compat';
export declare type RigidBodyTypeString = 'fixed' | 'dynamic' | 'kinematicPosition' | 'kinematicVelocity';
export declare const parseRigidBodyType: (type: RigidBodyTypeString) => RigidBodyType;
