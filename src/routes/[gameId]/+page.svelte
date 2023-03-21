<script lang="ts">
	import { Canvas, Mesh, Object3DInstance } from "@threlte/core";
	import Scene from "../Scene.svelte";
	import { GLTF } from "@threlte/extras";
	import { LightInstance, Three } from "@threlte/core";
	import { AmbientLight } from "three";
	import { onMount } from "svelte";
	import { jsonStream, readStream } from "../jsonStream";
	import {
		DirectionalLight,
		SpotLight,
		HemisphereLight,
		DirectionalLight,
	} from "three";
	import { authToken } from "$lib/store.js";

	let loaded = false;
	export let data;
	let gameId = data.gameId;

	const urlParams = new URLSearchParams(window.location.search);

	onMount(async () => {
		getOauthCode();
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

	async function getOauthCode() {}

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

<Canvas shadows >
	<Three type={DirectionalLight} args={[0xffffff, 1.5]} position={[0, 30, 30]} lookAt={[2,11,10]}}
	castShadow={true} />
	<Three type={HemisphereLight} args={[0xffffff, 0.1]} position={[0, 20, 0]}/>

	<GLTF     url="office_room2.glb" position={{ y: 0 }} scale={18} />

	<!-- Example scene with boxes -->
	{#if loaded}
		<Scene {gameId} {moves} />
	{/if}
</Canvas>
