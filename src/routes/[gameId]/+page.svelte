<script lang="ts">
	import { Canvas, Mesh, Object3DInstance } from "@threlte/core";
	import Scene from "../Scene.svelte";
	import { GLTF } from "@threlte/extras";
	import { LightInstance } from "@threlte/core";
	import { AmbientLight } from "three";
	import { onMount } from "svelte";
	import { jsonStream, readStream } from "../jsonStream";
	import { DirectionalLight, SpotLight } from "three";
	import { authToken} from '$lib/store.js'

	let loaded = false;
	export let data;
	let gameId = data.gameId;


	const urlParams = new URLSearchParams(window.location.search);

	onMount(async () => {
		
		getOauthCode()
		const stream = fetch(
			`https://lichess.org/api/board/game/stream/${gameId}`,
			{
				headers: {
					Authorization: `Bearer ${$authToken}`,
				},
			}
		);

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
	var light = new SpotLight(0xffffff);
	var light2 = new SpotLight(0xffffff);




</script>


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
