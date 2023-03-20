<script>
	import {
		PerspectiveCamera,
		Group,
		MeshBasicMaterial,
		LineSegments,
		EdgesGeometry,
	} from "three";
	import { PositionalAudio, AudioListener, Audio } from "@threlte/core";
	import { Three } from "@threlte/core";
	import { GLTF, useGltfAnimations } from "@threlte/extras";
	import { BoxBufferGeometry } from "three";
	import { Object3D } from "@threlte/core";
	import { OrbitControls, Mesh, Object3DInstance } from "@threlte/core";
	import { BoxGeometry } from "three";
	import { onMount } from "svelte";
	import { useGltf } from "@threlte/extras";
	import {authToken} from '$lib/store'
	let currentActionKey = "idle";

	export let gameId;

	let moveIndex = 0;
	export let moves;
	let boardState = [];
	let positions = [];
	let loaded = false;

	let gp;
	const { gltf } = useGltf("pieces.glb");

	let interval;
	window.addEventListener("gamepadconnected", (e) => {
		console.log(
			"Gamepad connected at index %d: %s. %d buttons, %d axes.",
			e.gamepad.index,
			e.gamepad.id,
			e.gamepad.buttons.length,
			e.gamepad.axes.length
		);
		gp = navigator.getGamepads()[e.gamepad.index];

		pollGamepads();

		console.log(gp.buttons);
	});

	setTimeout(() => {
		console.log($gltf);
	}, 3000);

	let selectedX = 2;
	let selectedY = 2;

	let lastPress;
	function pollGamepads() {
		requestAnimationFrame(pollGamepads);
		gp = navigator.getGamepads()[0];
		if (gp.buttons[0].pressed) {
			lastPress = 0;
		}

		if (gp.buttons[15].pressed) {
			lastPress = 15;
		}
		if (gp.buttons[14].pressed) {
			lastPress = 14;
		}

		if (gp.buttons[12].pressed) {
			lastPress = 12;
		}
		if (gp.buttons[13].pressed) {
			lastPress = 13;
		}

		if (!gp.buttons[0].pressed && lastPress == 0) {
			lastPress = null;
			pressX();
			console.log("press x");
		}
		if (!gp.buttons[15].pressed && lastPress == 15) {
			lastPress = null;
			console.log("press right");
			moveRight();
		}
		if (!gp.buttons[14].pressed && lastPress == 14) {
			lastPress = null;
			console.log("press left");
			moveLeft();
		}
		if (!gp.buttons[12].pressed && lastPress == 12) {
			lastPress = null;
			console.log("press up");
			moveUp();
		}
		if (!gp.buttons[13].pressed && lastPress == 13) {
			lastPress = null;
			console.log("press down");
			moveDown();
		}
	}

	function moveDown() {
		selectedY += 1;
		boardState = boardState;
	}

	function moveUp() {
		selectedY -= 1;
		boardState = boardState;
	}

	function moveLeft() {
		selectedX -= 1;
		boardState = boardState;
	}

	function moveRight() {
		selectedX += 1;
		boardState = boardState;
	}

	function pressX() {
		onClick(selectedY, selectedX);
	}

	onMount(() => {
		play = true;

		initBoard();
		boardState = boardState;
	});

	function createInitial(color) {
		let initialRow = [
			{
				type: "rook",
				color,
			},
			{
				type: "knight",
				color,
			},
			{
				type: "bishop",
				color,
			},
			{
				type: "queen",
				color,
			},
			{
				type: "king",
				color,
			},
			{
				type: "bishop",
				color,
			},
			{
				type: "knight",
				color,
			},
			{
				type: "rook",
				color,
			},
		];
		return initialRow;
	}
	function createPawnRow(color) {
		let pawnRow = [];

		for (let i = 0; i < 8; i++) {
			pawnRow.push({
				type: "pawn",
				color,
			});
		}
		return pawnRow;
	}
	function createNullRow() {
		let pawnRow = [];

		for (let i = 0; i < 8; i++) {
			pawnRow.push({
				type: null,
			});
		}
		return pawnRow;
	}
	function initBoard() {
		let nullRow = [];

		for (let i = 0; i < 8; i++) {
			nullRow.push({
				type: null,
			});
		}

		boardState[0] = createInitial("black");
		boardState[1] = createPawnRow("black");
		boardState[2] = createNullRow();
		boardState[3] = createNullRow();
		boardState[4] = createNullRow();
		boardState[5] = createNullRow();
		boardState[6] = createPawnRow("white");
		boardState[7] = createInitial("white");

		console.log("state", boardState[7][7]);
		boardState = boardState;
		positions = positions;

		renderMoves(false);

		loaded = true;
	}

	function movePawn() {}

	function getColor(x, y) {
		if (x % 2 == 0) {
			return y % 2 == 0 ? "#B06537" : "#EFB591";
		} else {
			return y % 2 == 0 ? "#EFB591" : "#B06537";
		}
	}
	function renderMoves(playSound) {
		if (moves) {
			console.log("yo", moves);
			let movesSplit = moves.split(" ");
			movesSplit.forEach((move) => {
				let pos1 = move.substring(0, 2);
				let pos2 = move.substring(2, 4);

				movePiece(toXY(pos1), toXY(pos2),playSound);
			});
		}
	}

	function renderMove() {
		if (moves && loaded) {
			let movesSplit = moves.split(" ");
			let newMove = movesSplit[movesSplit.length - 1];

			let pos1 = newMove.substring(0, 2);
			let pos2 = newMove.substring(2, 4);

			movePiece(toXY(pos1), toXY(pos2), true);
		}
	}

	function movePiece(from, to, playSound) {
		let pieceMoving = boardState[from.y][from.x];

		let copyPiece = boardState[from.y][from.x];

		console.log("Piece", copyPiece);
		console.log("to", boardState[to.y][to.x]);
		console.log("from", boardState[from.y][from.x]);
		boardState[to.y][to.x] = {
			type: copyPiece.type,
			color: copyPiece.color,
		};
		boardState[from.y][from.x].type = null;
		boardState[from.y][from.x].color = null;

		if (playSound) {
		play();
		}

		boardState = boardState;
	}

	function toPos(y, x) {
		let letterNumber = "";
		if (x == 0) {
			letterNumber = "a";
		}
		if (x == 1) {
			letterNumber = "b";
		}
		if (x == 2) {
			letterNumber = "c";
		}
		if (x == 3) {
			letterNumber = "d";
		}
		if (x == 4) {
			letterNumber = "e";
		}
		if (x == 5) {
			letterNumber = "f";
		}
		if (x == 6) {
			letterNumber = "g";
		}
		if (x == 7) {
			letterNumber = "h";
		}
		return `${letterNumber}${8 - y}`;
	}
	function toXY(pos) {
		let letter = pos.substring(0, 1);
		let number = pos.substring(1, 2);

		let letterNumber;
		if (letter == "a") {
			letterNumber = 0;
		}
		if (letter == "b") {
			letterNumber = 1;
		}
		if (letter == "c") {
			letterNumber = 2;
		}
		if (letter == "d") {
			letterNumber = 3;
		}
		if (letter == "e") {
			letterNumber = 4;
		}
		if (letter == "f") {
			letterNumber = 5;
		}
		if (letter == "g") {
			letterNumber = 6;
		}
		if (letter == "h") {
			letterNumber = 7;
		}
		return {
			x: letterNumber,
			y: 8 - number,
		};
	}

	let picked;
	function onClick(y, x) {
		if (!picked && boardState[y][x].type) {
			console.log("jufjsjfii");
			picked = {
				x,
				y,
			};
		} else if (picked) {
			console.log("moving", picked, x, y);

			let first = toPos(picked.y, picked.x);
			let second = toPos(y, x);

			makeMove(`${first}${second}`);

			picked = null;
		}
	}

	async function makeMove(move) {
		let resp = await fetch(
			`https://lichess.org/api/board/game/${gameId}/move/${move}`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${$authToken}`,
				},
			}
		);
		if (resp.ok) {
			play();
		}
	}

	$: moves, renderMove();

	let audio;
	let map = {
		bishop: {
			white: "Object002_02_-_Default_0",
			black: "Object043_03_-_Default_0",
		},
		pawn: {
			white: "Object004_02_-_Default_0",
			black: "Object050_03_-_Default_0",
		},
		knight: {
			white: "Cylinder004_02_-_Default_0",
			black: "Cylinder005_03_-_Default_0",
		},
		king: {
			white: "Object006_02_-_Default_0",
			black: "Object046_03_-_Default_0",
		},
		rook: {
			white: "Object034_02_-_Default_0",
			black: "Object047_03_-_Default_0",
		},
		queen: {
			white: "Object005_02_-_Default_0",
			black: "Object045_03_-_Default_0",
		},
	};

	function playaudio() {
		console.log('jij')
	}

	let play = false;
</script>

<Three
	type={PerspectiveCamera}
	makeDefault
	position={[20, 15, 4]}
	rotation={{x:2}}
	fov={50}
	target={[10, 10, 10]}
>
	<AudioListener id="ear" />

	<OrbitControls />
</Three>

<!-- Make a box in every second cell to show aligment -->

<Three type={Group} position={[0, 3.8, 0]}>

	{#if $gltf}<Object3DInstance
			object={$gltf.nodes["Object030_01_-_Default_0"]}
			scale={{ y: 0.043, z: 0.043, x: 0.043 }}
			position={{ y: 0 }}
			rotation={{ x: 1.55, y: 3.15 }}
		/>
	{/if}
	{#if loaded}
	<Audio  autoplay loop id="ear" source={"birds.mp3"}/>
	<Audio  id="ear" source={"move-self.mp3"} bind:this={audio} bind:play={play}/>

		{#each { length: 8 } as h, x}
			{#each { length: 8 } as v, y}
				<Three
					type={Group}
					position={[x - 3.5, 0, y - 3.5]}
					scale={[1, 0.1, 1]}
					interactive
					on:change={() => onClick(y, x)}
				>
					{#if x == selectedX && y == selectedY && 5<3}
						<Mesh
							position={{ y: 2 }}
							geometry={new BoxGeometry(1, 1, 1)}
							material={new MeshBasicMaterial({ color: "red" })}
						/>
					{/if}
					{#if picked && x == picked.x && y == picked.y}
						<Mesh
							position={{ y: 2 }}
							geometry={new BoxGeometry(1, 1, 1)}
							material={new MeshBasicMaterial({ color: "green" })}
							}
						/>
					{/if}

					<Mesh
						position={{ y: 1 }}
						geometry={new BoxGeometry(1, 2, 1)}
						material={new MeshBasicMaterial({
							color: getColor(x, y),
						})}
						interactive
						on:click={() => onClick(y, x)}
					/>
				</Three>

				{#if $gltf}
					<Three type={Group} position={[x - 3.5, 0, y - 3.5]} }>
						{#if boardState[y][x].type == "pawn"}
							<Object3DInstance
								object={$gltf.nodes[
									map[boardState[y][x].type][
										boardState[y][x].color
									]
								].clone()}
								rotation={{ x: 4.65 }}
								position={{ y: 0.1, z: -1.55 }}
								scale={{ y: 0.045, z: 0.08, x: 0.045 }}
							/>
						{:else if boardState[y][x].type == "knight"}
							<Object3DInstance
								object={$gltf.nodes[
									map[boardState[y][x].type][
										boardState[y][x].color
									]
								].clone()}
								position={{ y: 0.2 }}
								rotation={boardState[y][x].color == "black"
									? { x: 4.65, z: 3 }
									: { x: 4.65, z: 0 }}
								scale={{y:0.04,z:0.05, x:0.04}}
							/>
						{:else if boardState[y][x].type == "rook"}
							<Object3DInstance
								object={$gltf.nodes[
									map[boardState[y][x].type][
										boardState[y][x].color
									]
								].clone()}
								position={boardState[y][x].color == "black"
									? { y: 0.2, x: 0, z: 0 }
									: { y: 0.2, x: 0, z: 0 }}
								rotation={boardState[y][x].color == "black"
									? { x: 4.65, z: 0 }
									: { x: 4.65, z: 0 }}
								scale={{ y: 0.045, z: 0.06, x: 0.045 }}
							/>
						{:else if boardState[y][x].type == "queen"}
							<Object3DInstance
								object={$gltf.nodes[
									map[boardState[y][x].type][
										boardState[y][x].color
									]
								].clone()}
								position={boardState[y][x].color == "black"
									? { y: 0.1, x: 1.3, z: -1.5 }
									: { y: 0.1, x: 1.3, z: -1.5 }}
								rotation={boardState[y][x].color == "black"
									? { x: 4.65, z: 0 }
									: { x: 4.65, z: 0 }}
								scale={{ y: 0.045, z: 0.06, x: 0.045 }}
							/>
						{:else if boardState[y][x].type == "bishop"}
							<Object3DInstance
								object={$gltf.nodes[
									map[boardState[y][x].type][
										boardState[y][x].color
									]
								].clone()}
								position={boardState[y][x].color == "black"
									? { y: 0.1, x: 0, z: -1.55 }
									: { y: 0.1, x: 0, z: -1.55 }}
								rotation={boardState[y][x].color == "black"
									? { x: 4.65, z: 0 }
									: { x: 4.65, z: 0 }}
								scale={{ y: 0.045, z: 0.055, x: 0.045 }}
							/>
						{:else if boardState[y][x].type == "king"}
							<Object3DInstance
								object={$gltf.nodes[
									map[boardState[y][x].type][
										boardState[y][x].color
									]
								].clone()}
								position={boardState[y][x].color == "black"
									? { y: 0.1, x: 0, z: -1.55 }
									: { y: 0.1, x: 0, z: -1.55}}
								rotation={boardState[y][x].color == "black"
									? { x: 4.65, z: 0 }
									: { x: 4.65, z: 0 }}
								scale={{ y: 0.045, z: 0.06, x: 0.045 }}
							/>
						{/if}
					</Three>
				{/if}
			{/each}
		{/each}
	{/if}
</Three>
