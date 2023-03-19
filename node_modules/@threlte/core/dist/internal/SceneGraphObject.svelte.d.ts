import { SvelteComponentTyped } from "svelte";
import type { SceneGraphObjectProperties } from '../types/components';
declare const __propDef: {
    props: {
        object: SceneGraphObjectProperties['object'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type SceneGraphObjectProps = typeof __propDef.props;
export declare type SceneGraphObjectEvents = typeof __propDef.events;
export declare type SceneGraphObjectSlots = typeof __propDef.slots;
export default class SceneGraphObject extends SvelteComponentTyped<SceneGraphObjectProps, SceneGraphObjectEvents, SceneGraphObjectSlots> {
}
export {};
