import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        joint?: import("svelte/store").Writable<import("@dimforge/rapier3d-compat").RevoluteImpulseJoint> | undefined;
        rigidBodyA?: import("svelte/store").Writable<import("@dimforge/rapier3d-compat").RigidBody | undefined> | undefined;
        rigidBodyB?: import("svelte/store").Writable<import("@dimforge/rapier3d-compat").RigidBody | undefined> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            rigidBodyA: import("svelte/store").Writable<import("@dimforge/rapier3d-compat").RigidBody | undefined>;
            rigidBodyB: import("svelte/store").Writable<import("@dimforge/rapier3d-compat").RigidBody | undefined>;
        };
    };
};
export declare type RevoluteJointProps = typeof __propDef.props;
export declare type RevoluteJointEvents = typeof __propDef.events;
export declare type RevoluteJointSlots = typeof __propDef.slots;
export default class RevoluteJoint extends SvelteComponentTyped<RevoluteJointProps, RevoluteJointEvents, RevoluteJointSlots> {
}
export {};
