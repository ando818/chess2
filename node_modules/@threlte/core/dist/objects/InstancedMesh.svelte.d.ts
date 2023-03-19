import { SvelteComponentTyped } from "svelte";
import { InstancedMesh as ThreeInstancedMesh, Object3D } from 'three';
import type { InstancedMeshProperties } from '../types/components';
import type { ThrelteInstance } from '../types/types';
import { type Writable } from 'svelte/store';
declare type InstancedMeshContext = {
    registerInstance: (instance: ThrelteInstance) => void;
    removeInstance: (instance: ThrelteInstance) => void;
    setInstanceMatrix: (instance: ThrelteInstance) => void;
    setInstanceColor: (instance: ThrelteInstance) => void;
    parentObject: Object3D;
};
export declare const useInstancedMesh: (id: string | undefined) => InstancedMeshContext;
declare const __propDef: {
    props: {
        position?: InstancedMeshProperties['position'];
        scale?: InstancedMeshProperties['scale'];
        rotation?: InstancedMeshProperties['rotation'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: InstancedMeshProperties['castShadow'];
        receiveShadow?: InstancedMeshProperties['receiveShadow'];
        renderOrder?: InstancedMeshProperties['renderOrder'];
        visible?: InstancedMeshProperties['visible'];
        userData?: InstancedMeshProperties['userData'];
        dispose?: InstancedMeshProperties['dispose'];
        interactive?: boolean | undefined;
        ignorePointer?: boolean | undefined;
        lookAt?: InstancedMeshProperties['lookAt'];
        geometry: InstancedMeshProperties['geometry'];
        material: InstancedMeshProperties['material'];
        count?: InstancedMeshProperties['count'];
        id?: InstancedMeshProperties['id'];
        instancedMesh?: Writable<ThreeInstancedMesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>> | undefined;
    };
    events: {
        viewportenter: CustomEvent<Object3D<import("three").Event>>;
        viewportleave: CustomEvent<Object3D<import("three").Event>>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type InstancedMeshProps = typeof __propDef.props;
export declare type InstancedMeshEvents = typeof __propDef.events;
export declare type InstancedMeshSlots = typeof __propDef.slots;
export default class InstancedMesh extends SvelteComponentTyped<InstancedMeshProps, InstancedMeshEvents, InstancedMeshSlots> {
    get instancedMesh(): Writable<ThreeInstancedMesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>>;
}
export {};
