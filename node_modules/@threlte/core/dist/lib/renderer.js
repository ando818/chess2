import { get } from 'svelte/store';
import { ACESFilmicToneMapping, LinearEncoding, NoToneMapping, sRGBEncoding, WebGLRenderer } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
export const createRendererAndComposer = (ctx, canvas, rendererParameters) => {
    ctx.renderer = new WebGLRenderer({
        powerPreference: 'high-performance',
        canvas: canvas,
        antialias: true,
        alpha: true,
        ...rendererParameters
    });
    ctx.composer = new EffectComposer(ctx.renderer);
    ctx.composer.addPass(new RenderPass(ctx.scene, get(ctx.camera)));
};
export const setRendererColorOutput = (ctx, linear, flat) => {
    if (!ctx.renderer)
        return;
    if (linear) {
        ctx.renderer.outputEncoding = LinearEncoding;
    }
    else {
        ctx.renderer.outputEncoding = sRGBEncoding;
    }
    if (flat) {
        ctx.renderer.toneMapping = NoToneMapping;
    }
    else {
        ctx.renderer.toneMapping = ACESFilmicToneMapping;
    }
};
export const setRendererAndComposerSize = (ctx, size, dpr) => {
    if (!ctx.renderer || !ctx.composer)
        return;
    ctx.renderer.setSize?.(size.width, size.height);
    ctx.renderer.setPixelRatio?.(dpr);
    ctx.composer.setSize?.(size.width, size.height);
    ctx.composer.setPixelRatio?.(dpr);
};
export const setRendererShadows = (ctx, shadows, shadowMapType) => {
    if (!ctx.renderer)
        return;
    ctx.renderer.shadowMap.enabled = shadows;
    ctx.renderer.shadowMap.type = shadowMapType;
};
