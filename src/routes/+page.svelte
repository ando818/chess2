<script lang="ts">
	import { Canvas } from "@threlte/core";
	import { AmbientLight } from "three";
	import { onMount } from "svelte";
	import {HTML} from '@threlte/extras'
	import { jsonStream, readStream } from "./jsonStream";
	import { DirectionalLight, SpotLight } from "three";
	import { authToken } from "$lib/store.js";
	import { Button } from "carbon-components-svelte";
	import "carbon-components-svelte/css/white.css";

	let loaded = false;
	let accessToken;
	let gameId = "YxxQWemq";

	onMount(async () => {
		setTimeout(() => {
			loaded = true;
		}, 100);
	});

	let startTime = Date.now();

	async function streamGame() {
		const stream = fetch(
			`https://lichess.org/api/board/game/stream/${gameId}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		const onMessage = (obj) => console.log(obj);
		const onComplete = () => console.log("The stream has completed");

		stream.then(readStream(readResponse));
	}

	async function event() {
		const stream = fetch(`https://lichess.org/api/stream/event`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		stream.then(readStream(readResponse));
	}

	let finding = false;

	async function seek(time,increment) {
		finding = true;
		console.log("seek")

		let resp = await fetch("https://lichess.org/api/board/seek", {
			method: "POST",
			body: new URLSearchParams({
				rated:true,
				time,
				increment
			}),
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				Authorization: `Bearer lip_YsEt7QZd8auxRbXTTs54`,
			},
		});
	}
	let moves = "";

	let gameStarted = false;

	function readResponse(response) {
		console.log(response);
		if (response.type == "gameState") {
			moves = response.moves;
		} else if (response.type == "gameFull") {
			moves = response.state.moves;
			console.log("mpves", moves);
		} else if (response.type == "gameStart") {
			console.log(startTime);
			if (response.game.source == "lobby" || 
			response.game.source == "pool") {
				gameId = response.game.gameId;
				gameStarted = true;
				goto("/multi/"+gameId);
			}
		}
		loaded = true;
	}

	const trimArr = (arr, start, end) => {
		return arr.slice(start);
	};
	var light = new SpotLight(0xdad6c7);
	var light2 = new SpotLight(0xdad6c7);

	function onClick() {
	}

	let loggedIn = false;
	//Oauth

	function dec2hex(dec) {
		return ("0" + dec.toString(16)).substr(-2);
	}

	function generateCodeVerifier() {
		var array = new Uint32Array(56 / 2);
		window.crypto.getRandomValues(array);
		return Array.from(array, dec2hex).join("");
	}

	function sha256(plain) {
		// returns promise ArrayBuffer
		const encoder = new TextEncoder();
		const data = encoder.encode(plain);
		return window.crypto.subtle.digest("SHA-256", data);
	}

	function base64urlencode(a) {
		var str = "";
		var bytes = new Uint8Array(a);
		var len = bytes.byteLength;
		for (var i = 0; i < len; i++) {
			str += String.fromCharCode(bytes[i]);
		}
		return btoa(str)
			.replace(/\+/g, "-")
			.replace(/\//g, "_")
			.replace(/=+$/, "");
	}

	async function generateCodeChallengeFromVerifier(v) {
		var hashed = await sha256(v);
		var base64encoded = base64urlencode(hashed);
		return base64encoded;
	}

	const urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has("code")) {
		let code = urlParams.get("code");

		let state = urlParams.get("state");

		getAccessToken(code, state);
	}
	import { goto } from "$app/navigation";

	async function getAccessToken(code, verifier) {
		let scopes = "board:play";
		let resp = await fetch("https://lichess.org/api/token", {
			method: "POST",
			headers: {
				"content-type": "application/x-www-form-urlencoded",
			},
			body: `grant_type=authorization_code&code=${code}&code_verifier=${verifier}&redirect_uri=https://createlab.io/&client_id=lichess_park`,
		});

		let data = await resp.json();

		accessToken = data.access_token;
		$authToken = accessToken;
		console.log($authToken);
		event();
		loggedIn = true;
	}
	async function login() {
		let verifier = generateCodeVerifier();
		let codeChallenge = await generateCodeChallengeFromVerifier(verifier);

		let route = `https://lichess.org/oauth?response_type=code&client_id=lichess_park&redirect_uri=https://createlab.io/&code_challenge=${codeChallenge}&code_challenge_method=S256&state=${verifier}&scope=board:play`;
		goto(route);
	}
</script>

{#if loaded}
	<Canvas >
		{#if loggedIn}
			{#if !gameStarted}
				<HTML position={{ y: 2 }} scale={0.1} transform>
					<div>
						<Button
							kind="tertiary"
							style="width:100px; padding-left: 30px;"
							on:click={() => seek(10,0)}
							>10+0 Rapid</Button
						>
						<Button
							kind="tertiary"
							style="width:100px; padding-left: 30px;"
							on:click={() => seek(10,5)}

							>10+5 Rapid</Button
						>
						<Button
							kind="tertiary"
							style="width:100px; padding-left: 30px;"
							on:click={() => seek(15,5)}

							>15+5 Rapid</Button
						>
						<Button
							kind="tertiary"
							style="width:100px; padding-left: 25px;"
							on:click={() => seek(30,0)}

							>30+0 Classical</Button
						>
					</div>
				</HTML>
			{:else}
		
			{/if}
		{:else}
			<HTML position={{ y: 0, z: 1 }} transform>

				
			</HTML>
		{/if}
	</Canvas>
{/if}
