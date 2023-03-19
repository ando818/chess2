import { SvelteComponentTyped } from "svelte";
import type { ContactShadowProperties } from '../../types/components';
declare const __propDef: {
    props: {
        position?: ContactShadowProperties['position'];
        rotation?: ContactShadowProperties['rotation'];
        lookAt?: ContactShadowProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        castShadow?: ContactShadowProperties['castShadow'];
        receiveShadow?: ContactShadowProperties['receiveShadow'];
        frustumCulled?: ContactShadowProperties['frustumCulled'];
        renderOrder?: ContactShadowProperties['renderOrder'];
        visible?: ContactShadowProperties['visible'];
        opacity?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        blur?: number | undefined;
        far?: number | undefined;
        smooth?: boolean | undefined;
        resolution?: number | undefined;
        frames?: number | undefined;
        scale?: number | [x: number, y: number] | undefined;
        color?: import("three").ColorRepresentation | undefined;
        depthWrite?: boolean | undefined;
        refresh?: (() => void) | undefined;
    };
    events: {
        viewportenter: CustomEvent<import("three").Object3D<import("three").Event>>;
        viewportleave: CustomEvent<import("three").Object3D<import("three").Event>>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ContactShadowsProps = typeof __propDef.props;
export declare type ContactShadowsEvents = typeof __propDef.events;
export declare type ContactShadowsSlots = typeof __propDef.slots;
export default class ContactShadows extends SvelteComponentTyped<ContactShadowsProps, ContactShadowsEvents, ContactShadowsSlots> {
    get refresh(): () => void;
}
export {};
