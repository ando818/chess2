import { SvelteComponentTyped } from "svelte";
import { Object3D as ThreeeObject3D } from 'three';
import type { HTMLProperties } from '../../types/components';
declare const __propDef: {
    props: {
        position?: HTMLProperties['position'];
        scale?: HTMLProperties['scale'];
        rotation?: HTMLProperties['rotation'];
        lookAt?: HTMLProperties['lookAt'];
        viewportAware?: boolean | undefined;
        inViewport?: boolean | undefined;
        dispose?: HTMLProperties['dispose'];
        transform?: HTMLProperties['transform'];
        calculatePosition?: ((obj: ThreeeObject3D<import("three").Event>, camera: import("three").Camera, size: {
            width: number;
            height: number;
        }) => [number, number]) | undefined;
        eps?: number | undefined;
        occlude?: boolean | ThreeeObject3D<import("three").Event>[] | undefined;
        zIndexRange?: [number, number] | undefined;
        sprite?: boolean | undefined;
        pointerEvents?: "fill" | "all" | "auto" | "none" | "stroke" | "inherit" | "visible" | "visiblePainted" | "visibleFill" | "visibleStroke" | "painted" | undefined;
        center?: boolean | undefined;
        fullscreen?: boolean | undefined;
        distanceFactor?: HTMLProperties['distanceFactor'];
        as?: keyof HTMLElementTagNameMap | undefined;
        portal?: HTMLProperties['portal'];
        visible?: boolean | undefined;
    };
    events: {
        viewportenter: CustomEvent<ThreeeObject3D<import("three").Event>>;
        viewportleave: CustomEvent<ThreeeObject3D<import("three").Event>>;
        visibilitychange: CustomEvent<boolean>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        threlte: {};
        default: {};
    };
};
export declare type HtmlProps = typeof __propDef.props;
export declare type HtmlEvents = typeof __propDef.events;
export declare type HtmlSlots = typeof __propDef.slots;
export default class Html extends SvelteComponentTyped<HtmlProps, HtmlEvents, HtmlSlots> {
}
export {};
