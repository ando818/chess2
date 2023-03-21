<script>
    import { Canvas } from "@threlte/core";
    import { GLTF } from "@threlte/extras";
    import { LightInstance } from "@threlte/core";
    import { DirectionalLight, SpotLight, HemisphereLight } from "three";
    import { Three } from "@threlte/core";
	import { OrbitControls, Mesh, Object3DInstance } from "@threlte/core";

	import {
		PerspectiveCamera,
		Group,
		MeshBasicMaterial,
		LineSegments,
		EdgesGeometry,
	} from "three";

    var light = new SpotLight(0xdad6c7);
</script>

<Canvas shadows castShadow>
	<Three type={DirectionalLight} args={[0xffffff, 1]} position={[30, 30, 30]} lookAt={[2,11,10]}}
	castShadow={true} />

    <Three
        type={PerspectiveCamera}
        makeDefault
        position={[0, 10, 0]}
        rotation={{ x: 2 }}
        fov={36}
        castShadow
    >

        <OrbitControls />
    </Three>

    <GLTF receiveShadow url={"tea_shop.glb"} />
</Canvas>
