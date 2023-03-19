import { SvelteComponentTyped } from "svelte";
import type { AnyClass, MaybeInstance } from './types';
declare class __sveltets_Render<Type> {
    props(): {
        type: Type;
    } & {
        [x: string]: any;
    } & {
        dispose?: boolean | undefined;
    } & {
        ref?: MaybeInstance<Type> | undefined;
    } & {
        attach?: string | ((parent: any, self: MaybeInstance<Type>) => void | (() => void)) | undefined;
    } & (Type extends AnyClass ? {
        args?: any[] | ConstructorParameters<Type> | undefined;
    } : Record<string, unknown>) & (MaybeInstance<Type> extends {
        isCamera: true;
    } ? {
        manual?: boolean | undefined;
        makeDefault?: boolean | undefined;
    } : Record<string, unknown>) & Partial<Omit<MaybeInstance<Type> extends import("type-fest").Primitive ? Record<string, unknown> : MaybeInstance<Type> extends infer T ? { [K in keyof T]?: (MaybeInstance<Type>[K] extends {
        set: (...args: any[]) => any;
    } ? Parameters<MaybeInstance<Type>[K]["set"]> | Parameters<MaybeInstance<Type>[K]["set"]>[0] : MaybeInstance<Type>[K] extends (...args: any) => any ? never : MaybeInstance<Type>[K]) | undefined; } : never, ("type" | "id" | "manual" | "name" | "children" | "parent" | "uuid" | "attach" | `is${string}` | "args" | "makeDefault") | NonNullable<(MaybeInstance<Type> extends infer T_1 ? { [Key in keyof T_1]: MaybeInstance<Type>[Key] extends (...args: any) => any ? Key : never; } : never)[keyof MaybeInstance<Type>]>>>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            ref: MaybeInstance<Type>;
        };
    };
}
export declare type ThreeProps<Type> = ReturnType<__sveltets_Render<Type>['props']>;
export declare type ThreeEvents<Type> = ReturnType<__sveltets_Render<Type>['events']>;
export declare type ThreeSlots<Type> = ReturnType<__sveltets_Render<Type>['slots']>;
export default class Three<Type> extends SvelteComponentTyped<ThreeProps<Type>, ThreeEvents<Type>, ThreeSlots<Type>> {
}
export {};
