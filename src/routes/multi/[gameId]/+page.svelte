<script>
    import { Canvas } from "@threlte/core";
    import { GLTF } from "@threlte/extras";
    import { DirectionalLight, SpotLight } from "three";

    import { T } from "@threlte/core";
    import { OrbitControls } from "@threlte/extras";
    //    import BoardScene from "../../BoardScene.svelte";
    import { defaultBoard } from "$lib/boards";

    import { PerspectiveCamera } from "three";
    import { onMount } from "svelte";
    import BoardScene from "../../BoardScene.svelte";
    let loaded = false;
    onMount(() => {
        loaded = true;
    });

    export let data;
    let gameId = data.gameId;

    let play;
</script>

<Canvas>
    <T
        is={DirectionalLight}
        args={[0xeee6b4, 2]}
        position={[0, 5, 10]}
        lookAt="{[2, 11, 10]}}"
        castShadow={true}
    />
    <T
        is={SpotLight}
        args={[0xffffff, 1]}
        position={[0, 1, 0]}
        lookAt="{[2, 11, 10]}}"
        castShadow={true}
    />
    <T.PerspectiveCamera
        makeDefault
        fov={50}
        position={[0.5, 2, 0]}
        rotation={{ x: 2 }}
    >
        <OrbitControls target={[-0.2, 0.2]} rotation={[2]} />
    </T.PerspectiveCamera>

    <GLTF castShadow receiveShadow url={"/wooden_table.glb"} scale={1} />

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
        rotation={[0, 1.5, 0]}
        position={[0.5, 1, 1]}
    />

    <GLTF
        castShadow
        receiveShadow
        url={"/carpet/scene.gltf"}
        useDraco
        scale={1}
        rotation={[0, 1.6, 0]}
        position={[-0.5, 0, -1]}
    />

    <GLTF
        castShadow
        receiveShadow
        url={"/cup_of_coffee.glb"}
        scale={0.00014}
        rotation={[0, -5, 0]}
        position={[0.53, 0.46, 0.2]}
    />

    <GLTF
        castShadow
        receiveShadow
        url={"/victorian_armchair/scene.gltf"}
        scale={0.4}
        useDraco
        position={[-1.45, 0.25, -1.5]}
        rotation={[0, 1.5, 0]}
    />

    <BoardScene boardConfig={defaultBoard} {gameId} />
</Canvas>
