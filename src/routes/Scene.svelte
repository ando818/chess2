<script>
	import { PerspectiveCamera, Group, MeshBasicMaterial, LineSegments, EdgesGeometry } from 'three';

	import { Three } from '@threlte/core';
	import { GLTF, useGltfAnimations } from '@threlte/extras';
	import { BoxBufferGeometry } from 'three';

	import { OrbitControls , Mesh} from '@threlte/core';
	import { BoxGeometry } from 'three';
	import { onMount } from 'svelte';

	let currentActionKey = 'idle';

	const { gltf, actions } = useGltfAnimations(({ actions }) => {
		// Uncomment to see all the different possible action keys
		// console.log(actions);
		// set the initial animation
		actions[currentActionKey]?.play();
	});

    export let gameId;


	let moveIndex = 0;
	export let moves;
	let boardState = [];
	let positions = [];
	let loaded = false;

	onMount(() => {
		initBoard();
		boardState = boardState;
	});

	function createInitial(color) {
		let initialRow = [
			{
				type: 'rook',
				color
			},
			{
				type: 'knight',
				color
			},
			{
				type: 'bishop',
				color
			},
			{
				type: 'king',
				color
			},
			{
				type: 'queen',
				color
			},
			{
				type: 'bishop',
				color
			},
			{
				type: 'knight',
				color
			},
			{
				type: 'rook',
				color
			}
		];
		return initialRow;
	}
	function createPawnRow(color) {
		let pawnRow = [];

		for (let i = 0; i < 8; i++) {
			pawnRow.push({
				type: 'pawn',
				color
			});
		}
		return pawnRow;
	}
	function createNullRow() {
		let pawnRow = [];

		for (let i = 0; i < 8; i++) {
			pawnRow.push({
				type: null
			});
		}
		return pawnRow;
	}
	function initBoard() {
		let nullRow = [];

		for (let i = 0; i < 8; i++) {
			nullRow.push({
				type: null
			});
		}

		boardState[0] = createInitial('black');
		boardState[1] = createPawnRow('black');
		boardState[2] = createNullRow();
		boardState[3] = createNullRow();
		boardState[4] = createNullRow();
		boardState[5] = createNullRow();
		boardState[6] = createPawnRow('white');
		boardState[7] = createInitial('white');

		console.log('state', boardState[7][7]);
		boardState = boardState;
		positions = positions;

		renderMoves();

		loaded = true;
	}

	function movePawn() {}

	function getColor(x, y) {
		if (x % 2 == 0) {
			return y % 2 == 0 ? '#AF8E1A' : '#ECCF69';
		} else {
			return y % 2 == 0 ? '#ECCF69' : '#AF8E1A';
		}
	}
	function renderMoves() {
		if (moves) {
			console.log('yo', moves);
			let movesSplit = moves.split(' ');
			movesSplit.forEach((move) => {
				let pos1 = move.substring(0, 2);
				let pos2 = move.substring(2, 4);

				movePiece(toXY(pos1), toXY(pos2));
			});
		}
	}

	function renderMove() {
		if (moves && loaded) {
			let movesSplit = moves.split(' ');
			let newMove = movesSplit[movesSplit.length - 1];

			let pos1 = newMove.substring(0, 2);
			let pos2 = newMove.substring(2, 4);

			movePiece(toXY(pos1), toXY(pos2));
		}
	}

	function movePiece(from, to) {
		let pieceMoving = boardState[from.y][from.x];

		let copyPiece = boardState[from.y][from.x];

        console.log("Piece", copyPiece)
		boardState[to.y][to.x] = {
			type: copyPiece.type,
			color: copyPiece.color
		};
		boardState[from.y][from.x].type = null;
		boardState[from.y][from.x].color = null;

		boardState = boardState;
	}

    function toPos(y,x) {
        let letterNumber = '';
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
        return `${letterNumber}${8-y}`
    }
	function toXY(pos) {
		let letter = pos.substring(0, 1);
		let number = pos.substring(1, 2);

		let letterNumber;
		if (letter == 'a') {
			letterNumber = 0;
		}
		if (letter == 'b') {
			letterNumber = 1;
		}
		if (letter == 'c') {
			letterNumber = 2;
		}
		if (letter == 'd') {
			letterNumber = 3;
		}
		if (letter == 'e') {
			letterNumber = 4;
		}
		if (letter == 'f') {
			letterNumber = 5;
		}
		if (letter == 'g') {
			letterNumber = 6;
		}
		if (letter == 'h') {
			letterNumber = 7;
		}
		return {
			x: letterNumber,
			y: 8-number 
		};
	}

	let picked;
	function onClick(y,x) {
		console.log(picked, boardState[y][x].type);
		if (!picked && boardState[y][x].type) {
			console.log('jufjsjfii');
			picked = {
				x,
				y
			};
		} else if (picked) {
			console.log('moving', picked, x, y);

            let first = toPos(picked.y,picked.x)
            let second = toPos(y,x);

            makeMove(`${first}${second}`);

            picked = null;
		}
	}

    async function makeMove(move) {
        await fetch(`https://lichess.org/api/board/game/${gameId}/move/${move}`,
        {
            method:"POST",
            headers: {
				Authorization: `Bearer lip_YsEt7QZd8auxRbXTTs54`
            }
        })

    }

	$: moves, renderMove();
</script>

<Three type={PerspectiveCamera} makeDefault position={[0, 10, 20]} fov={36} target={[0, 0, 0]}>
	<OrbitControls />
</Three>

<!-- Make a box in every second cell to show aligment -->

{#if loaded}
	{#each { length: 8 } as h, x}
		{#each { length: 8 } as v, y}
			<Three
				type={Group}
				position={[x - 3.5, 0, y - 3.5]}
				scale={[1, 0.1, 1]}
				interactive
				on:change={() => onClick(y, x)}
			>
				<Mesh
					position={{ y: 1 }}
					geometry={new BoxGeometry(1, 2, 1)}
					material={new MeshBasicMaterial({ color: getColor(x, y) })}
					interactive
					on:click={() => onClick(y, x)}
				/>

	
			</Three>
			<Three type={Group} position={[x - 3.5, 0, y - 3.5]} }>
				{#if boardState[y][x].type == 'pawn'}
					<GLTF
						url={boardState[y][x].color == 'white' ? 'lego_stormtrooper.glb' : 'explorer.glb'}
						interactive
						position={boardState[y][x].color == 'white' ? { y: 0.1 } : { y: 0.6, x: 0.1, z: -0.2 }}
						scale={boardState[y][x].color == 'white' ? 0.025 : 0.3}
						rotation={boardState[y][x].color == 'white' ? { y: 3 } : { y: 0 }}
						on:click={() => onClick(y, x)}
						}
					/>
				{:else if boardState[y][x].type == 'knight'}
					<GLTF
						url={boardState[y][x].color == 'white' ? 'star_wars_knight.glb' : 'bb8_droid.glb'}
						interactive
						position="{{ y: 0, z: -0.4 }},"
						rotation={boardState[y][x].color == 'white' ? { y: 3 } : { y: 0 }}
						scale={boardState[y][x].color == 'white' ? 1.5 : 0.1}
						on:click={() => onClick(y, x)}
					/>
				{:else if boardState[y][x].type == 'rook'}
					<GLTF
						url={boardState[y][x].color == 'white' ? 'star_wars_rook.glb' : 'black_r2d2.glb'}
						interactive
						position={boardState[y][x].color == 'white' ? { y: -0.5, x: 7, z: 3.5 } : { y: 0.5 }}
						rotation={boardState[y][x].color == 'white' ? { y: 4.45 } : { y: 0 }}
						scale={boardState[y][x].color == 'white' ? 2 : 1}
						on:click={() => onClick(y, x)}
					/>
				{:else if boardState[y][x].type == 'queen'}
					<GLTF
						url={boardState[y][x].color == 'white' ? 'darth_vader.glb' : 'yoda.glb'}
						interactive
						rotation={boardState[y][x].color == 'white' ? { y: 3 } : { y: 0 }}
						position={boardState[y][x].color == 'white' ? { y: 0.1 } : { y: 0.5 }}
						scale={boardState[y][x].color == 'white' ? 0.04 : 0.35}
						on:click={() => onClick(y, x)}
					/>
				{:else if boardState[y][x].type == 'bishop'}
					<GLTF
						url={boardState[y][x].color == 'white'
							? 'star_wars_black_bishop.glb'
							: 'star_fighter.glb'}
						interactive
						rotation={boardState[y][x].color == 'white' ? { y: 3 } : { y: 0 }}
						position={boardState[y][x].color == 'white' ? { y: 1 } : { y: 0.5 }}
						scale={boardState[y][x].color == 'white' ? 0.11 : 0.0025}
						on:click={() => onClick(y, x)}
					/>
				{:else if boardState[y][x].type == 'king'}
					<GLTF
						url={boardState[y][x].color == 'white' ? 'star_wars_king.glb' : 'millenium.glb'}
						interactive
						rotation={boardState[y][x].color == 'white' ? { y: 3 } : { y: 0 }}
						position={boardState[y][x].color == 'white' ? { y: -3.5, x: 13.8, z: -7 } : { y: 0.5 }}
						scale={boardState[y][x].color == 'white' ? 1 : 0.0012}
						on:click={() => onClick(y, x)}
					/>
				{/if}
			</Three>
		{/each}
	{/each}
{/if}
