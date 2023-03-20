<script lang="ts">
	import { useTweakpane } from "../useTweakpane";
	import { Canvas, Mesh, Object3DInstance } from "@threlte/core";
	import { Grid } from "@threlte/extras";
	import Scene from "../Scene.svelte";
	import { GLTF } from "@threlte/extras";
	import { LightInstance } from "@threlte/core";
	import { AmbientLight } from "three";
	import { onMount } from "svelte";
	import { jsonStream, readStream } from "../jsonStream";
	import { DirectionalLight, SpotLight } from "three";
	import { BoxBufferGeometry, MeshBasicMaterial } from "three";
	import { BoxGeometry } from "three";
	import { useGltf } from "@threlte/extras";
	import * as crypto from "crypto";
	import { authToken} from '$lib/store.js'

	let loaded = false;
	export let data;
	let gameId = data.gameId;


	const urlParams = new URLSearchParams(window.location.search);

	onMount(async () => {
		
		console.log($authToken)
		getOauthCode()
		const stream = fetch(
			`https://lichess.org/api/board/game/stream/${gameId}`,
			{
				headers: {
					Authorization: `Bearer ${$authToken}`,
				},
			}
		);

		const onMessage = (obj) => console.log(obj);
		const onComplete = () => console.log("The stream has completed");

		stream.then(readStream(readResponse));
	});

	async function getOauthCode() {
	}

	let moves = "";
	function readResponse(response) {
		console.log(response);
		if (response.type == "gameState") {
			moves = response.moves;
		} else if (response.type == "gameFull") {
			moves = response.state.moves;
			console.log("mpves", moves);
		}
		loaded = true;
	}

	const { pane, action, addInput } = useTweakpane({
		title: "Grid",
		expanded: false,
	});
	var light = new SpotLight(0xffffff);
	var light2 = new SpotLight(0xffffff);

	const cellFolder = pane.addFolder({
		title: "Cell settings",
	});
	const cellSize = addInput({
		label: "Cell size",
		value: 1,
		params: {
			step: 1,
			min: 1,
			max: 5,
		},
		parent: cellFolder,
	});
	const cellColor = addInput({
		label: "Cell color",
		value: `#FFFFFF`,
		parent: cellFolder,
	});

	const cellThickness = addInput({
		label: "Cell thickness",
		value: 1.4,
		params: {
			step: 0.1,
			min: 1,
		},
		parent: cellFolder,
	});

	const sectionFolder = pane.addFolder({
		title: "Section settings",
	});

	const sectionSize = addInput({
		label: "Section size",
		value: 0,
		params: {
			step: 1,
			min: 1,
			max: 50,
		},
		parent: sectionFolder,
	});
	const sectionColor = addInput({
		label: "Section color",
		value: `#FFFFFF`,
		parent: sectionFolder,
	});
	const sectionThickness = addInput({
		label: "Section thickness",
		value: 2,
		params: {
			step: 0.1,
			min: 1,
			max: 10,
		},

		parent: sectionFolder,
	});

	const generalFolder = pane.addFolder({
		title: "General settings",
	});

	const gridSize1 = addInput({
		label: "Grid size1",
		value: 8,
		params: {
			step: 1,
			min: 1,
			max: 100,
		},

		parent: generalFolder,
	});
	const gridSize2 = addInput({
		label: "Grid size2",
		value: 8,
		params: {
			step: 1,
			min: 1,
			max: 100,
		},
		parent: generalFolder,
	});

	const axes = addInput({
		label: "axes",
		value: "xzy",
		params: {
			options: {
				xzy: "xzy",
				xyz: "xyz",
				zyx: "zyx",
			},
		},
		parent: generalFolder,
	});
	$: axisTyped = $axes as "xzy" | "xyz" | "zyx";

	const followCamera = addInput({
		label: "followCamera",
		value: false,

		parent: generalFolder,
	});

	const infiniteGrid = addInput({
		label: "infiniteGrid",
		value: false,
		parent: generalFolder,
	});

	const fadeDistance = addInput({
		label: "fadeDistance",
		value: 100,
		params: {
			step: 10,
			min: 10,
			max: 400,
		},

		parent: generalFolder,
	});

	const fadeStregth = addInput({
		label: "fadeStregth",
		value: 1,
		params: {
			step: 0.1,
			min: 0,
			max: 20,
		},

		parent: generalFolder,
	});
</script>

<div use:action />

<Canvas linear flat>
	<LightInstance {light} intensity={1.2} position={{ z: 10, y: 10, x: 0 }} />
	<LightInstance
		light={light2}
		intensity={1.5}
		position={{ z: -10, y: 30, x: 0 }}
	/>

	/>

	<GLTF url="grass.glb" position={{ y: -9.6 }} scale={5} />

	<GLTF url="picnic_table.glb" position={{ y: -9.6 }} scale={17} />

	<!-- Example scene with boxes -->
	{#if loaded}
		<Scene {gameId} {moves} />
	{/if}
</Canvas>
