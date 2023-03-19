import type * as THREE from 'three';
import type { SvelteComponentTyped } from 'svelte';
import type { Events, Props, Slots } from './types';
/**
 * T is an abstract component that is used in conjunction with the package
 * '@threlte/preprocess' to render any THREE module in threlte. This proxy is
 * used to display an error message if the preprocessor is not registered.
 */
export declare const T: {
    AnimationUtils: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AnimationUtils>>): SvelteComponentTyped<Props<typeof THREE.AnimationUtils>, Events<typeof THREE.AnimationUtils>, Slots<typeof THREE.AnimationUtils>>;
    };
    MathUtils: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MathUtils>>): SvelteComponentTyped<Props<typeof THREE.MathUtils>, Events<typeof THREE.MathUtils>, Slots<typeof THREE.MathUtils>>;
    };
    WebGLUtils: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLUtils>>): SvelteComponentTyped<Props<typeof THREE.WebGLUtils>, Events<typeof THREE.WebGLUtils>, Slots<typeof THREE.WebGLUtils>>;
    };
    readonly REVISION: {
        new (options: import("svelte").ComponentConstructorOptions<Props<string>>): SvelteComponentTyped<Props<string>, Events<string>, Slots<string>>;
    };
    MOUSE: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MOUSE>>): SvelteComponentTyped<Props<typeof THREE.MOUSE>, Events<typeof THREE.MOUSE>, Slots<typeof THREE.MOUSE>>;
    };
    TOUCH: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.TOUCH>>): SvelteComponentTyped<Props<typeof THREE.TOUCH>, Events<typeof THREE.TOUCH>, Slots<typeof THREE.TOUCH>>;
    };
    CullFace: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CullFace>>): SvelteComponentTyped<Props<typeof THREE.CullFace>, Events<typeof THREE.CullFace>, Slots<typeof THREE.CullFace>>;
    };
    readonly CullFaceNone: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CullFace>>): SvelteComponentTyped<Props<THREE.CullFace>, Events<THREE.CullFace>, Slots<THREE.CullFace>>;
    };
    readonly CullFaceBack: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CullFace>>): SvelteComponentTyped<Props<THREE.CullFace>, Events<THREE.CullFace>, Slots<THREE.CullFace>>;
    };
    readonly CullFaceFront: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CullFace>>): SvelteComponentTyped<Props<THREE.CullFace>, Events<THREE.CullFace>, Slots<THREE.CullFace>>;
    };
    readonly CullFaceFrontBack: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CullFace>>): SvelteComponentTyped<Props<THREE.CullFace>, Events<THREE.CullFace>, Slots<THREE.CullFace>>;
    };
    ShadowMapType: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ShadowMapType>>): SvelteComponentTyped<Props<typeof THREE.ShadowMapType>, Events<typeof THREE.ShadowMapType>, Slots<typeof THREE.ShadowMapType>>;
    };
    readonly BasicShadowMap: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.ShadowMapType>>): SvelteComponentTyped<Props<THREE.ShadowMapType>, Events<THREE.ShadowMapType>, Slots<THREE.ShadowMapType>>;
    };
    readonly PCFShadowMap: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.ShadowMapType>>): SvelteComponentTyped<Props<THREE.ShadowMapType>, Events<THREE.ShadowMapType>, Slots<THREE.ShadowMapType>>;
    };
    readonly PCFSoftShadowMap: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.ShadowMapType>>): SvelteComponentTyped<Props<THREE.ShadowMapType>, Events<THREE.ShadowMapType>, Slots<THREE.ShadowMapType>>;
    };
    readonly VSMShadowMap: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.ShadowMapType>>): SvelteComponentTyped<Props<THREE.ShadowMapType>, Events<THREE.ShadowMapType>, Slots<THREE.ShadowMapType>>;
    };
    Side: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Side>>): SvelteComponentTyped<Props<typeof THREE.Side>, Events<typeof THREE.Side>, Slots<typeof THREE.Side>>;
    };
    readonly FrontSide: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Side>>): SvelteComponentTyped<Props<THREE.Side>, Events<THREE.Side>, Slots<THREE.Side>>;
    };
    readonly BackSide: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Side>>): SvelteComponentTyped<Props<THREE.Side>, Events<THREE.Side>, Slots<THREE.Side>>;
    };
    readonly DoubleSide: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Side>>): SvelteComponentTyped<Props<THREE.Side>, Events<THREE.Side>, Slots<THREE.Side>>;
    };
    Blending: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Blending>>): SvelteComponentTyped<Props<typeof THREE.Blending>, Events<typeof THREE.Blending>, Slots<typeof THREE.Blending>>;
    };
    readonly NoBlending: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Blending>>): SvelteComponentTyped<Props<THREE.Blending>, Events<THREE.Blending>, Slots<THREE.Blending>>;
    };
    readonly NormalBlending: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Blending>>): SvelteComponentTyped<Props<THREE.Blending>, Events<THREE.Blending>, Slots<THREE.Blending>>;
    };
    readonly AdditiveBlending: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Blending>>): SvelteComponentTyped<Props<THREE.Blending>, Events<THREE.Blending>, Slots<THREE.Blending>>;
    };
    readonly SubtractiveBlending: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Blending>>): SvelteComponentTyped<Props<THREE.Blending>, Events<THREE.Blending>, Slots<THREE.Blending>>;
    };
    readonly MultiplyBlending: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Blending>>): SvelteComponentTyped<Props<THREE.Blending>, Events<THREE.Blending>, Slots<THREE.Blending>>;
    };
    readonly CustomBlending: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Blending>>): SvelteComponentTyped<Props<THREE.Blending>, Events<THREE.Blending>, Slots<THREE.Blending>>;
    };
    BlendingEquation: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.BlendingEquation>>): SvelteComponentTyped<Props<typeof THREE.BlendingEquation>, Events<typeof THREE.BlendingEquation>, Slots<typeof THREE.BlendingEquation>>;
    };
    readonly AddEquation: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingEquation>>): SvelteComponentTyped<Props<THREE.BlendingEquation>, Events<THREE.BlendingEquation>, Slots<THREE.BlendingEquation>>;
    };
    readonly SubtractEquation: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingEquation>>): SvelteComponentTyped<Props<THREE.BlendingEquation>, Events<THREE.BlendingEquation>, Slots<THREE.BlendingEquation>>;
    };
    readonly ReverseSubtractEquation: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingEquation>>): SvelteComponentTyped<Props<THREE.BlendingEquation>, Events<THREE.BlendingEquation>, Slots<THREE.BlendingEquation>>;
    };
    readonly MinEquation: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingEquation>>): SvelteComponentTyped<Props<THREE.BlendingEquation>, Events<THREE.BlendingEquation>, Slots<THREE.BlendingEquation>>;
    };
    readonly MaxEquation: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingEquation>>): SvelteComponentTyped<Props<THREE.BlendingEquation>, Events<THREE.BlendingEquation>, Slots<THREE.BlendingEquation>>;
    };
    BlendingDstFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.BlendingDstFactor>>): SvelteComponentTyped<Props<typeof THREE.BlendingDstFactor>, Events<typeof THREE.BlendingDstFactor>, Slots<typeof THREE.BlendingDstFactor>>;
    };
    readonly ZeroFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingDstFactor>>): SvelteComponentTyped<Props<THREE.BlendingDstFactor>, Events<THREE.BlendingDstFactor>, Slots<THREE.BlendingDstFactor>>;
    };
    readonly OneFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingDstFactor>>): SvelteComponentTyped<Props<THREE.BlendingDstFactor>, Events<THREE.BlendingDstFactor>, Slots<THREE.BlendingDstFactor>>;
    };
    readonly SrcColorFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingDstFactor>>): SvelteComponentTyped<Props<THREE.BlendingDstFactor>, Events<THREE.BlendingDstFactor>, Slots<THREE.BlendingDstFactor>>;
    };
    readonly OneMinusSrcColorFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingDstFactor>>): SvelteComponentTyped<Props<THREE.BlendingDstFactor>, Events<THREE.BlendingDstFactor>, Slots<THREE.BlendingDstFactor>>;
    };
    readonly SrcAlphaFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingDstFactor>>): SvelteComponentTyped<Props<THREE.BlendingDstFactor>, Events<THREE.BlendingDstFactor>, Slots<THREE.BlendingDstFactor>>;
    };
    readonly OneMinusSrcAlphaFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingDstFactor>>): SvelteComponentTyped<Props<THREE.BlendingDstFactor>, Events<THREE.BlendingDstFactor>, Slots<THREE.BlendingDstFactor>>;
    };
    readonly DstAlphaFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingDstFactor>>): SvelteComponentTyped<Props<THREE.BlendingDstFactor>, Events<THREE.BlendingDstFactor>, Slots<THREE.BlendingDstFactor>>;
    };
    readonly OneMinusDstAlphaFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingDstFactor>>): SvelteComponentTyped<Props<THREE.BlendingDstFactor>, Events<THREE.BlendingDstFactor>, Slots<THREE.BlendingDstFactor>>;
    };
    readonly DstColorFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingDstFactor>>): SvelteComponentTyped<Props<THREE.BlendingDstFactor>, Events<THREE.BlendingDstFactor>, Slots<THREE.BlendingDstFactor>>;
    };
    readonly OneMinusDstColorFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingDstFactor>>): SvelteComponentTyped<Props<THREE.BlendingDstFactor>, Events<THREE.BlendingDstFactor>, Slots<THREE.BlendingDstFactor>>;
    };
    BlendingSrcFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.BlendingSrcFactor>>): SvelteComponentTyped<Props<typeof THREE.BlendingSrcFactor>, Events<typeof THREE.BlendingSrcFactor>, Slots<typeof THREE.BlendingSrcFactor>>;
    };
    readonly SrcAlphaSaturateFactor: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.BlendingSrcFactor>>): SvelteComponentTyped<Props<THREE.BlendingSrcFactor>, Events<THREE.BlendingSrcFactor>, Slots<THREE.BlendingSrcFactor>>;
    };
    DepthModes: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DepthModes>>): SvelteComponentTyped<Props<typeof THREE.DepthModes>, Events<typeof THREE.DepthModes>, Slots<typeof THREE.DepthModes>>;
    };
    readonly NeverDepth: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.DepthModes>>): SvelteComponentTyped<Props<THREE.DepthModes>, Events<THREE.DepthModes>, Slots<THREE.DepthModes>>;
    };
    readonly AlwaysDepth: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.DepthModes>>): SvelteComponentTyped<Props<THREE.DepthModes>, Events<THREE.DepthModes>, Slots<THREE.DepthModes>>;
    };
    readonly LessDepth: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.DepthModes>>): SvelteComponentTyped<Props<THREE.DepthModes>, Events<THREE.DepthModes>, Slots<THREE.DepthModes>>;
    };
    readonly LessEqualDepth: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.DepthModes>>): SvelteComponentTyped<Props<THREE.DepthModes>, Events<THREE.DepthModes>, Slots<THREE.DepthModes>>;
    };
    readonly EqualDepth: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.DepthModes>>): SvelteComponentTyped<Props<THREE.DepthModes>, Events<THREE.DepthModes>, Slots<THREE.DepthModes>>;
    };
    readonly GreaterEqualDepth: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.DepthModes>>): SvelteComponentTyped<Props<THREE.DepthModes>, Events<THREE.DepthModes>, Slots<THREE.DepthModes>>;
    };
    readonly GreaterDepth: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.DepthModes>>): SvelteComponentTyped<Props<THREE.DepthModes>, Events<THREE.DepthModes>, Slots<THREE.DepthModes>>;
    };
    readonly NotEqualDepth: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.DepthModes>>): SvelteComponentTyped<Props<THREE.DepthModes>, Events<THREE.DepthModes>, Slots<THREE.DepthModes>>;
    };
    Combine: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Combine>>): SvelteComponentTyped<Props<typeof THREE.Combine>, Events<typeof THREE.Combine>, Slots<typeof THREE.Combine>>;
    };
    readonly MultiplyOperation: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Combine>>): SvelteComponentTyped<Props<THREE.Combine>, Events<THREE.Combine>, Slots<THREE.Combine>>;
    };
    readonly MixOperation: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Combine>>): SvelteComponentTyped<Props<THREE.Combine>, Events<THREE.Combine>, Slots<THREE.Combine>>;
    };
    readonly AddOperation: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Combine>>): SvelteComponentTyped<Props<THREE.Combine>, Events<THREE.Combine>, Slots<THREE.Combine>>;
    };
    ToneMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ToneMapping>>): SvelteComponentTyped<Props<typeof THREE.ToneMapping>, Events<typeof THREE.ToneMapping>, Slots<typeof THREE.ToneMapping>>;
    };
    readonly NoToneMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.ToneMapping>>): SvelteComponentTyped<Props<THREE.ToneMapping>, Events<THREE.ToneMapping>, Slots<THREE.ToneMapping>>;
    };
    readonly LinearToneMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.ToneMapping>>): SvelteComponentTyped<Props<THREE.ToneMapping>, Events<THREE.ToneMapping>, Slots<THREE.ToneMapping>>;
    };
    readonly ReinhardToneMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.ToneMapping>>): SvelteComponentTyped<Props<THREE.ToneMapping>, Events<THREE.ToneMapping>, Slots<THREE.ToneMapping>>;
    };
    readonly CineonToneMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.ToneMapping>>): SvelteComponentTyped<Props<THREE.ToneMapping>, Events<THREE.ToneMapping>, Slots<THREE.ToneMapping>>;
    };
    readonly ACESFilmicToneMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.ToneMapping>>): SvelteComponentTyped<Props<THREE.ToneMapping>, Events<THREE.ToneMapping>, Slots<THREE.ToneMapping>>;
    };
    readonly CustomToneMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.ToneMapping>>): SvelteComponentTyped<Props<THREE.ToneMapping>, Events<THREE.ToneMapping>, Slots<THREE.ToneMapping>>;
    };
    Mapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Mapping>>): SvelteComponentTyped<Props<typeof THREE.Mapping>, Events<typeof THREE.Mapping>, Slots<typeof THREE.Mapping>>;
    };
    readonly UVMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Mapping>>): SvelteComponentTyped<Props<THREE.Mapping>, Events<THREE.Mapping>, Slots<THREE.Mapping>>;
    };
    readonly CubeReflectionMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Mapping>>): SvelteComponentTyped<Props<THREE.Mapping>, Events<THREE.Mapping>, Slots<THREE.Mapping>>;
    };
    readonly CubeRefractionMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Mapping>>): SvelteComponentTyped<Props<THREE.Mapping>, Events<THREE.Mapping>, Slots<THREE.Mapping>>;
    };
    readonly EquirectangularReflectionMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Mapping>>): SvelteComponentTyped<Props<THREE.Mapping>, Events<THREE.Mapping>, Slots<THREE.Mapping>>;
    };
    readonly EquirectangularRefractionMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Mapping>>): SvelteComponentTyped<Props<THREE.Mapping>, Events<THREE.Mapping>, Slots<THREE.Mapping>>;
    };
    readonly CubeUVReflectionMapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Mapping>>): SvelteComponentTyped<Props<THREE.Mapping>, Events<THREE.Mapping>, Slots<THREE.Mapping>>;
    };
    Wrapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Wrapping>>): SvelteComponentTyped<Props<typeof THREE.Wrapping>, Events<typeof THREE.Wrapping>, Slots<typeof THREE.Wrapping>>;
    };
    readonly RepeatWrapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Wrapping>>): SvelteComponentTyped<Props<THREE.Wrapping>, Events<THREE.Wrapping>, Slots<THREE.Wrapping>>;
    };
    readonly ClampToEdgeWrapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Wrapping>>): SvelteComponentTyped<Props<THREE.Wrapping>, Events<THREE.Wrapping>, Slots<THREE.Wrapping>>;
    };
    readonly MirroredRepeatWrapping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Wrapping>>): SvelteComponentTyped<Props<THREE.Wrapping>, Events<THREE.Wrapping>, Slots<THREE.Wrapping>>;
    };
    TextureFilter: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.TextureFilter>>): SvelteComponentTyped<Props<typeof THREE.TextureFilter>, Events<typeof THREE.TextureFilter>, Slots<typeof THREE.TextureFilter>>;
    };
    readonly NearestFilter: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureFilter>>): SvelteComponentTyped<Props<THREE.TextureFilter>, Events<THREE.TextureFilter>, Slots<THREE.TextureFilter>>;
    };
    readonly NearestMipmapNearestFilter: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureFilter>>): SvelteComponentTyped<Props<THREE.TextureFilter>, Events<THREE.TextureFilter>, Slots<THREE.TextureFilter>>;
    };
    readonly NearestMipMapNearestFilter: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureFilter>>): SvelteComponentTyped<Props<THREE.TextureFilter>, Events<THREE.TextureFilter>, Slots<THREE.TextureFilter>>;
    };
    readonly NearestMipmapLinearFilter: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureFilter>>): SvelteComponentTyped<Props<THREE.TextureFilter>, Events<THREE.TextureFilter>, Slots<THREE.TextureFilter>>;
    };
    readonly NearestMipMapLinearFilter: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureFilter>>): SvelteComponentTyped<Props<THREE.TextureFilter>, Events<THREE.TextureFilter>, Slots<THREE.TextureFilter>>;
    };
    readonly LinearFilter: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureFilter>>): SvelteComponentTyped<Props<THREE.TextureFilter>, Events<THREE.TextureFilter>, Slots<THREE.TextureFilter>>;
    };
    readonly LinearMipmapNearestFilter: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureFilter>>): SvelteComponentTyped<Props<THREE.TextureFilter>, Events<THREE.TextureFilter>, Slots<THREE.TextureFilter>>;
    };
    readonly LinearMipMapNearestFilter: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureFilter>>): SvelteComponentTyped<Props<THREE.TextureFilter>, Events<THREE.TextureFilter>, Slots<THREE.TextureFilter>>;
    };
    readonly LinearMipmapLinearFilter: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureFilter>>): SvelteComponentTyped<Props<THREE.TextureFilter>, Events<THREE.TextureFilter>, Slots<THREE.TextureFilter>>;
    };
    readonly LinearMipMapLinearFilter: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureFilter>>): SvelteComponentTyped<Props<THREE.TextureFilter>, Events<THREE.TextureFilter>, Slots<THREE.TextureFilter>>;
    };
    TextureDataType: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.TextureDataType>>): SvelteComponentTyped<Props<typeof THREE.TextureDataType>, Events<typeof THREE.TextureDataType>, Slots<typeof THREE.TextureDataType>>;
    };
    readonly UnsignedByteType: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureDataType>>): SvelteComponentTyped<Props<THREE.TextureDataType>, Events<THREE.TextureDataType>, Slots<THREE.TextureDataType>>;
    };
    readonly ByteType: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureDataType>>): SvelteComponentTyped<Props<THREE.TextureDataType>, Events<THREE.TextureDataType>, Slots<THREE.TextureDataType>>;
    };
    readonly ShortType: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureDataType>>): SvelteComponentTyped<Props<THREE.TextureDataType>, Events<THREE.TextureDataType>, Slots<THREE.TextureDataType>>;
    };
    readonly UnsignedShortType: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureDataType>>): SvelteComponentTyped<Props<THREE.TextureDataType>, Events<THREE.TextureDataType>, Slots<THREE.TextureDataType>>;
    };
    readonly IntType: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureDataType>>): SvelteComponentTyped<Props<THREE.TextureDataType>, Events<THREE.TextureDataType>, Slots<THREE.TextureDataType>>;
    };
    readonly UnsignedIntType: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureDataType>>): SvelteComponentTyped<Props<THREE.TextureDataType>, Events<THREE.TextureDataType>, Slots<THREE.TextureDataType>>;
    };
    readonly FloatType: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureDataType>>): SvelteComponentTyped<Props<THREE.TextureDataType>, Events<THREE.TextureDataType>, Slots<THREE.TextureDataType>>;
    };
    readonly HalfFloatType: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureDataType>>): SvelteComponentTyped<Props<THREE.TextureDataType>, Events<THREE.TextureDataType>, Slots<THREE.TextureDataType>>;
    };
    readonly UnsignedShort4444Type: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureDataType>>): SvelteComponentTyped<Props<THREE.TextureDataType>, Events<THREE.TextureDataType>, Slots<THREE.TextureDataType>>;
    };
    readonly UnsignedShort5551Type: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureDataType>>): SvelteComponentTyped<Props<THREE.TextureDataType>, Events<THREE.TextureDataType>, Slots<THREE.TextureDataType>>;
    };
    readonly UnsignedInt248Type: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureDataType>>): SvelteComponentTyped<Props<THREE.TextureDataType>, Events<THREE.TextureDataType>, Slots<THREE.TextureDataType>>;
    };
    PixelFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PixelFormat>>): SvelteComponentTyped<Props<typeof THREE.PixelFormat>, Events<typeof THREE.PixelFormat>, Slots<typeof THREE.PixelFormat>>;
    };
    readonly AlphaFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly RGBFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly RGBAFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly LuminanceFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly LuminanceAlphaFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly DepthFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly DepthStencilFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly RedFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly RedIntegerFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly RGFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly RGIntegerFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly RGBAIntegerFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly _SRGBFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    readonly _SRGBAFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.PixelFormat>>): SvelteComponentTyped<Props<THREE.PixelFormat>, Events<THREE.PixelFormat>, Slots<THREE.PixelFormat>>;
    };
    CompressedPixelFormat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<typeof THREE.CompressedPixelFormat>, Events<typeof THREE.CompressedPixelFormat>, Slots<typeof THREE.CompressedPixelFormat>>;
    };
    readonly RGB_S3TC_DXT1_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_S3TC_DXT1_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_S3TC_DXT3_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_S3TC_DXT5_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGB_PVRTC_4BPPV1_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGB_PVRTC_2BPPV1_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_PVRTC_4BPPV1_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_PVRTC_2BPPV1_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGB_ETC1_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGB_ETC2_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ETC2_EAC_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_4x4_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_5x4_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_5x5_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_6x5_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_6x6_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_8x5_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_8x6_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_8x8_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_10x5_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_10x6_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_10x8_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_10x10_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_12x10_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_ASTC_12x12_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    readonly RGBA_BPTC_Format: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.CompressedPixelFormat>>): SvelteComponentTyped<Props<THREE.CompressedPixelFormat>, Events<THREE.CompressedPixelFormat>, Slots<THREE.CompressedPixelFormat>>;
    };
    AnimationActionLoopStyles: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AnimationActionLoopStyles>>): SvelteComponentTyped<Props<typeof THREE.AnimationActionLoopStyles>, Events<typeof THREE.AnimationActionLoopStyles>, Slots<typeof THREE.AnimationActionLoopStyles>>;
    };
    readonly LoopOnce: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.AnimationActionLoopStyles>>): SvelteComponentTyped<Props<THREE.AnimationActionLoopStyles>, Events<THREE.AnimationActionLoopStyles>, Slots<THREE.AnimationActionLoopStyles>>;
    };
    readonly LoopRepeat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.AnimationActionLoopStyles>>): SvelteComponentTyped<Props<THREE.AnimationActionLoopStyles>, Events<THREE.AnimationActionLoopStyles>, Slots<THREE.AnimationActionLoopStyles>>;
    };
    readonly LoopPingPong: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.AnimationActionLoopStyles>>): SvelteComponentTyped<Props<THREE.AnimationActionLoopStyles>, Events<THREE.AnimationActionLoopStyles>, Slots<THREE.AnimationActionLoopStyles>>;
    };
    InterpolationModes: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.InterpolationModes>>): SvelteComponentTyped<Props<typeof THREE.InterpolationModes>, Events<typeof THREE.InterpolationModes>, Slots<typeof THREE.InterpolationModes>>;
    };
    readonly InterpolateDiscrete: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.InterpolationModes>>): SvelteComponentTyped<Props<THREE.InterpolationModes>, Events<THREE.InterpolationModes>, Slots<THREE.InterpolationModes>>;
    };
    readonly InterpolateLinear: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.InterpolationModes>>): SvelteComponentTyped<Props<THREE.InterpolationModes>, Events<THREE.InterpolationModes>, Slots<THREE.InterpolationModes>>;
    };
    readonly InterpolateSmooth: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.InterpolationModes>>): SvelteComponentTyped<Props<THREE.InterpolationModes>, Events<THREE.InterpolationModes>, Slots<THREE.InterpolationModes>>;
    };
    InterpolationEndingModes: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.InterpolationEndingModes>>): SvelteComponentTyped<Props<typeof THREE.InterpolationEndingModes>, Events<typeof THREE.InterpolationEndingModes>, Slots<typeof THREE.InterpolationEndingModes>>;
    };
    readonly ZeroCurvatureEnding: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.InterpolationEndingModes>>): SvelteComponentTyped<Props<THREE.InterpolationEndingModes>, Events<THREE.InterpolationEndingModes>, Slots<THREE.InterpolationEndingModes>>;
    };
    readonly ZeroSlopeEnding: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.InterpolationEndingModes>>): SvelteComponentTyped<Props<THREE.InterpolationEndingModes>, Events<THREE.InterpolationEndingModes>, Slots<THREE.InterpolationEndingModes>>;
    };
    readonly WrapAroundEnding: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.InterpolationEndingModes>>): SvelteComponentTyped<Props<THREE.InterpolationEndingModes>, Events<THREE.InterpolationEndingModes>, Slots<THREE.InterpolationEndingModes>>;
    };
    AnimationBlendMode: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AnimationBlendMode>>): SvelteComponentTyped<Props<typeof THREE.AnimationBlendMode>, Events<typeof THREE.AnimationBlendMode>, Slots<typeof THREE.AnimationBlendMode>>;
    };
    readonly NormalAnimationBlendMode: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.AnimationBlendMode>>): SvelteComponentTyped<Props<THREE.AnimationBlendMode>, Events<THREE.AnimationBlendMode>, Slots<THREE.AnimationBlendMode>>;
    };
    readonly AdditiveAnimationBlendMode: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.AnimationBlendMode>>): SvelteComponentTyped<Props<THREE.AnimationBlendMode>, Events<THREE.AnimationBlendMode>, Slots<THREE.AnimationBlendMode>>;
    };
    TrianglesDrawModes: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.TrianglesDrawModes>>): SvelteComponentTyped<Props<typeof THREE.TrianglesDrawModes>, Events<typeof THREE.TrianglesDrawModes>, Slots<typeof THREE.TrianglesDrawModes>>;
    };
    readonly TrianglesDrawMode: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TrianglesDrawModes>>): SvelteComponentTyped<Props<THREE.TrianglesDrawModes>, Events<THREE.TrianglesDrawModes>, Slots<THREE.TrianglesDrawModes>>;
    };
    readonly TriangleStripDrawMode: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TrianglesDrawModes>>): SvelteComponentTyped<Props<THREE.TrianglesDrawModes>, Events<THREE.TrianglesDrawModes>, Slots<THREE.TrianglesDrawModes>>;
    };
    readonly TriangleFanDrawMode: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TrianglesDrawModes>>): SvelteComponentTyped<Props<THREE.TrianglesDrawModes>, Events<THREE.TrianglesDrawModes>, Slots<THREE.TrianglesDrawModes>>;
    };
    TextureEncoding: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.TextureEncoding>>): SvelteComponentTyped<Props<typeof THREE.TextureEncoding>, Events<typeof THREE.TextureEncoding>, Slots<typeof THREE.TextureEncoding>>;
    };
    readonly LinearEncoding: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureEncoding>>): SvelteComponentTyped<Props<THREE.TextureEncoding>, Events<THREE.TextureEncoding>, Slots<THREE.TextureEncoding>>;
    };
    readonly sRGBEncoding: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.TextureEncoding>>): SvelteComponentTyped<Props<THREE.TextureEncoding>, Events<THREE.TextureEncoding>, Slots<THREE.TextureEncoding>>;
    };
    DepthPackingStrategies: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DepthPackingStrategies>>): SvelteComponentTyped<Props<typeof THREE.DepthPackingStrategies>, Events<typeof THREE.DepthPackingStrategies>, Slots<typeof THREE.DepthPackingStrategies>>;
    };
    readonly BasicDepthPacking: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.DepthPackingStrategies>>): SvelteComponentTyped<Props<THREE.DepthPackingStrategies>, Events<THREE.DepthPackingStrategies>, Slots<THREE.DepthPackingStrategies>>;
    };
    readonly RGBADepthPacking: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.DepthPackingStrategies>>): SvelteComponentTyped<Props<THREE.DepthPackingStrategies>, Events<THREE.DepthPackingStrategies>, Slots<THREE.DepthPackingStrategies>>;
    };
    NormalMapTypes: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.NormalMapTypes>>): SvelteComponentTyped<Props<typeof THREE.NormalMapTypes>, Events<typeof THREE.NormalMapTypes>, Slots<typeof THREE.NormalMapTypes>>;
    };
    readonly TangentSpaceNormalMap: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.NormalMapTypes>>): SvelteComponentTyped<Props<THREE.NormalMapTypes>, Events<THREE.NormalMapTypes>, Slots<THREE.NormalMapTypes>>;
    };
    readonly ObjectSpaceNormalMap: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.NormalMapTypes>>): SvelteComponentTyped<Props<THREE.NormalMapTypes>, Events<THREE.NormalMapTypes>, Slots<THREE.NormalMapTypes>>;
    };
    StencilOp: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.StencilOp>>): SvelteComponentTyped<Props<typeof THREE.StencilOp>, Events<typeof THREE.StencilOp>, Slots<typeof THREE.StencilOp>>;
    };
    readonly ZeroStencilOp: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilOp>>): SvelteComponentTyped<Props<THREE.StencilOp>, Events<THREE.StencilOp>, Slots<THREE.StencilOp>>;
    };
    readonly KeepStencilOp: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilOp>>): SvelteComponentTyped<Props<THREE.StencilOp>, Events<THREE.StencilOp>, Slots<THREE.StencilOp>>;
    };
    readonly ReplaceStencilOp: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilOp>>): SvelteComponentTyped<Props<THREE.StencilOp>, Events<THREE.StencilOp>, Slots<THREE.StencilOp>>;
    };
    readonly IncrementStencilOp: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilOp>>): SvelteComponentTyped<Props<THREE.StencilOp>, Events<THREE.StencilOp>, Slots<THREE.StencilOp>>;
    };
    readonly DecrementStencilOp: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilOp>>): SvelteComponentTyped<Props<THREE.StencilOp>, Events<THREE.StencilOp>, Slots<THREE.StencilOp>>;
    };
    readonly IncrementWrapStencilOp: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilOp>>): SvelteComponentTyped<Props<THREE.StencilOp>, Events<THREE.StencilOp>, Slots<THREE.StencilOp>>;
    };
    readonly DecrementWrapStencilOp: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilOp>>): SvelteComponentTyped<Props<THREE.StencilOp>, Events<THREE.StencilOp>, Slots<THREE.StencilOp>>;
    };
    readonly InvertStencilOp: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilOp>>): SvelteComponentTyped<Props<THREE.StencilOp>, Events<THREE.StencilOp>, Slots<THREE.StencilOp>>;
    };
    StencilFunc: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.StencilFunc>>): SvelteComponentTyped<Props<typeof THREE.StencilFunc>, Events<typeof THREE.StencilFunc>, Slots<typeof THREE.StencilFunc>>;
    };
    readonly NeverStencilFunc: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilFunc>>): SvelteComponentTyped<Props<THREE.StencilFunc>, Events<THREE.StencilFunc>, Slots<THREE.StencilFunc>>;
    };
    readonly LessStencilFunc: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilFunc>>): SvelteComponentTyped<Props<THREE.StencilFunc>, Events<THREE.StencilFunc>, Slots<THREE.StencilFunc>>;
    };
    readonly EqualStencilFunc: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilFunc>>): SvelteComponentTyped<Props<THREE.StencilFunc>, Events<THREE.StencilFunc>, Slots<THREE.StencilFunc>>;
    };
    readonly LessEqualStencilFunc: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilFunc>>): SvelteComponentTyped<Props<THREE.StencilFunc>, Events<THREE.StencilFunc>, Slots<THREE.StencilFunc>>;
    };
    readonly GreaterStencilFunc: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilFunc>>): SvelteComponentTyped<Props<THREE.StencilFunc>, Events<THREE.StencilFunc>, Slots<THREE.StencilFunc>>;
    };
    readonly NotEqualStencilFunc: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilFunc>>): SvelteComponentTyped<Props<THREE.StencilFunc>, Events<THREE.StencilFunc>, Slots<THREE.StencilFunc>>;
    };
    readonly GreaterEqualStencilFunc: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilFunc>>): SvelteComponentTyped<Props<THREE.StencilFunc>, Events<THREE.StencilFunc>, Slots<THREE.StencilFunc>>;
    };
    readonly AlwaysStencilFunc: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.StencilFunc>>): SvelteComponentTyped<Props<THREE.StencilFunc>, Events<THREE.StencilFunc>, Slots<THREE.StencilFunc>>;
    };
    Usage: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Usage>>): SvelteComponentTyped<Props<typeof THREE.Usage>, Events<typeof THREE.Usage>, Slots<typeof THREE.Usage>>;
    };
    readonly StaticDrawUsage: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Usage>>): SvelteComponentTyped<Props<THREE.Usage>, Events<THREE.Usage>, Slots<THREE.Usage>>;
    };
    readonly DynamicDrawUsage: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Usage>>): SvelteComponentTyped<Props<THREE.Usage>, Events<THREE.Usage>, Slots<THREE.Usage>>;
    };
    readonly StreamDrawUsage: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Usage>>): SvelteComponentTyped<Props<THREE.Usage>, Events<THREE.Usage>, Slots<THREE.Usage>>;
    };
    readonly StaticReadUsage: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Usage>>): SvelteComponentTyped<Props<THREE.Usage>, Events<THREE.Usage>, Slots<THREE.Usage>>;
    };
    readonly DynamicReadUsage: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Usage>>): SvelteComponentTyped<Props<THREE.Usage>, Events<THREE.Usage>, Slots<THREE.Usage>>;
    };
    readonly StreamReadUsage: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Usage>>): SvelteComponentTyped<Props<THREE.Usage>, Events<THREE.Usage>, Slots<THREE.Usage>>;
    };
    readonly StaticCopyUsage: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Usage>>): SvelteComponentTyped<Props<THREE.Usage>, Events<THREE.Usage>, Slots<THREE.Usage>>;
    };
    readonly DynamicCopyUsage: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Usage>>): SvelteComponentTyped<Props<THREE.Usage>, Events<THREE.Usage>, Slots<THREE.Usage>>;
    };
    readonly StreamCopyUsage: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.Usage>>): SvelteComponentTyped<Props<THREE.Usage>, Events<THREE.Usage>, Slots<THREE.Usage>>;
    };
    GLSLVersion: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.GLSLVersion>>): SvelteComponentTyped<Props<typeof THREE.GLSLVersion>, Events<typeof THREE.GLSLVersion>, Slots<typeof THREE.GLSLVersion>>;
    };
    readonly GLSL1: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.GLSLVersion>>): SvelteComponentTyped<Props<THREE.GLSLVersion>, Events<THREE.GLSLVersion>, Slots<THREE.GLSLVersion>>;
    };
    readonly GLSL3: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.GLSLVersion>>): SvelteComponentTyped<Props<THREE.GLSLVersion>, Events<THREE.GLSLVersion>, Slots<THREE.GLSLVersion>>;
    };
    VectorKeyframeTrack: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.VectorKeyframeTrack>>): SvelteComponentTyped<Props<typeof THREE.VectorKeyframeTrack>, Events<typeof THREE.VectorKeyframeTrack>, Slots<typeof THREE.VectorKeyframeTrack>>;
    };
    StringKeyframeTrack: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.StringKeyframeTrack>>): SvelteComponentTyped<Props<typeof THREE.StringKeyframeTrack>, Events<typeof THREE.StringKeyframeTrack>, Slots<typeof THREE.StringKeyframeTrack>>;
    };
    QuaternionKeyframeTrack: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.QuaternionKeyframeTrack>>): SvelteComponentTyped<Props<typeof THREE.QuaternionKeyframeTrack>, Events<typeof THREE.QuaternionKeyframeTrack>, Slots<typeof THREE.QuaternionKeyframeTrack>>;
    };
    NumberKeyframeTrack: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.NumberKeyframeTrack>>): SvelteComponentTyped<Props<typeof THREE.NumberKeyframeTrack>, Events<typeof THREE.NumberKeyframeTrack>, Slots<typeof THREE.NumberKeyframeTrack>>;
    };
    ColorKeyframeTrack: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ColorKeyframeTrack>>): SvelteComponentTyped<Props<typeof THREE.ColorKeyframeTrack>, Events<typeof THREE.ColorKeyframeTrack>, Slots<typeof THREE.ColorKeyframeTrack>>;
    };
    BooleanKeyframeTrack: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.BooleanKeyframeTrack>>): SvelteComponentTyped<Props<typeof THREE.BooleanKeyframeTrack>, Events<typeof THREE.BooleanKeyframeTrack>, Slots<typeof THREE.BooleanKeyframeTrack>>;
    };
    PropertyMixer: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PropertyMixer>>): SvelteComponentTyped<Props<typeof THREE.PropertyMixer>, Events<typeof THREE.PropertyMixer>, Slots<typeof THREE.PropertyMixer>>;
    };
    PropertyBinding: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PropertyBinding>>): SvelteComponentTyped<Props<typeof THREE.PropertyBinding>, Events<typeof THREE.PropertyBinding>, Slots<typeof THREE.PropertyBinding>>;
    };
    KeyframeTrack: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.KeyframeTrack>>): SvelteComponentTyped<Props<typeof THREE.KeyframeTrack>, Events<typeof THREE.KeyframeTrack>, Slots<typeof THREE.KeyframeTrack>>;
    };
    AnimationObjectGroup: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AnimationObjectGroup>>): SvelteComponentTyped<Props<typeof THREE.AnimationObjectGroup>, Events<typeof THREE.AnimationObjectGroup>, Slots<typeof THREE.AnimationObjectGroup>>;
    };
    AnimationMixer: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AnimationMixer>>): SvelteComponentTyped<Props<typeof THREE.AnimationMixer>, Events<typeof THREE.AnimationMixer>, Slots<typeof THREE.AnimationMixer>>;
    };
    AnimationClip: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AnimationClip>>): SvelteComponentTyped<Props<typeof THREE.AnimationClip>, Events<typeof THREE.AnimationClip>, Slots<typeof THREE.AnimationClip>>;
    };
    AnimationAction: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AnimationAction>>): SvelteComponentTyped<Props<typeof THREE.AnimationAction>, Events<typeof THREE.AnimationAction>, Slots<typeof THREE.AnimationAction>>;
    };
    AudioListener: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AudioListener>>): SvelteComponentTyped<Props<typeof THREE.AudioListener>, Events<typeof THREE.AudioListener>, Slots<typeof THREE.AudioListener>>;
    };
    PositionalAudio: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PositionalAudio>>): SvelteComponentTyped<Props<typeof THREE.PositionalAudio>, Events<typeof THREE.PositionalAudio>, Slots<typeof THREE.PositionalAudio>>;
    };
    AudioContext: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AudioContext>>): SvelteComponentTyped<Props<typeof THREE.AudioContext>, Events<typeof THREE.AudioContext>, Slots<typeof THREE.AudioContext>>;
    };
    AudioAnalyser: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AudioAnalyser>>): SvelteComponentTyped<Props<typeof THREE.AudioAnalyser>, Events<typeof THREE.AudioAnalyser>, Slots<typeof THREE.AudioAnalyser>>;
    };
    Audio: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Audio>>): SvelteComponentTyped<Props<typeof THREE.Audio>, Events<typeof THREE.Audio>, Slots<typeof THREE.Audio>>;
    };
    StereoCamera: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.StereoCamera>>): SvelteComponentTyped<Props<typeof THREE.StereoCamera>, Events<typeof THREE.StereoCamera>, Slots<typeof THREE.StereoCamera>>;
    };
    PerspectiveCamera: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PerspectiveCamera>>): SvelteComponentTyped<Props<typeof THREE.PerspectiveCamera>, Events<typeof THREE.PerspectiveCamera>, Slots<typeof THREE.PerspectiveCamera>>;
    };
    OrthographicCamera: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.OrthographicCamera>>): SvelteComponentTyped<Props<typeof THREE.OrthographicCamera>, Events<typeof THREE.OrthographicCamera>, Slots<typeof THREE.OrthographicCamera>>;
    };
    CubeCamera: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CubeCamera>>): SvelteComponentTyped<Props<typeof THREE.CubeCamera>, Events<typeof THREE.CubeCamera>, Slots<typeof THREE.CubeCamera>>;
    };
    ArrayCamera: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ArrayCamera>>): SvelteComponentTyped<Props<typeof THREE.ArrayCamera>, Events<typeof THREE.ArrayCamera>, Slots<typeof THREE.ArrayCamera>>;
    };
    Camera: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Camera>>): SvelteComponentTyped<Props<typeof THREE.Camera>, Events<typeof THREE.Camera>, Slots<typeof THREE.Camera>>;
    };
    Uniform: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Uniform>>): SvelteComponentTyped<Props<typeof THREE.Uniform>, Events<typeof THREE.Uniform>, Slots<typeof THREE.Uniform>>;
    };
    UniformsGroup: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.UniformsGroup>>): SvelteComponentTyped<Props<typeof THREE.UniformsGroup>, Events<typeof THREE.UniformsGroup>, Slots<typeof THREE.UniformsGroup>>;
    };
    InstancedBufferGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.InstancedBufferGeometry>>): SvelteComponentTyped<Props<typeof THREE.InstancedBufferGeometry>, Events<typeof THREE.InstancedBufferGeometry>, Slots<typeof THREE.InstancedBufferGeometry>>;
    };
    BufferGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.BufferGeometry>>): SvelteComponentTyped<Props<typeof THREE.BufferGeometry>, Events<typeof THREE.BufferGeometry>, Slots<typeof THREE.BufferGeometry>>;
    };
    InterleavedBufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.InterleavedBufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.InterleavedBufferAttribute>, Events<typeof THREE.InterleavedBufferAttribute>, Slots<typeof THREE.InterleavedBufferAttribute>>;
    };
    InstancedInterleavedBuffer: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.InstancedInterleavedBuffer>>): SvelteComponentTyped<Props<typeof THREE.InstancedInterleavedBuffer>, Events<typeof THREE.InstancedInterleavedBuffer>, Slots<typeof THREE.InstancedInterleavedBuffer>>;
    };
    InterleavedBuffer: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.InterleavedBuffer>>): SvelteComponentTyped<Props<typeof THREE.InterleavedBuffer>, Events<typeof THREE.InterleavedBuffer>, Slots<typeof THREE.InterleavedBuffer>>;
    };
    BufferGeometryUtils: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.BufferGeometryUtils>>): SvelteComponentTyped<Props<typeof THREE.BufferGeometryUtils>, Events<typeof THREE.BufferGeometryUtils>, Slots<typeof THREE.BufferGeometryUtils>>;
    };
    GeometryUtils: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.GeometryUtils>>): SvelteComponentTyped<Props<typeof THREE.GeometryUtils>, Events<typeof THREE.GeometryUtils>, Slots<typeof THREE.GeometryUtils>>;
    };
    InstancedBufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.InstancedBufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.InstancedBufferAttribute>, Events<typeof THREE.InstancedBufferAttribute>, Slots<typeof THREE.InstancedBufferAttribute>>;
    };
    GLBufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.GLBufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.GLBufferAttribute>, Events<typeof THREE.GLBufferAttribute>, Slots<typeof THREE.GLBufferAttribute>>;
    };
    BufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.BufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.BufferAttribute>, Events<typeof THREE.BufferAttribute>, Slots<typeof THREE.BufferAttribute>>;
    };
    Int8Attribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Int8Attribute>>): SvelteComponentTyped<Props<typeof THREE.Int8Attribute>, Events<typeof THREE.Int8Attribute>, Slots<typeof THREE.Int8Attribute>>;
    };
    Uint8Attribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Uint8Attribute>>): SvelteComponentTyped<Props<typeof THREE.Uint8Attribute>, Events<typeof THREE.Uint8Attribute>, Slots<typeof THREE.Uint8Attribute>>;
    };
    Uint8ClampedAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Uint8ClampedAttribute>>): SvelteComponentTyped<Props<typeof THREE.Uint8ClampedAttribute>, Events<typeof THREE.Uint8ClampedAttribute>, Slots<typeof THREE.Uint8ClampedAttribute>>;
    };
    Int16Attribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Int16Attribute>>): SvelteComponentTyped<Props<typeof THREE.Int16Attribute>, Events<typeof THREE.Int16Attribute>, Slots<typeof THREE.Int16Attribute>>;
    };
    Uint16Attribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Uint16Attribute>>): SvelteComponentTyped<Props<typeof THREE.Uint16Attribute>, Events<typeof THREE.Uint16Attribute>, Slots<typeof THREE.Uint16Attribute>>;
    };
    Int32Attribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Int32Attribute>>): SvelteComponentTyped<Props<typeof THREE.Int32Attribute>, Events<typeof THREE.Int32Attribute>, Slots<typeof THREE.Int32Attribute>>;
    };
    Uint32Attribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Uint32Attribute>>): SvelteComponentTyped<Props<typeof THREE.Uint32Attribute>, Events<typeof THREE.Uint32Attribute>, Slots<typeof THREE.Uint32Attribute>>;
    };
    Float32Attribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Float32Attribute>>): SvelteComponentTyped<Props<typeof THREE.Float32Attribute>, Events<typeof THREE.Float32Attribute>, Slots<typeof THREE.Float32Attribute>>;
    };
    Float64Attribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Float64Attribute>>): SvelteComponentTyped<Props<typeof THREE.Float64Attribute>, Events<typeof THREE.Float64Attribute>, Slots<typeof THREE.Float64Attribute>>;
    };
    Int8BufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Int8BufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.Int8BufferAttribute>, Events<typeof THREE.Int8BufferAttribute>, Slots<typeof THREE.Int8BufferAttribute>>;
    };
    Uint8BufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Uint8BufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.Uint8BufferAttribute>, Events<typeof THREE.Uint8BufferAttribute>, Slots<typeof THREE.Uint8BufferAttribute>>;
    };
    Uint8ClampedBufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Uint8ClampedBufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.Uint8ClampedBufferAttribute>, Events<typeof THREE.Uint8ClampedBufferAttribute>, Slots<typeof THREE.Uint8ClampedBufferAttribute>>;
    };
    Int16BufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Int16BufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.Int16BufferAttribute>, Events<typeof THREE.Int16BufferAttribute>, Slots<typeof THREE.Int16BufferAttribute>>;
    };
    Uint16BufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Uint16BufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.Uint16BufferAttribute>, Events<typeof THREE.Uint16BufferAttribute>, Slots<typeof THREE.Uint16BufferAttribute>>;
    };
    Int32BufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Int32BufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.Int32BufferAttribute>, Events<typeof THREE.Int32BufferAttribute>, Slots<typeof THREE.Int32BufferAttribute>>;
    };
    Uint32BufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Uint32BufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.Uint32BufferAttribute>, Events<typeof THREE.Uint32BufferAttribute>, Slots<typeof THREE.Uint32BufferAttribute>>;
    };
    Float16BufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Float16BufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.Float16BufferAttribute>, Events<typeof THREE.Float16BufferAttribute>, Slots<typeof THREE.Float16BufferAttribute>>;
    };
    Float32BufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Float32BufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.Float32BufferAttribute>, Events<typeof THREE.Float32BufferAttribute>, Slots<typeof THREE.Float32BufferAttribute>>;
    };
    Float64BufferAttribute: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Float64BufferAttribute>>): SvelteComponentTyped<Props<typeof THREE.Float64BufferAttribute>, Events<typeof THREE.Float64BufferAttribute>, Slots<typeof THREE.Float64BufferAttribute>>;
    };
    Object3D: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Object3D>>): SvelteComponentTyped<Props<typeof THREE.Object3D>, Events<typeof THREE.Object3D>, Slots<typeof THREE.Object3D>>;
    };
    Raycaster: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Raycaster>>): SvelteComponentTyped<Props<typeof THREE.Raycaster>, Events<typeof THREE.Raycaster>, Slots<typeof THREE.Raycaster>>;
    };
    Layers: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Layers>>): SvelteComponentTyped<Props<typeof THREE.Layers>, Events<typeof THREE.Layers>, Slots<typeof THREE.Layers>>;
    };
    EventDispatcher: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.EventDispatcher>>): SvelteComponentTyped<Props<typeof THREE.EventDispatcher>, Events<typeof THREE.EventDispatcher>, Slots<typeof THREE.EventDispatcher>>;
    };
    Clock: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Clock>>): SvelteComponentTyped<Props<typeof THREE.Clock>, Events<typeof THREE.Clock>, Slots<typeof THREE.Clock>>;
    };
    ArcCurve: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ArcCurve>>): SvelteComponentTyped<Props<typeof THREE.ArcCurve>, Events<typeof THREE.ArcCurve>, Slots<typeof THREE.ArcCurve>>;
    };
    CurveUtils: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CurveUtils>>): SvelteComponentTyped<Props<typeof THREE.CurveUtils>, Events<typeof THREE.CurveUtils>, Slots<typeof THREE.CurveUtils>>;
    };
    CatmullRomCurve3: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CatmullRomCurve3>>): SvelteComponentTyped<Props<typeof THREE.CatmullRomCurve3>, Events<typeof THREE.CatmullRomCurve3>, Slots<typeof THREE.CatmullRomCurve3>>;
    };
    CubicBezierCurve: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CubicBezierCurve>>): SvelteComponentTyped<Props<typeof THREE.CubicBezierCurve>, Events<typeof THREE.CubicBezierCurve>, Slots<typeof THREE.CubicBezierCurve>>;
    };
    CubicBezierCurve3: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CubicBezierCurve3>>): SvelteComponentTyped<Props<typeof THREE.CubicBezierCurve3>, Events<typeof THREE.CubicBezierCurve3>, Slots<typeof THREE.CubicBezierCurve3>>;
    };
    EllipseCurve: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.EllipseCurve>>): SvelteComponentTyped<Props<typeof THREE.EllipseCurve>, Events<typeof THREE.EllipseCurve>, Slots<typeof THREE.EllipseCurve>>;
    };
    LineCurve: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.LineCurve>>): SvelteComponentTyped<Props<typeof THREE.LineCurve>, Events<typeof THREE.LineCurve>, Slots<typeof THREE.LineCurve>>;
    };
    LineCurve3: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.LineCurve3>>): SvelteComponentTyped<Props<typeof THREE.LineCurve3>, Events<typeof THREE.LineCurve3>, Slots<typeof THREE.LineCurve3>>;
    };
    QuadraticBezierCurve: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.QuadraticBezierCurve>>): SvelteComponentTyped<Props<typeof THREE.QuadraticBezierCurve>, Events<typeof THREE.QuadraticBezierCurve>, Slots<typeof THREE.QuadraticBezierCurve>>;
    };
    QuadraticBezierCurve3: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.QuadraticBezierCurve3>>): SvelteComponentTyped<Props<typeof THREE.QuadraticBezierCurve3>, Events<typeof THREE.QuadraticBezierCurve3>, Slots<typeof THREE.QuadraticBezierCurve3>>;
    };
    SplineCurve: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.SplineCurve>>): SvelteComponentTyped<Props<typeof THREE.SplineCurve>, Events<typeof THREE.SplineCurve>, Slots<typeof THREE.SplineCurve>>;
    };
    Shape: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Shape>>): SvelteComponentTyped<Props<typeof THREE.Shape>, Events<typeof THREE.Shape>, Slots<typeof THREE.Shape>>;
    };
    Path: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Path>>): SvelteComponentTyped<Props<typeof THREE.Path>, Events<typeof THREE.Path>, Slots<typeof THREE.Path>>;
    };
    ShapePath: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ShapePath>>): SvelteComponentTyped<Props<typeof THREE.ShapePath>, Events<typeof THREE.ShapePath>, Slots<typeof THREE.ShapePath>>;
    };
    CurvePath: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CurvePath>>): SvelteComponentTyped<Props<typeof THREE.CurvePath>, Events<typeof THREE.CurvePath>, Slots<typeof THREE.CurvePath>>;
    };
    Curve: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Curve>>): SvelteComponentTyped<Props<typeof THREE.Curve>, Events<typeof THREE.Curve>, Slots<typeof THREE.Curve>>;
    };
    toHalfFloat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.toHalfFloat>>): SvelteComponentTyped<Props<typeof THREE.toHalfFloat>, Events<typeof THREE.toHalfFloat>, Slots<typeof THREE.toHalfFloat>>;
    };
    fromHalfFloat: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.fromHalfFloat>>): SvelteComponentTyped<Props<typeof THREE.fromHalfFloat>, Events<typeof THREE.fromHalfFloat>, Slots<typeof THREE.fromHalfFloat>>;
    };
    Earcut: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Earcut>>): SvelteComponentTyped<Props<typeof THREE.Earcut>, Events<typeof THREE.Earcut>, Slots<typeof THREE.Earcut>>;
    };
    ImageUtils: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ImageUtils>>): SvelteComponentTyped<Props<typeof THREE.ImageUtils>, Events<typeof THREE.ImageUtils>, Slots<typeof THREE.ImageUtils>>;
    };
    ShapeUtils: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ShapeUtils>>): SvelteComponentTyped<Props<typeof THREE.ShapeUtils>, Events<typeof THREE.ShapeUtils>, Slots<typeof THREE.ShapeUtils>>;
    };
    PMREMGenerator: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PMREMGenerator>>): SvelteComponentTyped<Props<typeof THREE.PMREMGenerator>, Events<typeof THREE.PMREMGenerator>, Slots<typeof THREE.PMREMGenerator>>;
    };
    BoxGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.BoxGeometry>>): SvelteComponentTyped<Props<typeof THREE.BoxGeometry>, Events<typeof THREE.BoxGeometry>, Slots<typeof THREE.BoxGeometry>>;
    };
    CapsuleGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CapsuleGeometry>>): SvelteComponentTyped<Props<typeof THREE.CapsuleGeometry>, Events<typeof THREE.CapsuleGeometry>, Slots<typeof THREE.CapsuleGeometry>>;
    };
    CircleGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CircleGeometry>>): SvelteComponentTyped<Props<typeof THREE.CircleGeometry>, Events<typeof THREE.CircleGeometry>, Slots<typeof THREE.CircleGeometry>>;
    };
    ConeGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ConeGeometry>>): SvelteComponentTyped<Props<typeof THREE.ConeGeometry>, Events<typeof THREE.ConeGeometry>, Slots<typeof THREE.ConeGeometry>>;
    };
    CylinderGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CylinderGeometry>>): SvelteComponentTyped<Props<typeof THREE.CylinderGeometry>, Events<typeof THREE.CylinderGeometry>, Slots<typeof THREE.CylinderGeometry>>;
    };
    DodecahedronGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DodecahedronGeometry>>): SvelteComponentTyped<Props<typeof THREE.DodecahedronGeometry>, Events<typeof THREE.DodecahedronGeometry>, Slots<typeof THREE.DodecahedronGeometry>>;
    };
    EdgesGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.EdgesGeometry>>): SvelteComponentTyped<Props<typeof THREE.EdgesGeometry>, Events<typeof THREE.EdgesGeometry>, Slots<typeof THREE.EdgesGeometry>>;
    };
    ExtrudeGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ExtrudeGeometry>>): SvelteComponentTyped<Props<typeof THREE.ExtrudeGeometry>, Events<typeof THREE.ExtrudeGeometry>, Slots<typeof THREE.ExtrudeGeometry>>;
    };
    IcosahedronGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.IcosahedronGeometry>>): SvelteComponentTyped<Props<typeof THREE.IcosahedronGeometry>, Events<typeof THREE.IcosahedronGeometry>, Slots<typeof THREE.IcosahedronGeometry>>;
    };
    LatheGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.LatheGeometry>>): SvelteComponentTyped<Props<typeof THREE.LatheGeometry>, Events<typeof THREE.LatheGeometry>, Slots<typeof THREE.LatheGeometry>>;
    };
    OctahedronGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.OctahedronGeometry>>): SvelteComponentTyped<Props<typeof THREE.OctahedronGeometry>, Events<typeof THREE.OctahedronGeometry>, Slots<typeof THREE.OctahedronGeometry>>;
    };
    PlaneGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PlaneGeometry>>): SvelteComponentTyped<Props<typeof THREE.PlaneGeometry>, Events<typeof THREE.PlaneGeometry>, Slots<typeof THREE.PlaneGeometry>>;
    };
    PolyhedronGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PolyhedronGeometry>>): SvelteComponentTyped<Props<typeof THREE.PolyhedronGeometry>, Events<typeof THREE.PolyhedronGeometry>, Slots<typeof THREE.PolyhedronGeometry>>;
    };
    RingGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.RingGeometry>>): SvelteComponentTyped<Props<typeof THREE.RingGeometry>, Events<typeof THREE.RingGeometry>, Slots<typeof THREE.RingGeometry>>;
    };
    ShapeGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ShapeGeometry>>): SvelteComponentTyped<Props<typeof THREE.ShapeGeometry>, Events<typeof THREE.ShapeGeometry>, Slots<typeof THREE.ShapeGeometry>>;
    };
    SphereGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.SphereGeometry>>): SvelteComponentTyped<Props<typeof THREE.SphereGeometry>, Events<typeof THREE.SphereGeometry>, Slots<typeof THREE.SphereGeometry>>;
    };
    TetrahedronGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.TetrahedronGeometry>>): SvelteComponentTyped<Props<typeof THREE.TetrahedronGeometry>, Events<typeof THREE.TetrahedronGeometry>, Slots<typeof THREE.TetrahedronGeometry>>;
    };
    TorusGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.TorusGeometry>>): SvelteComponentTyped<Props<typeof THREE.TorusGeometry>, Events<typeof THREE.TorusGeometry>, Slots<typeof THREE.TorusGeometry>>;
    };
    TorusKnotGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.TorusKnotGeometry>>): SvelteComponentTyped<Props<typeof THREE.TorusKnotGeometry>, Events<typeof THREE.TorusKnotGeometry>, Slots<typeof THREE.TorusKnotGeometry>>;
    };
    TubeGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.TubeGeometry>>): SvelteComponentTyped<Props<typeof THREE.TubeGeometry>, Events<typeof THREE.TubeGeometry>, Slots<typeof THREE.TubeGeometry>>;
    };
    WireframeGeometry: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WireframeGeometry>>): SvelteComponentTyped<Props<typeof THREE.WireframeGeometry>, Events<typeof THREE.WireframeGeometry>, Slots<typeof THREE.WireframeGeometry>>;
    };
    SpotLightHelper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.SpotLightHelper>>): SvelteComponentTyped<Props<typeof THREE.SpotLightHelper>, Events<typeof THREE.SpotLightHelper>, Slots<typeof THREE.SpotLightHelper>>;
    };
    SkeletonHelper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.SkeletonHelper>>): SvelteComponentTyped<Props<typeof THREE.SkeletonHelper>, Events<typeof THREE.SkeletonHelper>, Slots<typeof THREE.SkeletonHelper>>;
    };
    PointLightHelper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PointLightHelper>>): SvelteComponentTyped<Props<typeof THREE.PointLightHelper>, Events<typeof THREE.PointLightHelper>, Slots<typeof THREE.PointLightHelper>>;
    };
    HemisphereLightHelper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.HemisphereLightHelper>>): SvelteComponentTyped<Props<typeof THREE.HemisphereLightHelper>, Events<typeof THREE.HemisphereLightHelper>, Slots<typeof THREE.HemisphereLightHelper>>;
    };
    GridHelper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.GridHelper>>): SvelteComponentTyped<Props<typeof THREE.GridHelper>, Events<typeof THREE.GridHelper>, Slots<typeof THREE.GridHelper>>;
    };
    PolarGridHelper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PolarGridHelper>>): SvelteComponentTyped<Props<typeof THREE.PolarGridHelper>, Events<typeof THREE.PolarGridHelper>, Slots<typeof THREE.PolarGridHelper>>;
    };
    DirectionalLightHelper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DirectionalLightHelper>>): SvelteComponentTyped<Props<typeof THREE.DirectionalLightHelper>, Events<typeof THREE.DirectionalLightHelper>, Slots<typeof THREE.DirectionalLightHelper>>;
    };
    CameraHelper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CameraHelper>>): SvelteComponentTyped<Props<typeof THREE.CameraHelper>, Events<typeof THREE.CameraHelper>, Slots<typeof THREE.CameraHelper>>;
    };
    BoxHelper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.BoxHelper>>): SvelteComponentTyped<Props<typeof THREE.BoxHelper>, Events<typeof THREE.BoxHelper>, Slots<typeof THREE.BoxHelper>>;
    };
    Box3Helper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Box3Helper>>): SvelteComponentTyped<Props<typeof THREE.Box3Helper>, Events<typeof THREE.Box3Helper>, Slots<typeof THREE.Box3Helper>>;
    };
    PlaneHelper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PlaneHelper>>): SvelteComponentTyped<Props<typeof THREE.PlaneHelper>, Events<typeof THREE.PlaneHelper>, Slots<typeof THREE.PlaneHelper>>;
    };
    ArrowHelper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ArrowHelper>>): SvelteComponentTyped<Props<typeof THREE.ArrowHelper>, Events<typeof THREE.ArrowHelper>, Slots<typeof THREE.ArrowHelper>>;
    };
    AxesHelper: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AxesHelper>>): SvelteComponentTyped<Props<typeof THREE.AxesHelper>, Events<typeof THREE.AxesHelper>, Slots<typeof THREE.AxesHelper>>;
    };
    SpotLightShadow: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.SpotLightShadow>>): SvelteComponentTyped<Props<typeof THREE.SpotLightShadow>, Events<typeof THREE.SpotLightShadow>, Slots<typeof THREE.SpotLightShadow>>;
    };
    SpotLight: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.SpotLight>>): SvelteComponentTyped<Props<typeof THREE.SpotLight>, Events<typeof THREE.SpotLight>, Slots<typeof THREE.SpotLight>>;
    };
    PointLight: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PointLight>>): SvelteComponentTyped<Props<typeof THREE.PointLight>, Events<typeof THREE.PointLight>, Slots<typeof THREE.PointLight>>;
    };
    PointLightShadow: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PointLightShadow>>): SvelteComponentTyped<Props<typeof THREE.PointLightShadow>, Events<typeof THREE.PointLightShadow>, Slots<typeof THREE.PointLightShadow>>;
    };
    RectAreaLight: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.RectAreaLight>>): SvelteComponentTyped<Props<typeof THREE.RectAreaLight>, Events<typeof THREE.RectAreaLight>, Slots<typeof THREE.RectAreaLight>>;
    };
    HemisphereLight: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.HemisphereLight>>): SvelteComponentTyped<Props<typeof THREE.HemisphereLight>, Events<typeof THREE.HemisphereLight>, Slots<typeof THREE.HemisphereLight>>;
    };
    DirectionalLightShadow: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DirectionalLightShadow>>): SvelteComponentTyped<Props<typeof THREE.DirectionalLightShadow>, Events<typeof THREE.DirectionalLightShadow>, Slots<typeof THREE.DirectionalLightShadow>>;
    };
    DirectionalLight: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DirectionalLight>>): SvelteComponentTyped<Props<typeof THREE.DirectionalLight>, Events<typeof THREE.DirectionalLight>, Slots<typeof THREE.DirectionalLight>>;
    };
    AmbientLight: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AmbientLight>>): SvelteComponentTyped<Props<typeof THREE.AmbientLight>, Events<typeof THREE.AmbientLight>, Slots<typeof THREE.AmbientLight>>;
    };
    LightShadow: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.LightShadow>>): SvelteComponentTyped<Props<typeof THREE.LightShadow>, Events<typeof THREE.LightShadow>, Slots<typeof THREE.LightShadow>>;
    };
    Light: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Light>>): SvelteComponentTyped<Props<typeof THREE.Light>, Events<typeof THREE.Light>, Slots<typeof THREE.Light>>;
    };
    AmbientLightProbe: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AmbientLightProbe>>): SvelteComponentTyped<Props<typeof THREE.AmbientLightProbe>, Events<typeof THREE.AmbientLightProbe>, Slots<typeof THREE.AmbientLightProbe>>;
    };
    HemisphereLightProbe: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.HemisphereLightProbe>>): SvelteComponentTyped<Props<typeof THREE.HemisphereLightProbe>, Events<typeof THREE.HemisphereLightProbe>, Slots<typeof THREE.HemisphereLightProbe>>;
    };
    LightProbe: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.LightProbe>>): SvelteComponentTyped<Props<typeof THREE.LightProbe>, Events<typeof THREE.LightProbe>, Slots<typeof THREE.LightProbe>>;
    };
    AnimationLoader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AnimationLoader>>): SvelteComponentTyped<Props<typeof THREE.AnimationLoader>, Events<typeof THREE.AnimationLoader>, Slots<typeof THREE.AnimationLoader>>;
    };
    CompressedTextureLoader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CompressedTextureLoader>>): SvelteComponentTyped<Props<typeof THREE.CompressedTextureLoader>, Events<typeof THREE.CompressedTextureLoader>, Slots<typeof THREE.CompressedTextureLoader>>;
    };
    DataTextureLoader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DataTextureLoader>>): SvelteComponentTyped<Props<typeof THREE.DataTextureLoader>, Events<typeof THREE.DataTextureLoader>, Slots<typeof THREE.DataTextureLoader>>;
    };
    CubeTextureLoader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CubeTextureLoader>>): SvelteComponentTyped<Props<typeof THREE.CubeTextureLoader>, Events<typeof THREE.CubeTextureLoader>, Slots<typeof THREE.CubeTextureLoader>>;
    };
    TextureLoader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.TextureLoader>>): SvelteComponentTyped<Props<typeof THREE.TextureLoader>, Events<typeof THREE.TextureLoader>, Slots<typeof THREE.TextureLoader>>;
    };
    ObjectLoader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ObjectLoader>>): SvelteComponentTyped<Props<typeof THREE.ObjectLoader>, Events<typeof THREE.ObjectLoader>, Slots<typeof THREE.ObjectLoader>>;
    };
    MaterialLoader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MaterialLoader>>): SvelteComponentTyped<Props<typeof THREE.MaterialLoader>, Events<typeof THREE.MaterialLoader>, Slots<typeof THREE.MaterialLoader>>;
    };
    BufferGeometryLoader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.BufferGeometryLoader>>): SvelteComponentTyped<Props<typeof THREE.BufferGeometryLoader>, Events<typeof THREE.BufferGeometryLoader>, Slots<typeof THREE.BufferGeometryLoader>>;
    };
    readonly DefaultLoadingManager: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.LoadingManager>>): SvelteComponentTyped<Props<THREE.LoadingManager>, Events<THREE.LoadingManager>, Slots<THREE.LoadingManager>>;
    };
    LoadingManager: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.LoadingManager>>): SvelteComponentTyped<Props<typeof THREE.LoadingManager>, Events<typeof THREE.LoadingManager>, Slots<typeof THREE.LoadingManager>>;
    };
    ImageLoader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ImageLoader>>): SvelteComponentTyped<Props<typeof THREE.ImageLoader>, Events<typeof THREE.ImageLoader>, Slots<typeof THREE.ImageLoader>>;
    };
    ImageBitmapLoader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ImageBitmapLoader>>): SvelteComponentTyped<Props<typeof THREE.ImageBitmapLoader>, Events<typeof THREE.ImageBitmapLoader>, Slots<typeof THREE.ImageBitmapLoader>>;
    };
    FileLoader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.FileLoader>>): SvelteComponentTyped<Props<typeof THREE.FileLoader>, Events<typeof THREE.FileLoader>, Slots<typeof THREE.FileLoader>>;
    };
    Loader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Loader>>): SvelteComponentTyped<Props<typeof THREE.Loader>, Events<typeof THREE.Loader>, Slots<typeof THREE.Loader>>;
    };
    readonly LoaderUtils: {
        new (options: import("svelte").ComponentConstructorOptions<Props<THREE.LoaderUtils>>): SvelteComponentTyped<Props<THREE.LoaderUtils>, Events<THREE.LoaderUtils>, Slots<THREE.LoaderUtils>>;
    };
    Cache: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Cache>>): SvelteComponentTyped<Props<typeof THREE.Cache>, Events<typeof THREE.Cache>, Slots<typeof THREE.Cache>>;
    };
    AudioLoader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.AudioLoader>>): SvelteComponentTyped<Props<typeof THREE.AudioLoader>, Events<typeof THREE.AudioLoader>, Slots<typeof THREE.AudioLoader>>;
    };
    ShadowMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ShadowMaterial>>): SvelteComponentTyped<Props<typeof THREE.ShadowMaterial>, Events<typeof THREE.ShadowMaterial>, Slots<typeof THREE.ShadowMaterial>>;
    };
    SpriteMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.SpriteMaterial>>): SvelteComponentTyped<Props<typeof THREE.SpriteMaterial>, Events<typeof THREE.SpriteMaterial>, Slots<typeof THREE.SpriteMaterial>>;
    };
    RawShaderMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.RawShaderMaterial>>): SvelteComponentTyped<Props<typeof THREE.RawShaderMaterial>, Events<typeof THREE.RawShaderMaterial>, Slots<typeof THREE.RawShaderMaterial>>;
    };
    ShaderMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.ShaderMaterial>>): SvelteComponentTyped<Props<typeof THREE.ShaderMaterial>, Events<typeof THREE.ShaderMaterial>, Slots<typeof THREE.ShaderMaterial>>;
    };
    PointsMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.PointsMaterial>>): SvelteComponentTyped<Props<typeof THREE.PointsMaterial>, Events<typeof THREE.PointsMaterial>, Slots<typeof THREE.PointsMaterial>>;
    };
    MeshPhysicalMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MeshPhysicalMaterial>>): SvelteComponentTyped<Props<typeof THREE.MeshPhysicalMaterial>, Events<typeof THREE.MeshPhysicalMaterial>, Slots<typeof THREE.MeshPhysicalMaterial>>;
    };
    MeshStandardMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MeshStandardMaterial>>): SvelteComponentTyped<Props<typeof THREE.MeshStandardMaterial>, Events<typeof THREE.MeshStandardMaterial>, Slots<typeof THREE.MeshStandardMaterial>>;
    };
    MeshPhongMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MeshPhongMaterial>>): SvelteComponentTyped<Props<typeof THREE.MeshPhongMaterial>, Events<typeof THREE.MeshPhongMaterial>, Slots<typeof THREE.MeshPhongMaterial>>;
    };
    MeshToonMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MeshToonMaterial>>): SvelteComponentTyped<Props<typeof THREE.MeshToonMaterial>, Events<typeof THREE.MeshToonMaterial>, Slots<typeof THREE.MeshToonMaterial>>;
    };
    MeshNormalMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MeshNormalMaterial>>): SvelteComponentTyped<Props<typeof THREE.MeshNormalMaterial>, Events<typeof THREE.MeshNormalMaterial>, Slots<typeof THREE.MeshNormalMaterial>>;
    };
    MeshLambertMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MeshLambertMaterial>>): SvelteComponentTyped<Props<typeof THREE.MeshLambertMaterial>, Events<typeof THREE.MeshLambertMaterial>, Slots<typeof THREE.MeshLambertMaterial>>;
    };
    MeshDepthMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MeshDepthMaterial>>): SvelteComponentTyped<Props<typeof THREE.MeshDepthMaterial>, Events<typeof THREE.MeshDepthMaterial>, Slots<typeof THREE.MeshDepthMaterial>>;
    };
    MeshDistanceMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MeshDistanceMaterial>>): SvelteComponentTyped<Props<typeof THREE.MeshDistanceMaterial>, Events<typeof THREE.MeshDistanceMaterial>, Slots<typeof THREE.MeshDistanceMaterial>>;
    };
    MeshBasicMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MeshBasicMaterial>>): SvelteComponentTyped<Props<typeof THREE.MeshBasicMaterial>, Events<typeof THREE.MeshBasicMaterial>, Slots<typeof THREE.MeshBasicMaterial>>;
    };
    MeshMatcapMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.MeshMatcapMaterial>>): SvelteComponentTyped<Props<typeof THREE.MeshMatcapMaterial>, Events<typeof THREE.MeshMatcapMaterial>, Slots<typeof THREE.MeshMatcapMaterial>>;
    };
    LineDashedMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.LineDashedMaterial>>): SvelteComponentTyped<Props<typeof THREE.LineDashedMaterial>, Events<typeof THREE.LineDashedMaterial>, Slots<typeof THREE.LineDashedMaterial>>;
    };
    LineBasicMaterial: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.LineBasicMaterial>>): SvelteComponentTyped<Props<typeof THREE.LineBasicMaterial>, Events<typeof THREE.LineBasicMaterial>, Slots<typeof THREE.LineBasicMaterial>>;
    };
    Material: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Material>>): SvelteComponentTyped<Props<typeof THREE.Material>, Events<typeof THREE.Material>, Slots<typeof THREE.Material>>;
    };
    QuaternionLinearInterpolant: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.QuaternionLinearInterpolant>>): SvelteComponentTyped<Props<typeof THREE.QuaternionLinearInterpolant>, Events<typeof THREE.QuaternionLinearInterpolant>, Slots<typeof THREE.QuaternionLinearInterpolant>>;
    };
    LinearInterpolant: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.LinearInterpolant>>): SvelteComponentTyped<Props<typeof THREE.LinearInterpolant>, Events<typeof THREE.LinearInterpolant>, Slots<typeof THREE.LinearInterpolant>>;
    };
    DiscreteInterpolant: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DiscreteInterpolant>>): SvelteComponentTyped<Props<typeof THREE.DiscreteInterpolant>, Events<typeof THREE.DiscreteInterpolant>, Slots<typeof THREE.DiscreteInterpolant>>;
    };
    CubicInterpolant: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CubicInterpolant>>): SvelteComponentTyped<Props<typeof THREE.CubicInterpolant>, Events<typeof THREE.CubicInterpolant>, Slots<typeof THREE.CubicInterpolant>>;
    };
    Interpolant: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Interpolant>>): SvelteComponentTyped<Props<typeof THREE.Interpolant>, Events<typeof THREE.Interpolant>, Slots<typeof THREE.Interpolant>>;
    };
    Triangle: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Triangle>>): SvelteComponentTyped<Props<typeof THREE.Triangle>, Events<typeof THREE.Triangle>, Slots<typeof THREE.Triangle>>;
    };
    Spherical: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Spherical>>): SvelteComponentTyped<Props<typeof THREE.Spherical>, Events<typeof THREE.Spherical>, Slots<typeof THREE.Spherical>>;
    };
    Cylindrical: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Cylindrical>>): SvelteComponentTyped<Props<typeof THREE.Cylindrical>, Events<typeof THREE.Cylindrical>, Slots<typeof THREE.Cylindrical>>;
    };
    Plane: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Plane>>): SvelteComponentTyped<Props<typeof THREE.Plane>, Events<typeof THREE.Plane>, Slots<typeof THREE.Plane>>;
    };
    Frustum: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Frustum>>): SvelteComponentTyped<Props<typeof THREE.Frustum>, Events<typeof THREE.Frustum>, Slots<typeof THREE.Frustum>>;
    };
    Sphere: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Sphere>>): SvelteComponentTyped<Props<typeof THREE.Sphere>, Events<typeof THREE.Sphere>, Slots<typeof THREE.Sphere>>;
    };
    Ray: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Ray>>): SvelteComponentTyped<Props<typeof THREE.Ray>, Events<typeof THREE.Ray>, Slots<typeof THREE.Ray>>;
    };
    Matrix4: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Matrix4>>): SvelteComponentTyped<Props<typeof THREE.Matrix4>, Events<typeof THREE.Matrix4>, Slots<typeof THREE.Matrix4>>;
    };
    Matrix3: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Matrix3>>): SvelteComponentTyped<Props<typeof THREE.Matrix3>, Events<typeof THREE.Matrix3>, Slots<typeof THREE.Matrix3>>;
    };
    Box3: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Box3>>): SvelteComponentTyped<Props<typeof THREE.Box3>, Events<typeof THREE.Box3>, Slots<typeof THREE.Box3>>;
    };
    Box2: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Box2>>): SvelteComponentTyped<Props<typeof THREE.Box2>, Events<typeof THREE.Box2>, Slots<typeof THREE.Box2>>;
    };
    Line3: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Line3>>): SvelteComponentTyped<Props<typeof THREE.Line3>, Events<typeof THREE.Line3>, Slots<typeof THREE.Line3>>;
    };
    Euler: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Euler>>): SvelteComponentTyped<Props<typeof THREE.Euler>, Events<typeof THREE.Euler>, Slots<typeof THREE.Euler>>;
    };
    Vector4: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Vector4>>): SvelteComponentTyped<Props<typeof THREE.Vector4>, Events<typeof THREE.Vector4>, Slots<typeof THREE.Vector4>>;
    };
    Vector3: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Vector3>>): SvelteComponentTyped<Props<typeof THREE.Vector3>, Events<typeof THREE.Vector3>, Slots<typeof THREE.Vector3>>;
    };
    Vector2: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Vector2>>): SvelteComponentTyped<Props<typeof THREE.Vector2>, Events<typeof THREE.Vector2>, Slots<typeof THREE.Vector2>>;
    };
    Quaternion: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Quaternion>>): SvelteComponentTyped<Props<typeof THREE.Quaternion>, Events<typeof THREE.Quaternion>, Slots<typeof THREE.Quaternion>>;
    };
    SRGBToLinear: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.SRGBToLinear>>): SvelteComponentTyped<Props<typeof THREE.SRGBToLinear>, Events<typeof THREE.SRGBToLinear>, Slots<typeof THREE.SRGBToLinear>>;
    };
    Color: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Color>>): SvelteComponentTyped<Props<typeof THREE.Color>, Events<typeof THREE.Color>, Slots<typeof THREE.Color>>;
    };
    SphericalHarmonics3: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.SphericalHarmonics3>>): SvelteComponentTyped<Props<typeof THREE.SphericalHarmonics3>, Events<typeof THREE.SphericalHarmonics3>, Slots<typeof THREE.SphericalHarmonics3>>;
    };
    Sprite: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Sprite>>): SvelteComponentTyped<Props<typeof THREE.Sprite>, Events<typeof THREE.Sprite>, Slots<typeof THREE.Sprite>>;
    };
    LOD: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.LOD>>): SvelteComponentTyped<Props<typeof THREE.LOD>, Events<typeof THREE.LOD>, Slots<typeof THREE.LOD>>;
    };
    InstancedMesh: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.InstancedMesh>>): SvelteComponentTyped<Props<typeof THREE.InstancedMesh>, Events<typeof THREE.InstancedMesh>, Slots<typeof THREE.InstancedMesh>>;
    };
    SkinnedMesh: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.SkinnedMesh>>): SvelteComponentTyped<Props<typeof THREE.SkinnedMesh>, Events<typeof THREE.SkinnedMesh>, Slots<typeof THREE.SkinnedMesh>>;
    };
    Skeleton: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Skeleton>>): SvelteComponentTyped<Props<typeof THREE.Skeleton>, Events<typeof THREE.Skeleton>, Slots<typeof THREE.Skeleton>>;
    };
    Bone: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Bone>>): SvelteComponentTyped<Props<typeof THREE.Bone>, Events<typeof THREE.Bone>, Slots<typeof THREE.Bone>>;
    };
    Mesh: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Mesh>>): SvelteComponentTyped<Props<typeof THREE.Mesh>, Events<typeof THREE.Mesh>, Slots<typeof THREE.Mesh>>;
    };
    readonly LineStrip: {
        new (options: import("svelte").ComponentConstructorOptions<Props<number>>): SvelteComponentTyped<Props<number>, Events<number>, Slots<number>>;
    };
    readonly LinePieces: {
        new (options: import("svelte").ComponentConstructorOptions<Props<number>>): SvelteComponentTyped<Props<number>, Events<number>, Slots<number>>;
    };
    LineSegments: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.LineSegments>>): SvelteComponentTyped<Props<typeof THREE.LineSegments>, Events<typeof THREE.LineSegments>, Slots<typeof THREE.LineSegments>>;
    };
    LineLoop: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.LineLoop>>): SvelteComponentTyped<Props<typeof THREE.LineLoop>, Events<typeof THREE.LineLoop>, Slots<typeof THREE.LineLoop>>;
    };
    Line: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Line>>): SvelteComponentTyped<Props<typeof THREE.Line>, Events<typeof THREE.Line>, Slots<typeof THREE.Line>>;
    };
    Points: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Points>>): SvelteComponentTyped<Props<typeof THREE.Points>, Events<typeof THREE.Points>, Slots<typeof THREE.Points>>;
    };
    Group: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Group>>): SvelteComponentTyped<Props<typeof THREE.Group>, Events<typeof THREE.Group>, Slots<typeof THREE.Group>>;
    };
    WebGLMultisampleRenderTarget: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLMultisampleRenderTarget>>): SvelteComponentTyped<Props<typeof THREE.WebGLMultisampleRenderTarget>, Events<typeof THREE.WebGLMultisampleRenderTarget>, Slots<typeof THREE.WebGLMultisampleRenderTarget>>;
    };
    WebGLCubeRenderTarget: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLCubeRenderTarget>>): SvelteComponentTyped<Props<typeof THREE.WebGLCubeRenderTarget>, Events<typeof THREE.WebGLCubeRenderTarget>, Slots<typeof THREE.WebGLCubeRenderTarget>>;
    };
    WebGLMultipleRenderTargets: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLMultipleRenderTargets>>): SvelteComponentTyped<Props<typeof THREE.WebGLMultipleRenderTargets>, Events<typeof THREE.WebGLMultipleRenderTargets>, Slots<typeof THREE.WebGLMultipleRenderTargets>>;
    };
    WebGLRenderTarget: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLRenderTarget>>): SvelteComponentTyped<Props<typeof THREE.WebGLRenderTarget>, Events<typeof THREE.WebGLRenderTarget>, Slots<typeof THREE.WebGLRenderTarget>>;
    };
    WebGLRenderer: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLRenderer>>): SvelteComponentTyped<Props<typeof THREE.WebGLRenderer>, Events<typeof THREE.WebGLRenderer>, Slots<typeof THREE.WebGLRenderer>>;
    };
    WebGL1Renderer: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGL1Renderer>>): SvelteComponentTyped<Props<typeof THREE.WebGL1Renderer>, Events<typeof THREE.WebGL1Renderer>, Slots<typeof THREE.WebGL1Renderer>>;
    };
    WebGL3DRenderTarget: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGL3DRenderTarget>>): SvelteComponentTyped<Props<typeof THREE.WebGL3DRenderTarget>, Events<typeof THREE.WebGL3DRenderTarget>, Slots<typeof THREE.WebGL3DRenderTarget>>;
    };
    WebGLArrayRenderTarget: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLArrayRenderTarget>>): SvelteComponentTyped<Props<typeof THREE.WebGLArrayRenderTarget>, Events<typeof THREE.WebGLArrayRenderTarget>, Slots<typeof THREE.WebGLArrayRenderTarget>>;
    };
    ShaderLib: {
        new (options: import("svelte").ComponentConstructorOptions<Props<{
            [name: string]: THREE.Shader;
            basic: THREE.Shader;
            lambert: THREE.Shader;
            phong: THREE.Shader;
            standard: THREE.Shader;
            matcap: THREE.Shader;
            points: THREE.Shader;
            dashed: THREE.Shader;
            depth: THREE.Shader;
            normal: THREE.Shader;
            sprite: THREE.Shader;
            background: THREE.Shader;
            cube: THREE.Shader;
            equirect: THREE.Shader;
            distanceRGBA: THREE.Shader;
            shadow: THREE.Shader;
            physical: THREE.Shader;
        }>>): SvelteComponentTyped<Props<{
            [name: string]: THREE.Shader;
            basic: THREE.Shader;
            lambert: THREE.Shader;
            phong: THREE.Shader;
            standard: THREE.Shader;
            matcap: THREE.Shader;
            points: THREE.Shader;
            dashed: THREE.Shader;
            depth: THREE.Shader;
            normal: THREE.Shader;
            sprite: THREE.Shader;
            background: THREE.Shader;
            cube: THREE.Shader;
            equirect: THREE.Shader;
            distanceRGBA: THREE.Shader;
            shadow: THREE.Shader;
            physical: THREE.Shader;
        }>, Events<{
            [name: string]: THREE.Shader;
            basic: THREE.Shader;
            lambert: THREE.Shader;
            phong: THREE.Shader;
            standard: THREE.Shader;
            matcap: THREE.Shader;
            points: THREE.Shader;
            dashed: THREE.Shader;
            depth: THREE.Shader;
            normal: THREE.Shader;
            sprite: THREE.Shader;
            background: THREE.Shader;
            cube: THREE.Shader;
            equirect: THREE.Shader;
            distanceRGBA: THREE.Shader;
            shadow: THREE.Shader;
            physical: THREE.Shader;
        }>, Slots<{
            [name: string]: THREE.Shader;
            basic: THREE.Shader;
            lambert: THREE.Shader;
            phong: THREE.Shader;
            standard: THREE.Shader;
            matcap: THREE.Shader;
            points: THREE.Shader;
            dashed: THREE.Shader;
            depth: THREE.Shader;
            normal: THREE.Shader;
            sprite: THREE.Shader;
            background: THREE.Shader;
            cube: THREE.Shader;
            equirect: THREE.Shader;
            distanceRGBA: THREE.Shader;
            shadow: THREE.Shader;
            physical: THREE.Shader;
        }>>;
    };
    UniformsLib: {
        new (options: import("svelte").ComponentConstructorOptions<Props<{
            common: {
                diffuse: THREE.IUniform<any>;
                opacity: THREE.IUniform<any>;
                map: THREE.IUniform<any>;
                uvTransform: THREE.IUniform<any>;
                uv2Transform: THREE.IUniform<any>;
                alphaMap: THREE.IUniform<any>;
            };
            specularmap: {
                specularMap: THREE.IUniform<any>;
            };
            envmap: {
                envMap: THREE.IUniform<any>;
                flipEnvMap: THREE.IUniform<any>;
                reflectivity: THREE.IUniform<any>;
                refractionRatio: THREE.IUniform<any>;
                maxMipLevel: THREE.IUniform<any>;
            };
            aomap: {
                aoMap: THREE.IUniform<any>;
                aoMapIntensity: THREE.IUniform<any>;
            };
            lightmap: {
                lightMap: THREE.IUniform<any>;
                lightMapIntensity: THREE.IUniform<any>;
            };
            emissivemap: {
                emissiveMap: THREE.IUniform<any>;
            };
            bumpmap: {
                bumpMap: THREE.IUniform<any>;
                bumpScale: THREE.IUniform<any>;
            };
            normalmap: {
                normalMap: THREE.IUniform<any>;
                normalScale: THREE.IUniform<any>;
            };
            displacementmap: {
                displacementMap: THREE.IUniform<any>;
                displacementScale: THREE.IUniform<any>;
                displacementBias: THREE.IUniform<any>;
            };
            roughnessmap: {
                roughnessMap: THREE.IUniform<any>;
            };
            metalnessmap: {
                metalnessMap: THREE.IUniform<any>;
            };
            gradientmap: {
                gradientMap: THREE.IUniform<any>;
            };
            fog: {
                fogDensity: THREE.IUniform<any>;
                fogNear: THREE.IUniform<any>;
                fogFar: THREE.IUniform<any>;
                fogColor: THREE.IUniform<any>;
            };
            lights: {
                ambientLightColor: THREE.IUniform<any>;
                directionalLights: {
                    value: any[];
                    properties: {
                        direction: {};
                        color: {};
                    };
                };
                directionalLightShadows: {
                    value: any[];
                    properties: {
                        shadowBias: {};
                        shadowNormalBias: {};
                        shadowRadius: {};
                        shadowMapSize: {};
                    };
                };
                directionalShadowMap: THREE.IUniform<any>;
                directionalShadowMatrix: THREE.IUniform<any>;
                spotLights: {
                    value: any[];
                    properties: {
                        color: {};
                        position: {};
                        direction: {};
                        distance: {};
                        coneCos: {};
                        penumbraCos: {};
                        decay: {};
                    };
                };
                spotLightShadows: {
                    value: any[];
                    properties: {
                        shadowBias: {};
                        shadowNormalBias: {};
                        shadowRadius: {};
                        shadowMapSize: {};
                    };
                };
                spotShadowMap: THREE.IUniform<any>;
                spotShadowMatrix: THREE.IUniform<any>;
                pointLights: {
                    value: any[];
                    properties: {
                        color: {};
                        position: {};
                        decay: {};
                        distance: {};
                    };
                };
                pointLightShadows: {
                    value: any[];
                    properties: {
                        shadowBias: {};
                        shadowNormalBias: {};
                        shadowRadius: {};
                        shadowMapSize: {};
                    };
                };
                pointShadowMap: THREE.IUniform<any>;
                pointShadowMatrix: THREE.IUniform<any>;
                hemisphereLights: {
                    value: any[];
                    properties: {
                        direction: {};
                        skycolor: {};
                        groundColor: {};
                    };
                };
                rectAreaLights: {
                    value: any[];
                    properties: {
                        color: {};
                        position: {};
                        width: {};
                        height: {};
                    };
                };
            };
            points: {
                diffuse: THREE.IUniform<any>;
                opacity: THREE.IUniform<any>;
                size: THREE.IUniform<any>;
                scale: THREE.IUniform<any>;
                map: THREE.IUniform<any>;
                uvTransform: THREE.IUniform<any>;
            };
        }>>): SvelteComponentTyped<Props<{
            common: {
                diffuse: THREE.IUniform<any>;
                opacity: THREE.IUniform<any>;
                map: THREE.IUniform<any>;
                uvTransform: THREE.IUniform<any>;
                uv2Transform: THREE.IUniform<any>;
                alphaMap: THREE.IUniform<any>;
            };
            specularmap: {
                specularMap: THREE.IUniform<any>;
            };
            envmap: {
                envMap: THREE.IUniform<any>;
                flipEnvMap: THREE.IUniform<any>;
                reflectivity: THREE.IUniform<any>;
                refractionRatio: THREE.IUniform<any>;
                maxMipLevel: THREE.IUniform<any>;
            };
            aomap: {
                aoMap: THREE.IUniform<any>;
                aoMapIntensity: THREE.IUniform<any>;
            };
            lightmap: {
                lightMap: THREE.IUniform<any>;
                lightMapIntensity: THREE.IUniform<any>;
            };
            emissivemap: {
                emissiveMap: THREE.IUniform<any>;
            };
            bumpmap: {
                bumpMap: THREE.IUniform<any>;
                bumpScale: THREE.IUniform<any>;
            };
            normalmap: {
                normalMap: THREE.IUniform<any>;
                normalScale: THREE.IUniform<any>;
            };
            displacementmap: {
                displacementMap: THREE.IUniform<any>;
                displacementScale: THREE.IUniform<any>;
                displacementBias: THREE.IUniform<any>;
            };
            roughnessmap: {
                roughnessMap: THREE.IUniform<any>;
            };
            metalnessmap: {
                metalnessMap: THREE.IUniform<any>;
            };
            gradientmap: {
                gradientMap: THREE.IUniform<any>;
            };
            fog: {
                fogDensity: THREE.IUniform<any>;
                fogNear: THREE.IUniform<any>;
                fogFar: THREE.IUniform<any>;
                fogColor: THREE.IUniform<any>;
            };
            lights: {
                ambientLightColor: THREE.IUniform<any>;
                directionalLights: {
                    value: any[];
                    properties: {
                        direction: {};
                        color: {};
                    };
                };
                directionalLightShadows: {
                    value: any[];
                    properties: {
                        shadowBias: {};
                        shadowNormalBias: {};
                        shadowRadius: {};
                        shadowMapSize: {};
                    };
                };
                directionalShadowMap: THREE.IUniform<any>;
                directionalShadowMatrix: THREE.IUniform<any>;
                spotLights: {
                    value: any[];
                    properties: {
                        color: {};
                        position: {};
                        direction: {};
                        distance: {};
                        coneCos: {};
                        penumbraCos: {};
                        decay: {};
                    };
                };
                spotLightShadows: {
                    value: any[];
                    properties: {
                        shadowBias: {};
                        shadowNormalBias: {};
                        shadowRadius: {};
                        shadowMapSize: {};
                    };
                };
                spotShadowMap: THREE.IUniform<any>;
                spotShadowMatrix: THREE.IUniform<any>;
                pointLights: {
                    value: any[];
                    properties: {
                        color: {};
                        position: {};
                        decay: {};
                        distance: {};
                    };
                };
                pointLightShadows: {
                    value: any[];
                    properties: {
                        shadowBias: {};
                        shadowNormalBias: {};
                        shadowRadius: {};
                        shadowMapSize: {};
                    };
                };
                pointShadowMap: THREE.IUniform<any>;
                pointShadowMatrix: THREE.IUniform<any>;
                hemisphereLights: {
                    value: any[];
                    properties: {
                        direction: {};
                        skycolor: {};
                        groundColor: {};
                    };
                };
                rectAreaLights: {
                    value: any[];
                    properties: {
                        color: {};
                        position: {};
                        width: {};
                        height: {};
                    };
                };
            };
            points: {
                diffuse: THREE.IUniform<any>;
                opacity: THREE.IUniform<any>;
                size: THREE.IUniform<any>;
                scale: THREE.IUniform<any>;
                map: THREE.IUniform<any>;
                uvTransform: THREE.IUniform<any>;
            };
        }>, Events<{
            common: {
                diffuse: THREE.IUniform<any>;
                opacity: THREE.IUniform<any>;
                map: THREE.IUniform<any>;
                uvTransform: THREE.IUniform<any>;
                uv2Transform: THREE.IUniform<any>;
                alphaMap: THREE.IUniform<any>;
            };
            specularmap: {
                specularMap: THREE.IUniform<any>;
            };
            envmap: {
                envMap: THREE.IUniform<any>;
                flipEnvMap: THREE.IUniform<any>;
                reflectivity: THREE.IUniform<any>;
                refractionRatio: THREE.IUniform<any>;
                maxMipLevel: THREE.IUniform<any>;
            };
            aomap: {
                aoMap: THREE.IUniform<any>;
                aoMapIntensity: THREE.IUniform<any>;
            };
            lightmap: {
                lightMap: THREE.IUniform<any>;
                lightMapIntensity: THREE.IUniform<any>;
            };
            emissivemap: {
                emissiveMap: THREE.IUniform<any>;
            };
            bumpmap: {
                bumpMap: THREE.IUniform<any>;
                bumpScale: THREE.IUniform<any>;
            };
            normalmap: {
                normalMap: THREE.IUniform<any>;
                normalScale: THREE.IUniform<any>;
            };
            displacementmap: {
                displacementMap: THREE.IUniform<any>;
                displacementScale: THREE.IUniform<any>;
                displacementBias: THREE.IUniform<any>;
            };
            roughnessmap: {
                roughnessMap: THREE.IUniform<any>;
            };
            metalnessmap: {
                metalnessMap: THREE.IUniform<any>;
            };
            gradientmap: {
                gradientMap: THREE.IUniform<any>;
            };
            fog: {
                fogDensity: THREE.IUniform<any>;
                fogNear: THREE.IUniform<any>;
                fogFar: THREE.IUniform<any>;
                fogColor: THREE.IUniform<any>;
            };
            lights: {
                ambientLightColor: THREE.IUniform<any>;
                directionalLights: {
                    value: any[];
                    properties: {
                        direction: {};
                        color: {};
                    };
                };
                directionalLightShadows: {
                    value: any[];
                    properties: {
                        shadowBias: {};
                        shadowNormalBias: {};
                        shadowRadius: {};
                        shadowMapSize: {};
                    };
                };
                directionalShadowMap: THREE.IUniform<any>;
                directionalShadowMatrix: THREE.IUniform<any>;
                spotLights: {
                    value: any[];
                    properties: {
                        color: {};
                        position: {};
                        direction: {};
                        distance: {};
                        coneCos: {};
                        penumbraCos: {};
                        decay: {};
                    };
                };
                spotLightShadows: {
                    value: any[];
                    properties: {
                        shadowBias: {};
                        shadowNormalBias: {};
                        shadowRadius: {};
                        shadowMapSize: {};
                    };
                };
                spotShadowMap: THREE.IUniform<any>;
                spotShadowMatrix: THREE.IUniform<any>;
                pointLights: {
                    value: any[];
                    properties: {
                        color: {};
                        position: {};
                        decay: {};
                        distance: {};
                    };
                };
                pointLightShadows: {
                    value: any[];
                    properties: {
                        shadowBias: {};
                        shadowNormalBias: {};
                        shadowRadius: {};
                        shadowMapSize: {};
                    };
                };
                pointShadowMap: THREE.IUniform<any>;
                pointShadowMatrix: THREE.IUniform<any>;
                hemisphereLights: {
                    value: any[];
                    properties: {
                        direction: {};
                        skycolor: {};
                        groundColor: {};
                    };
                };
                rectAreaLights: {
                    value: any[];
                    properties: {
                        color: {};
                        position: {};
                        width: {};
                        height: {};
                    };
                };
            };
            points: {
                diffuse: THREE.IUniform<any>;
                opacity: THREE.IUniform<any>;
                size: THREE.IUniform<any>;
                scale: THREE.IUniform<any>;
                map: THREE.IUniform<any>;
                uvTransform: THREE.IUniform<any>;
            };
        }>, Slots<{
            common: {
                diffuse: THREE.IUniform<any>;
                opacity: THREE.IUniform<any>;
                map: THREE.IUniform<any>;
                uvTransform: THREE.IUniform<any>;
                uv2Transform: THREE.IUniform<any>;
                alphaMap: THREE.IUniform<any>;
            };
            specularmap: {
                specularMap: THREE.IUniform<any>;
            };
            envmap: {
                envMap: THREE.IUniform<any>;
                flipEnvMap: THREE.IUniform<any>;
                reflectivity: THREE.IUniform<any>;
                refractionRatio: THREE.IUniform<any>;
                maxMipLevel: THREE.IUniform<any>;
            };
            aomap: {
                aoMap: THREE.IUniform<any>;
                aoMapIntensity: THREE.IUniform<any>;
            };
            lightmap: {
                lightMap: THREE.IUniform<any>;
                lightMapIntensity: THREE.IUniform<any>;
            };
            emissivemap: {
                emissiveMap: THREE.IUniform<any>;
            };
            bumpmap: {
                bumpMap: THREE.IUniform<any>;
                bumpScale: THREE.IUniform<any>;
            };
            normalmap: {
                normalMap: THREE.IUniform<any>;
                normalScale: THREE.IUniform<any>;
            };
            displacementmap: {
                displacementMap: THREE.IUniform<any>;
                displacementScale: THREE.IUniform<any>;
                displacementBias: THREE.IUniform<any>;
            };
            roughnessmap: {
                roughnessMap: THREE.IUniform<any>;
            };
            metalnessmap: {
                metalnessMap: THREE.IUniform<any>;
            };
            gradientmap: {
                gradientMap: THREE.IUniform<any>;
            };
            fog: {
                fogDensity: THREE.IUniform<any>;
                fogNear: THREE.IUniform<any>;
                fogFar: THREE.IUniform<any>;
                fogColor: THREE.IUniform<any>;
            };
            lights: {
                ambientLightColor: THREE.IUniform<any>;
                directionalLights: {
                    value: any[];
                    properties: {
                        direction: {};
                        color: {};
                    };
                };
                directionalLightShadows: {
                    value: any[];
                    properties: {
                        shadowBias: {};
                        shadowNormalBias: {};
                        shadowRadius: {};
                        shadowMapSize: {};
                    };
                };
                directionalShadowMap: THREE.IUniform<any>;
                directionalShadowMatrix: THREE.IUniform<any>;
                spotLights: {
                    value: any[];
                    properties: {
                        color: {};
                        position: {};
                        direction: {};
                        distance: {};
                        coneCos: {};
                        penumbraCos: {};
                        decay: {};
                    };
                };
                spotLightShadows: {
                    value: any[];
                    properties: {
                        shadowBias: {};
                        shadowNormalBias: {};
                        shadowRadius: {};
                        shadowMapSize: {};
                    };
                };
                spotShadowMap: THREE.IUniform<any>;
                spotShadowMatrix: THREE.IUniform<any>;
                pointLights: {
                    value: any[];
                    properties: {
                        color: {};
                        position: {};
                        decay: {};
                        distance: {};
                    };
                };
                pointLightShadows: {
                    value: any[];
                    properties: {
                        shadowBias: {};
                        shadowNormalBias: {};
                        shadowRadius: {};
                        shadowMapSize: {};
                    };
                };
                pointShadowMap: THREE.IUniform<any>;
                pointShadowMatrix: THREE.IUniform<any>;
                hemisphereLights: {
                    value: any[];
                    properties: {
                        direction: {};
                        skycolor: {};
                        groundColor: {};
                    };
                };
                rectAreaLights: {
                    value: any[];
                    properties: {
                        color: {};
                        position: {};
                        width: {};
                        height: {};
                    };
                };
            };
            points: {
                diffuse: THREE.IUniform<any>;
                opacity: THREE.IUniform<any>;
                size: THREE.IUniform<any>;
                scale: THREE.IUniform<any>;
                map: THREE.IUniform<any>;
                uvTransform: THREE.IUniform<any>;
            };
        }>>;
    };
    cloneUniforms: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.cloneUniforms>>): SvelteComponentTyped<Props<typeof THREE.cloneUniforms>, Events<typeof THREE.cloneUniforms>, Slots<typeof THREE.cloneUniforms>>;
    };
    mergeUniforms: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.mergeUniforms>>): SvelteComponentTyped<Props<typeof THREE.mergeUniforms>, Events<typeof THREE.mergeUniforms>, Slots<typeof THREE.mergeUniforms>>;
    };
    cloneUniformsGroups: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.cloneUniformsGroups>>): SvelteComponentTyped<Props<typeof THREE.cloneUniformsGroups>, Events<typeof THREE.cloneUniformsGroups>, Slots<typeof THREE.cloneUniformsGroups>>;
    };
    UniformsUtils: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.UniformsUtils>>): SvelteComponentTyped<Props<typeof THREE.UniformsUtils>, Events<typeof THREE.UniformsUtils>, Slots<typeof THREE.UniformsUtils>>;
    };
    ShaderChunk: {
        new (options: import("svelte").ComponentConstructorOptions<Props<{
            [name: string]: string;
            alphamap_fragment: string;
            alphamap_pars_fragment: string;
            alphatest_fragment: string;
            aomap_fragment: string;
            aomap_pars_fragment: string;
            begin_vertex: string;
            beginnormal_vertex: string;
            bsdfs: string;
            bumpmap_pars_fragment: string;
            clipping_planes_fragment: string;
            clipping_planes_pars_fragment: string;
            clipping_planes_pars_vertex: string;
            clipping_planes_vertex: string;
            color_fragment: string;
            color_pars_fragment: string;
            color_pars_vertex: string;
            color_vertex: string;
            common: string;
            cube_frag: string;
            cube_vert: string;
            cube_uv_reflection_fragment: string;
            defaultnormal_vertex: string;
            depth_frag: string;
            depth_vert: string;
            distanceRGBA_frag: string;
            distanceRGBA_vert: string;
            displacementmap_vertex: string;
            displacementmap_pars_vertex: string;
            emissivemap_fragment: string;
            emissivemap_pars_fragment: string;
            encodings_pars_fragment: string;
            encodings_fragment: string;
            envmap_fragment: string;
            envmap_common_pars_fragment: string;
            envmap_pars_fragment: string;
            envmap_pars_vertex: string;
            envmap_vertex: string;
            equirect_frag: string;
            equirect_vert: string;
            fog_fragment: string;
            fog_pars_fragment: string;
            linedashed_frag: string;
            linedashed_vert: string;
            lightmap_fragment: string;
            lightmap_pars_fragment: string;
            lights_lambert_vertex: string;
            lights_pars_begin: string;
            envmap_physical_pars_fragment: string;
            lights_pars_map: string;
            lights_phong_fragment: string;
            lights_phong_pars_fragment: string;
            lights_physical_fragment: string;
            lights_physical_pars_fragment: string;
            lights_fragment_begin: string;
            lights_fragment_maps: string;
            lights_fragment_end: string;
            logdepthbuf_fragment: string;
            logdepthbuf_pars_fragment: string;
            logdepthbuf_pars_vertex: string;
            logdepthbuf_vertex: string;
            map_fragment: string;
            map_pars_fragment: string;
            map_particle_fragment: string;
            map_particle_pars_fragment: string;
            meshbasic_frag: string;
            meshbasic_vert: string;
            meshlambert_frag: string;
            meshlambert_vert: string;
            meshphong_frag: string;
            meshphong_vert: string;
            meshphysical_frag: string;
            meshphysical_vert: string;
            metalnessmap_fragment: string;
            metalnessmap_pars_fragment: string;
            morphnormal_vertex: string;
            morphtarget_pars_vertex: string;
            morphtarget_vertex: string;
            normal_flip: string;
            normal_frag: string;
            normal_fragment_begin: string;
            normal_fragment_maps: string;
            normal_vert: string;
            normalmap_pars_fragment: string;
            clearcoat_normal_fragment_begin: string;
            clearcoat_normal_fragment_maps: string;
            clearcoat_pars_fragment: string;
            packing: string;
            points_frag: string;
            points_vert: string;
            shadow_frag: string;
            shadow_vert: string;
            premultiplied_alpha_fragment: string;
            project_vertex: string;
            roughnessmap_fragment: string;
            roughnessmap_pars_fragment: string;
            shadowmap_pars_fragment: string;
            shadowmap_pars_vertex: string;
            shadowmap_vertex: string;
            shadowmask_pars_fragment: string;
            skinbase_vertex: string;
            skinning_pars_vertex: string;
            skinning_vertex: string;
            skinnormal_vertex: string;
            specularmap_fragment: string;
            specularmap_pars_fragment: string;
            tonemapping_fragment: string;
            tonemapping_pars_fragment: string;
            uv2_pars_fragment: string;
            uv2_pars_vertex: string;
            uv2_vertex: string;
            uv_pars_fragment: string;
            uv_pars_vertex: string;
            uv_vertex: string;
            worldpos_vertex: string;
        }>>): SvelteComponentTyped<Props<{
            [name: string]: string;
            alphamap_fragment: string;
            alphamap_pars_fragment: string;
            alphatest_fragment: string;
            aomap_fragment: string;
            aomap_pars_fragment: string;
            begin_vertex: string;
            beginnormal_vertex: string;
            bsdfs: string;
            bumpmap_pars_fragment: string;
            clipping_planes_fragment: string;
            clipping_planes_pars_fragment: string;
            clipping_planes_pars_vertex: string;
            clipping_planes_vertex: string;
            color_fragment: string;
            color_pars_fragment: string;
            color_pars_vertex: string;
            color_vertex: string;
            common: string;
            cube_frag: string;
            cube_vert: string;
            cube_uv_reflection_fragment: string;
            defaultnormal_vertex: string;
            depth_frag: string;
            depth_vert: string;
            distanceRGBA_frag: string;
            distanceRGBA_vert: string;
            displacementmap_vertex: string;
            displacementmap_pars_vertex: string;
            emissivemap_fragment: string;
            emissivemap_pars_fragment: string;
            encodings_pars_fragment: string;
            encodings_fragment: string;
            envmap_fragment: string;
            envmap_common_pars_fragment: string;
            envmap_pars_fragment: string;
            envmap_pars_vertex: string;
            envmap_vertex: string;
            equirect_frag: string;
            equirect_vert: string;
            fog_fragment: string;
            fog_pars_fragment: string;
            linedashed_frag: string;
            linedashed_vert: string;
            lightmap_fragment: string;
            lightmap_pars_fragment: string;
            lights_lambert_vertex: string;
            lights_pars_begin: string;
            envmap_physical_pars_fragment: string;
            lights_pars_map: string;
            lights_phong_fragment: string;
            lights_phong_pars_fragment: string;
            lights_physical_fragment: string;
            lights_physical_pars_fragment: string;
            lights_fragment_begin: string;
            lights_fragment_maps: string;
            lights_fragment_end: string;
            logdepthbuf_fragment: string;
            logdepthbuf_pars_fragment: string;
            logdepthbuf_pars_vertex: string;
            logdepthbuf_vertex: string;
            map_fragment: string;
            map_pars_fragment: string;
            map_particle_fragment: string;
            map_particle_pars_fragment: string;
            meshbasic_frag: string;
            meshbasic_vert: string;
            meshlambert_frag: string;
            meshlambert_vert: string;
            meshphong_frag: string;
            meshphong_vert: string;
            meshphysical_frag: string;
            meshphysical_vert: string;
            metalnessmap_fragment: string;
            metalnessmap_pars_fragment: string;
            morphnormal_vertex: string;
            morphtarget_pars_vertex: string;
            morphtarget_vertex: string;
            normal_flip: string;
            normal_frag: string;
            normal_fragment_begin: string;
            normal_fragment_maps: string;
            normal_vert: string;
            normalmap_pars_fragment: string;
            clearcoat_normal_fragment_begin: string;
            clearcoat_normal_fragment_maps: string;
            clearcoat_pars_fragment: string;
            packing: string;
            points_frag: string;
            points_vert: string;
            shadow_frag: string;
            shadow_vert: string;
            premultiplied_alpha_fragment: string;
            project_vertex: string;
            roughnessmap_fragment: string;
            roughnessmap_pars_fragment: string;
            shadowmap_pars_fragment: string;
            shadowmap_pars_vertex: string;
            shadowmap_vertex: string;
            shadowmask_pars_fragment: string;
            skinbase_vertex: string;
            skinning_pars_vertex: string;
            skinning_vertex: string;
            skinnormal_vertex: string;
            specularmap_fragment: string;
            specularmap_pars_fragment: string;
            tonemapping_fragment: string;
            tonemapping_pars_fragment: string;
            uv2_pars_fragment: string;
            uv2_pars_vertex: string;
            uv2_vertex: string;
            uv_pars_fragment: string;
            uv_pars_vertex: string;
            uv_vertex: string;
            worldpos_vertex: string;
        }>, Events<{
            [name: string]: string;
            alphamap_fragment: string;
            alphamap_pars_fragment: string;
            alphatest_fragment: string;
            aomap_fragment: string;
            aomap_pars_fragment: string;
            begin_vertex: string;
            beginnormal_vertex: string;
            bsdfs: string;
            bumpmap_pars_fragment: string;
            clipping_planes_fragment: string;
            clipping_planes_pars_fragment: string;
            clipping_planes_pars_vertex: string;
            clipping_planes_vertex: string;
            color_fragment: string;
            color_pars_fragment: string;
            color_pars_vertex: string;
            color_vertex: string;
            common: string;
            cube_frag: string;
            cube_vert: string;
            cube_uv_reflection_fragment: string;
            defaultnormal_vertex: string;
            depth_frag: string;
            depth_vert: string;
            distanceRGBA_frag: string;
            distanceRGBA_vert: string;
            displacementmap_vertex: string;
            displacementmap_pars_vertex: string;
            emissivemap_fragment: string;
            emissivemap_pars_fragment: string;
            encodings_pars_fragment: string;
            encodings_fragment: string;
            envmap_fragment: string;
            envmap_common_pars_fragment: string;
            envmap_pars_fragment: string;
            envmap_pars_vertex: string;
            envmap_vertex: string;
            equirect_frag: string;
            equirect_vert: string;
            fog_fragment: string;
            fog_pars_fragment: string;
            linedashed_frag: string;
            linedashed_vert: string;
            lightmap_fragment: string;
            lightmap_pars_fragment: string;
            lights_lambert_vertex: string;
            lights_pars_begin: string;
            envmap_physical_pars_fragment: string;
            lights_pars_map: string;
            lights_phong_fragment: string;
            lights_phong_pars_fragment: string;
            lights_physical_fragment: string;
            lights_physical_pars_fragment: string;
            lights_fragment_begin: string;
            lights_fragment_maps: string;
            lights_fragment_end: string;
            logdepthbuf_fragment: string;
            logdepthbuf_pars_fragment: string;
            logdepthbuf_pars_vertex: string;
            logdepthbuf_vertex: string;
            map_fragment: string;
            map_pars_fragment: string;
            map_particle_fragment: string;
            map_particle_pars_fragment: string;
            meshbasic_frag: string;
            meshbasic_vert: string;
            meshlambert_frag: string;
            meshlambert_vert: string;
            meshphong_frag: string;
            meshphong_vert: string;
            meshphysical_frag: string;
            meshphysical_vert: string;
            metalnessmap_fragment: string;
            metalnessmap_pars_fragment: string;
            morphnormal_vertex: string;
            morphtarget_pars_vertex: string;
            morphtarget_vertex: string;
            normal_flip: string;
            normal_frag: string;
            normal_fragment_begin: string;
            normal_fragment_maps: string;
            normal_vert: string;
            normalmap_pars_fragment: string;
            clearcoat_normal_fragment_begin: string;
            clearcoat_normal_fragment_maps: string;
            clearcoat_pars_fragment: string;
            packing: string;
            points_frag: string;
            points_vert: string;
            shadow_frag: string;
            shadow_vert: string;
            premultiplied_alpha_fragment: string;
            project_vertex: string;
            roughnessmap_fragment: string;
            roughnessmap_pars_fragment: string;
            shadowmap_pars_fragment: string;
            shadowmap_pars_vertex: string;
            shadowmap_vertex: string;
            shadowmask_pars_fragment: string;
            skinbase_vertex: string;
            skinning_pars_vertex: string;
            skinning_vertex: string;
            skinnormal_vertex: string;
            specularmap_fragment: string;
            specularmap_pars_fragment: string;
            tonemapping_fragment: string;
            tonemapping_pars_fragment: string;
            uv2_pars_fragment: string;
            uv2_pars_vertex: string;
            uv2_vertex: string;
            uv_pars_fragment: string;
            uv_pars_vertex: string;
            uv_vertex: string;
            worldpos_vertex: string;
        }>, Slots<{
            [name: string]: string;
            alphamap_fragment: string;
            alphamap_pars_fragment: string;
            alphatest_fragment: string;
            aomap_fragment: string;
            aomap_pars_fragment: string;
            begin_vertex: string;
            beginnormal_vertex: string;
            bsdfs: string;
            bumpmap_pars_fragment: string;
            clipping_planes_fragment: string;
            clipping_planes_pars_fragment: string;
            clipping_planes_pars_vertex: string;
            clipping_planes_vertex: string;
            color_fragment: string;
            color_pars_fragment: string;
            color_pars_vertex: string;
            color_vertex: string;
            common: string;
            cube_frag: string;
            cube_vert: string;
            cube_uv_reflection_fragment: string;
            defaultnormal_vertex: string;
            depth_frag: string;
            depth_vert: string;
            distanceRGBA_frag: string;
            distanceRGBA_vert: string;
            displacementmap_vertex: string;
            displacementmap_pars_vertex: string;
            emissivemap_fragment: string;
            emissivemap_pars_fragment: string;
            encodings_pars_fragment: string;
            encodings_fragment: string;
            envmap_fragment: string;
            envmap_common_pars_fragment: string;
            envmap_pars_fragment: string;
            envmap_pars_vertex: string;
            envmap_vertex: string;
            equirect_frag: string;
            equirect_vert: string;
            fog_fragment: string;
            fog_pars_fragment: string;
            linedashed_frag: string;
            linedashed_vert: string;
            lightmap_fragment: string;
            lightmap_pars_fragment: string;
            lights_lambert_vertex: string;
            lights_pars_begin: string;
            envmap_physical_pars_fragment: string;
            lights_pars_map: string;
            lights_phong_fragment: string;
            lights_phong_pars_fragment: string;
            lights_physical_fragment: string;
            lights_physical_pars_fragment: string;
            lights_fragment_begin: string;
            lights_fragment_maps: string;
            lights_fragment_end: string;
            logdepthbuf_fragment: string;
            logdepthbuf_pars_fragment: string;
            logdepthbuf_pars_vertex: string;
            logdepthbuf_vertex: string;
            map_fragment: string;
            map_pars_fragment: string;
            map_particle_fragment: string;
            map_particle_pars_fragment: string;
            meshbasic_frag: string;
            meshbasic_vert: string;
            meshlambert_frag: string;
            meshlambert_vert: string;
            meshphong_frag: string;
            meshphong_vert: string;
            meshphysical_frag: string;
            meshphysical_vert: string;
            metalnessmap_fragment: string;
            metalnessmap_pars_fragment: string;
            morphnormal_vertex: string;
            morphtarget_pars_vertex: string;
            morphtarget_vertex: string;
            normal_flip: string;
            normal_frag: string;
            normal_fragment_begin: string;
            normal_fragment_maps: string;
            normal_vert: string;
            normalmap_pars_fragment: string;
            clearcoat_normal_fragment_begin: string;
            clearcoat_normal_fragment_maps: string;
            clearcoat_pars_fragment: string;
            packing: string;
            points_frag: string;
            points_vert: string;
            shadow_frag: string;
            shadow_vert: string;
            premultiplied_alpha_fragment: string;
            project_vertex: string;
            roughnessmap_fragment: string;
            roughnessmap_pars_fragment: string;
            shadowmap_pars_fragment: string;
            shadowmap_pars_vertex: string;
            shadowmap_vertex: string;
            shadowmask_pars_fragment: string;
            skinbase_vertex: string;
            skinning_pars_vertex: string;
            skinning_vertex: string;
            skinnormal_vertex: string;
            specularmap_fragment: string;
            specularmap_pars_fragment: string;
            tonemapping_fragment: string;
            tonemapping_pars_fragment: string;
            uv2_pars_fragment: string;
            uv2_pars_vertex: string;
            uv2_vertex: string;
            uv_pars_fragment: string;
            uv_pars_vertex: string;
            uv_vertex: string;
            worldpos_vertex: string;
        }>>;
    };
    WebGLBufferRenderer: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLBufferRenderer>>): SvelteComponentTyped<Props<typeof THREE.WebGLBufferRenderer>, Events<typeof THREE.WebGLBufferRenderer>, Slots<typeof THREE.WebGLBufferRenderer>>;
    };
    WebGLCapabilities: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLCapabilities>>): SvelteComponentTyped<Props<typeof THREE.WebGLCapabilities>, Events<typeof THREE.WebGLCapabilities>, Slots<typeof THREE.WebGLCapabilities>>;
    };
    WebGLClipping: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLClipping>>): SvelteComponentTyped<Props<typeof THREE.WebGLClipping>, Events<typeof THREE.WebGLClipping>, Slots<typeof THREE.WebGLClipping>>;
    };
    WebGLCubeUVMaps: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLCubeUVMaps>>): SvelteComponentTyped<Props<typeof THREE.WebGLCubeUVMaps>, Events<typeof THREE.WebGLCubeUVMaps>, Slots<typeof THREE.WebGLCubeUVMaps>>;
    };
    WebGLExtensions: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLExtensions>>): SvelteComponentTyped<Props<typeof THREE.WebGLExtensions>, Events<typeof THREE.WebGLExtensions>, Slots<typeof THREE.WebGLExtensions>>;
    };
    WebGLGeometries: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLGeometries>>): SvelteComponentTyped<Props<typeof THREE.WebGLGeometries>, Events<typeof THREE.WebGLGeometries>, Slots<typeof THREE.WebGLGeometries>>;
    };
    WebGLIndexedBufferRenderer: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLIndexedBufferRenderer>>): SvelteComponentTyped<Props<typeof THREE.WebGLIndexedBufferRenderer>, Events<typeof THREE.WebGLIndexedBufferRenderer>, Slots<typeof THREE.WebGLIndexedBufferRenderer>>;
    };
    WebGLInfo: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLInfo>>): SvelteComponentTyped<Props<typeof THREE.WebGLInfo>, Events<typeof THREE.WebGLInfo>, Slots<typeof THREE.WebGLInfo>>;
    };
    WebGLLights: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLLights>>): SvelteComponentTyped<Props<typeof THREE.WebGLLights>, Events<typeof THREE.WebGLLights>, Slots<typeof THREE.WebGLLights>>;
    };
    WebGLObjects: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLObjects>>): SvelteComponentTyped<Props<typeof THREE.WebGLObjects>, Events<typeof THREE.WebGLObjects>, Slots<typeof THREE.WebGLObjects>>;
    };
    WebGLProgram: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLProgram>>): SvelteComponentTyped<Props<typeof THREE.WebGLProgram>, Events<typeof THREE.WebGLProgram>, Slots<typeof THREE.WebGLProgram>>;
    };
    WebGLPrograms: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLPrograms>>): SvelteComponentTyped<Props<typeof THREE.WebGLPrograms>, Events<typeof THREE.WebGLPrograms>, Slots<typeof THREE.WebGLPrograms>>;
    };
    WebGLProperties: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLProperties>>): SvelteComponentTyped<Props<typeof THREE.WebGLProperties>, Events<typeof THREE.WebGLProperties>, Slots<typeof THREE.WebGLProperties>>;
    };
    WebGLRenderList: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLRenderList>>): SvelteComponentTyped<Props<typeof THREE.WebGLRenderList>, Events<typeof THREE.WebGLRenderList>, Slots<typeof THREE.WebGLRenderList>>;
    };
    WebGLRenderLists: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLRenderLists>>): SvelteComponentTyped<Props<typeof THREE.WebGLRenderLists>, Events<typeof THREE.WebGLRenderLists>, Slots<typeof THREE.WebGLRenderLists>>;
    };
    WebGLShader: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLShader>>): SvelteComponentTyped<Props<typeof THREE.WebGLShader>, Events<typeof THREE.WebGLShader>, Slots<typeof THREE.WebGLShader>>;
    };
    WebGLShadowMap: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLShadowMap>>): SvelteComponentTyped<Props<typeof THREE.WebGLShadowMap>, Events<typeof THREE.WebGLShadowMap>, Slots<typeof THREE.WebGLShadowMap>>;
    };
    WebGLColorBuffer: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLColorBuffer>>): SvelteComponentTyped<Props<typeof THREE.WebGLColorBuffer>, Events<typeof THREE.WebGLColorBuffer>, Slots<typeof THREE.WebGLColorBuffer>>;
    };
    WebGLDepthBuffer: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLDepthBuffer>>): SvelteComponentTyped<Props<typeof THREE.WebGLDepthBuffer>, Events<typeof THREE.WebGLDepthBuffer>, Slots<typeof THREE.WebGLDepthBuffer>>;
    };
    WebGLStencilBuffer: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLStencilBuffer>>): SvelteComponentTyped<Props<typeof THREE.WebGLStencilBuffer>, Events<typeof THREE.WebGLStencilBuffer>, Slots<typeof THREE.WebGLStencilBuffer>>;
    };
    WebGLState: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLState>>): SvelteComponentTyped<Props<typeof THREE.WebGLState>, Events<typeof THREE.WebGLState>, Slots<typeof THREE.WebGLState>>;
    };
    WebGLTextures: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLTextures>>): SvelteComponentTyped<Props<typeof THREE.WebGLTextures>, Events<typeof THREE.WebGLTextures>, Slots<typeof THREE.WebGLTextures>>;
    };
    WebGLUniforms: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLUniforms>>): SvelteComponentTyped<Props<typeof THREE.WebGLUniforms>, Events<typeof THREE.WebGLUniforms>, Slots<typeof THREE.WebGLUniforms>>;
    };
    WebGLUniformsGroups: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebGLUniformsGroups>>): SvelteComponentTyped<Props<typeof THREE.WebGLUniformsGroups>, Events<typeof THREE.WebGLUniformsGroups>, Slots<typeof THREE.WebGLUniformsGroups>>;
    };
    XRHandSpace: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.XRHandSpace>>): SvelteComponentTyped<Props<typeof THREE.XRHandSpace>, Events<typeof THREE.XRHandSpace>, Slots<typeof THREE.XRHandSpace>>;
    };
    XRTargetRaySpace: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.XRTargetRaySpace>>): SvelteComponentTyped<Props<typeof THREE.XRTargetRaySpace>, Events<typeof THREE.XRTargetRaySpace>, Slots<typeof THREE.XRTargetRaySpace>>;
    };
    XRGripSpace: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.XRGripSpace>>): SvelteComponentTyped<Props<typeof THREE.XRGripSpace>, Events<typeof THREE.XRGripSpace>, Slots<typeof THREE.XRGripSpace>>;
    };
    WebXRController: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebXRController>>): SvelteComponentTyped<Props<typeof THREE.WebXRController>, Events<typeof THREE.WebXRController>, Slots<typeof THREE.WebXRController>>;
    };
    WebXRManager: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.WebXRManager>>): SvelteComponentTyped<Props<typeof THREE.WebXRManager>, Events<typeof THREE.WebXRManager>, Slots<typeof THREE.WebXRManager>>;
    };
    FogExp2: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.FogExp2>>): SvelteComponentTyped<Props<typeof THREE.FogExp2>, Events<typeof THREE.FogExp2>, Slots<typeof THREE.FogExp2>>;
    };
    Fog: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Fog>>): SvelteComponentTyped<Props<typeof THREE.Fog>, Events<typeof THREE.Fog>, Slots<typeof THREE.Fog>>;
    };
    Scene: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Scene>>): SvelteComponentTyped<Props<typeof THREE.Scene>, Events<typeof THREE.Scene>, Slots<typeof THREE.Scene>>;
    };
    VideoTexture: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.VideoTexture>>): SvelteComponentTyped<Props<typeof THREE.VideoTexture>, Events<typeof THREE.VideoTexture>, Slots<typeof THREE.VideoTexture>>;
    };
    DataTexture: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DataTexture>>): SvelteComponentTyped<Props<typeof THREE.DataTexture>, Events<typeof THREE.DataTexture>, Slots<typeof THREE.DataTexture>>;
    };
    DataTexture2DArray: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DataTexture2DArray>>): SvelteComponentTyped<Props<typeof THREE.DataTexture2DArray>, Events<typeof THREE.DataTexture2DArray>, Slots<typeof THREE.DataTexture2DArray>>;
    };
    DataTexture3D: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DataTexture3D>>): SvelteComponentTyped<Props<typeof THREE.DataTexture3D>, Events<typeof THREE.DataTexture3D>, Slots<typeof THREE.DataTexture3D>>;
    };
    CompressedTexture: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CompressedTexture>>): SvelteComponentTyped<Props<typeof THREE.CompressedTexture>, Events<typeof THREE.CompressedTexture>, Slots<typeof THREE.CompressedTexture>>;
    };
    CubeTexture: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CubeTexture>>): SvelteComponentTyped<Props<typeof THREE.CubeTexture>, Events<typeof THREE.CubeTexture>, Slots<typeof THREE.CubeTexture>>;
    };
    Data3DTexture: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Data3DTexture>>): SvelteComponentTyped<Props<typeof THREE.Data3DTexture>, Events<typeof THREE.Data3DTexture>, Slots<typeof THREE.Data3DTexture>>;
    };
    DataArrayTexture: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DataArrayTexture>>): SvelteComponentTyped<Props<typeof THREE.DataArrayTexture>, Events<typeof THREE.DataArrayTexture>, Slots<typeof THREE.DataArrayTexture>>;
    };
    CanvasTexture: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.CanvasTexture>>): SvelteComponentTyped<Props<typeof THREE.CanvasTexture>, Events<typeof THREE.CanvasTexture>, Slots<typeof THREE.CanvasTexture>>;
    };
    DepthTexture: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.DepthTexture>>): SvelteComponentTyped<Props<typeof THREE.DepthTexture>, Events<typeof THREE.DepthTexture>, Slots<typeof THREE.DepthTexture>>;
    };
    FramebufferTexture: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.FramebufferTexture>>): SvelteComponentTyped<Props<typeof THREE.FramebufferTexture>, Events<typeof THREE.FramebufferTexture>, Slots<typeof THREE.FramebufferTexture>>;
    };
    Source: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Source>>): SvelteComponentTyped<Props<typeof THREE.Source>, Events<typeof THREE.Source>, Slots<typeof THREE.Source>>;
    };
    Texture: {
        new (options: import("svelte").ComponentConstructorOptions<Props<typeof THREE.Texture>>): SvelteComponentTyped<Props<typeof THREE.Texture>, Events<typeof THREE.Texture>, Slots<typeof THREE.Texture>>;
    };
} & Record<string, typeof SvelteComponentTyped>;
