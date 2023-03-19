import { SvelteComponentTyped } from "svelte";
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import type { OrbitControlsProperties } from '../types/components';
declare const __propDef: {
    props: {
        autoRotate?: OrbitControlsProperties['autoRotate'];
        autoRotateSpeed?: OrbitControlsProperties['autoRotateSpeed'];
        dampingFactor?: OrbitControlsProperties['dampingFactor'];
        enableDamping?: OrbitControlsProperties['enableDamping'];
        enabled?: OrbitControlsProperties['enabled'];
        enablePan?: OrbitControlsProperties['enablePan'];
        enableRotate?: OrbitControlsProperties['enableRotate'];
        enableZoom?: OrbitControlsProperties['enableZoom'];
        keyPanSpeed?: OrbitControlsProperties['keyPanSpeed'];
        keys?: OrbitControlsProperties['keys'];
        maxAzimuthAngle?: OrbitControlsProperties['maxAzimuthAngle'];
        maxDistance?: OrbitControlsProperties['maxDistance'];
        maxPolarAngle?: OrbitControlsProperties['maxPolarAngle'];
        maxZoom?: OrbitControlsProperties['maxZoom'];
        minAzimuthAngle?: OrbitControlsProperties['minAzimuthAngle'];
        minDistance?: OrbitControlsProperties['minDistance'];
        minPolarAngle?: OrbitControlsProperties['minPolarAngle'];
        minZoom?: OrbitControlsProperties['minZoom'];
        mouseButtons?: OrbitControlsProperties['mouseButtons'];
        panSpeed?: OrbitControlsProperties['panSpeed'];
        rotateSpeed?: OrbitControlsProperties['rotateSpeed'];
        screenSpacePanning?: OrbitControlsProperties['screenSpacePanning'];
        touches?: OrbitControlsProperties['touches'];
        zoomSpeed?: OrbitControlsProperties['zoomSpeed'];
        target?: OrbitControlsProperties['target'];
        dispose?: OrbitControlsProperties['dispose'];
        controls?: ThreeOrbitControls | undefined;
    };
    events: {
        change: CustomEvent<undefined>;
        start: CustomEvent<undefined>;
        end: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type OrbitControlsProps = typeof __propDef.props;
export declare type OrbitControlsEvents = typeof __propDef.events;
export declare type OrbitControlsSlots = typeof __propDef.slots;
export default class OrbitControls extends SvelteComponentTyped<OrbitControlsProps, OrbitControlsEvents, OrbitControlsSlots> {
    get controls(): ThreeOrbitControls;
}
export {};
