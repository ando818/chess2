import type { ConditionalKeys, Primitive } from 'type-fest';
/**
 * We hold a list of prop keys that should be ommited from the object props
 * that are infered by the provided type.
 */
declare type OmittedPropKeys = 'type' | 'args' | 'attach' | 'manual' | 'makeDefault' | 'id' | 'children' | `is${string}` | 'parent' | 'uuid' | 'name';
export declare type AnyClass = new (...args: any) => any;
declare type AnyFn = (...args: any) => any;
/**
 * This type returns an InstanceType if the provided type is a class, otherwise
 * it returns the type itself.
 */
export declare type MaybeInstance<Type extends any> = Type extends AnyClass ? InstanceType<Type> : Type;
declare type AnyProps = Record<string, any>;
declare type BaseProps<Type extends any> = {
    attach?: string | ((parent: any, self: MaybeInstance<Type>) => (() => void) | void);
};
declare type DisposableProps = {
    /**
     * If true, the object will be deeply disposed when the component unmounts.
     */
    dispose?: boolean;
};
declare type ClassProps<Type extends any> = Type extends AnyClass ? {
    args?: any[] | ConstructorParameters<Type>;
} : Record<string, unknown>;
declare type RefProps<Type extends any> = {
    ref?: MaybeInstance<Type>;
};
declare type CameraProps<Type extends any> = MaybeInstance<Type> extends {
    isCamera: true;
} ? {
    /**
     * By default, threlte will update the cameras aspect ratio or frustum
     * when the canvas is resized. If you want to manually control the
     * camera, set this to true.
     * @default true
     */
    manual?: boolean;
    /**
     * Sets the camera as the default camera for the scene.
     * @default false
     */
    makeDefault?: boolean;
} : Record<string, unknown>;
declare type InstanceProps<Type extends any> = Partial<Omit<MaybeInstance<Type> extends Primitive ? Record<string, unknown> : {
    [K in keyof MaybeInstance<Type>]?: MaybeInstance<Type>[K] extends {
        set: (...args: any[]) => any;
    } ? Parameters<MaybeInstance<Type>[K]['set']> | Parameters<MaybeInstance<Type>[K]['set']>[0] : MaybeInstance<Type>[K] extends AnyFn ? never : MaybeInstance<Type>[K];
}, ConditionalKeys<MaybeInstance<Type>, AnyFn> | OmittedPropKeys>>;
export declare type Props<Type extends any> = AnyProps & DisposableProps & RefProps<Type> & BaseProps<Type> & ClassProps<Type> & CameraProps<Type> & InstanceProps<Type>;
export declare type Slots<Type extends any> = {
    default: {
        ref: MaybeInstance<Type>;
    };
};
export declare type Events<Type extends any> = Record<string, unknown>;
export {};
