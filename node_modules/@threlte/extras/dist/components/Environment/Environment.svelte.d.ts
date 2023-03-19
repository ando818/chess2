import { SvelteComponentTyped } from "svelte";
import type { EnvironmentProperties } from '../../types/components';
declare const __propDef: {
    props: {
        path?: EnvironmentProperties['path'];
        files: EnvironmentProperties['files'];
        isBackground?: EnvironmentProperties['isBackground'];
        groundProjection?: EnvironmentProperties['groundProjection'];
        format?: EnvironmentProperties['format'];
        encoding?: EnvironmentProperties['encoding'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type EnvironmentProps = typeof __propDef.props;
export declare type EnvironmentEvents = typeof __propDef.events;
export declare type EnvironmentSlots = typeof __propDef.slots;
export default class Environment extends SvelteComponentTyped<EnvironmentProps, EnvironmentEvents, EnvironmentSlots> {
}
export {};
