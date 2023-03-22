<script>
    import { Canvas } from "@threlte/core";
    import { GLTF } from "@threlte/extras";
    import { LightInstance } from "@threlte/core";
    import {
        DirectionalLight,
        SpotLight,
        HemisphereLight,
        MeshPhysicalMaterial,
        Color,
    } from "three";
    import { PositionalAudio, AudioListener, Audio } from "@threlte/core";

    import { Three } from "@threlte/core";
    import { OrbitControls, Mesh, Object3DInstance } from "@threlte/core";
    import { useGltf, ContactShadows } from "@threlte/extras";
    import { BoxGeometry } from "three";
    import { authToken } from "$lib/store";
    import BoardScene from "../../BoardScene.svelte";
    import { defaultBoard} from '$lib/boards'

    import {
        PerspectiveCamera,
        Group,
        MeshBasicMaterial,
        LineSegments,
        EdgesGeometry,
    } from "three";
    import { onMount } from "svelte";


    let loaded = false;
    onMount(() => {
        loaded = true;
    });

	export let data;
	let gameId = data.gameId;



    let play;
</script>

<Canvas shadows castShadow>
    <AudioListener id="ear" />

    <Three
        type={DirectionalLight}
        args={[0xeee6b4, 2]}
        position={[0, 5, 10]}
        lookAt="{[2, 11, 10]}}"
        castShadow={true}
    />
    <Three
        type={SpotLight}
        args={[0xffffff, 1]}
        position={[0, 1, 0]}
        lookAt="{[2, 11, 10]}}"
        castShadow={true}
    />
    <Three
        type={PerspectiveCamera}
        makeDefault
        position={[0.5, 2, 0]}
        rotation={{ x: 2 }}
        fov={36}
        castShadow
    >
        <OrbitControls target={{ x: -0.2, y: 0.2 }} rotation={{ x: 2 }} />
    </Three>

    <GLTF
        castShadow
        receiveShadow
        url={"/wooden_table.glb"}
        scale={1}
        position={{ y: 0 }}
    />
    <GLTF
        castShadow
        receiveShadow
        url={"/old_books.glb"}
        scale={0.6}
        position={{ y: 0.5, x: -0.3, z: -0.55 }}
        rotation={{ y: 1.6 }}
    />
    <GLTF
        castShadow
        receiveShadow
        url={"/lamp.glb"}
        scale={0.01}
        rotation={{y:1.5}}
        position={{ y: 0.5, z: -0.6, x: -0 }}
    />

    <GLTF
        castShadow
        receiveShadow
        url={"/carpet.glb"}
        scale={3}
        rotation={{ y: 1.6 }}
        position={{ y: -0.5, z: -0.5, x: -1 }}
    />

    <GLTF
        castShadow
        receiveShadow
        url={"/cup_of_coffee.glb"}
        scale={0.00014}
        rotation={{ y: -5 }}
        position={{ y: 0.53, z: 0.46, x: 0.2 }}
    />
    <GLTF
        castShadow
        receiveShadow
        url={"/victorian_armchair.glb"}
        scale={0.4}
        position={{ y: -1.45, z: 0.25, x: -1.5 }}
        rotation={{ y: 1.5 }}
    />
    <BoardScene boardConfig={defaultBoard} gameId={gameId}/>
</Canvas>
