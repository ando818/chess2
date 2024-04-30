<script>
    import { Canvas } from "@threlte/core";
    import { GLTF } from "@threlte/extras";
    import {
        DirectionalLight,
        SpotLight,
        HemisphereLight,
        MeshPhysicalMaterial,
        Color,
    } from "three";

    import { T} from "@threlte/core";
    import { useLoader } from '@threlte/core'

    import { BoxGeometry } from "three";
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
    import { interactivity } from '@threlte/extras'
  interactivity()
    import { authToken } from "$lib/store";
    import { jsonStream, readStream } from "./jsonStream";
    import {
        PerspectiveCamera,
        Group,
        MeshBasicMaterial,
        LineSegments,
    } from "three";
    import { onMount } from "svelte";
    import { useGltf } from '@threlte/extras'

    let play;

    export let boardConfig;
    export let gameId;

    let board = [];
    let meshes = {};

    let meshConfig = boardConfig.meshConfig;
    console.log("/"+boardConfig.modelSrc)
    const  gltf = useGltf("/"+boardConfig.modelSrc);

    let loaded = false;
    onMount(() => {
        console.log("auth", $authToken);
        initBoard();
        streamGame();
        loaded = true;
        setTimeout(() => {
            console.log(boardConfig.modelSrc, $gltf);
        }, 2000);
    });

    let id = 0;
    function createInitial(color) {
        let initialRow = [
            {
                type: "rook",
                color,
                id: id++,
            },
            {
                type: "knight",
                color,
                id: id++,
            },
            {
                type: "bishop",
                color,
                id: id++,
            },
            {
                type: "queen",
                color,
                id: id++,
            },
            {
                type: "king",
                color,
                id: id++,
            },
            {
                type: "bishop",
                color,
                id: id++,
            },
            {
                type: "knight",
                color,
                id: id++,
            },
            {
                type: "rook",
                color,
                id: id++,
            },
        ];
        return initialRow;
    }
    function createPawnRow(color) {
        let pawnRow = [];

        for (let i = 0; i < 8; i++) {
            pawnRow.push({
                type: "pawn",
                id: id++,
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
    let startPos = { y: 0.55, x: -0.21, z: 0.21 };

    let size = 0.06;
    function initBoard() {
        let nullRow = [];

        for (let i = 0; i < 8; i++) {
            nullRow.push({
                type: null,
                id: id++,
            });
        }

        board[0] = createInitial("white");
        board[1] = createPawnRow("white");
        board[2] = createNullRow();
        board[3] = createNullRow();
        board[4] = createNullRow();
        board[5] = createNullRow();
        board[6] = createPawnRow("black");
        board[7] = createInitial("black");

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let piece = board[i][j];

                piece.position = {
                    x: i,
                    y: j
                }
                meshes[piece.id] = {
                    position: [
                        startPos.x + i * 0.06,
                        startPos.y,
                        startPos.z - j * 0.06,
                ]
                };
            }
        }
    }

    let anim = 30;
    async function animate(piece, xSize, ySize, count = 0) {
        meshes[piece.id].position.x += xSize / anim;
        meshes[piece.id].position.z -= ySize / anim;
        if (count < anim) {
            setTimeout(() => {
                animate(piece, xSize, ySize, count + 1);
            }, 20);
        } else {
        }
    }

    function renderMoves(playSound) {
        if (moves) {
            let movesSplit = moves.split(" ");
            movesSplit.forEach((move) => {
                let pos1 = move.substring(0, 2);
                let pos2 = move.substring(2, 4);

                movePiece(toXY(pos1), toXY(pos2), playSound);
            });
        }
    }

    function renderMove() {
        if (moves && loaded) {
            let movesSplit = moves.split(" ");
            let newMove = movesSplit[movesSplit.length - 1];

            let pos1 = newMove.substring(0, 2);
            let pos2 = newMove.substring(2, 4);
            play();

            movePiece(toXY(pos1), toXY(pos2), true);
        }
    }

    function movePiece(from, to, playSound) {
        let pieceMoving = board[from.x][from.y];

        board[to.x][to.y] = copyPiece(board[from.x][from.y]);

        board[from.x][from.y].type = null;
        board[from.x][from.y].color = null;

        let xDelta = to.x - from.x;
        let yDelta = to.y - from.y;

        pieceMoving.position = {
            x: to.x,
            y: to.y
        }

        let rookPosition = checkCastle(from, to);
        animate(pieceMoving, xDelta * size, yDelta * size);

        if (playSound) {
        }

        board = board;
    }

    function streamGame() {
        const stream = fetch(
            `https://lichess.org/api/board/game/stream/${gameId}`,
            {
                headers: {
                    Authorization: `Bearer ${$authToken}`,
                },
            }
        );

        stream.then(readStream(readResponse));
    }
    function readResponse(response) {
        console.log(response);
        if (response.type == "gameState") {
            moves = response.moves;
            renderMove();
        } else if (response.type == "gameFull") {
            moves = response.state.moves;
            renderMoves();
        }
        loaded = true;
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
            letterNumber = 1;
        }
        if (letter == "b") {
            letterNumber = 2;
        }
        if (letter == "c") {
            letterNumber = 3;
        }
        if (letter == "d") {
            letterNumber = 4;
        }
        if (letter == "e") {
            letterNumber = 5;
        }
        if (letter == "f") {
            letterNumber = 6;
        }
        if (letter == "g") {
            letterNumber = 7;
        }
        if (letter == "h") {
            letterNumber = 8;
        }

        return {
            y: letterNumber,
            x: number,
        };
    }

    let moves;
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
            return true;
        }
    }

    let picked;
    function onClick(x, y) {
        console.log(x, y);
        if (!picked && board[x][y].type) {
            picked = {
                x,
                y,
            };
        } else if (picked) {
            let piece = board[picked.x][picked.y];

            let xDelta = x - picked.x;
            let first = toPos(picked.x, picked.y);
            let second = toPos(x, y);

            let made = makeMove(`${first}${second}`);
            picked = null;
        }
    }

    function checkCastle(from, to) {
        let x1;
        if (from.x == 0 && from.y == 4 && to.x == 0) {
            if (to.y == 6) {
                animate(board[0][7],0,-2*size)
                board[0][5] = copyPiece(board[0][7])
                board[0][7] = {
                    type:null
                };
            } if (to.y == 2) {
                animate(board[0][0],0,3*size)
                board[0][4] = copyPiece(board[0][0])
                board[0][0] = {
                    type:null
                };
            }
        }
        if (from.x == 7 && from.y == 4 && to.x == 7) {
            if (to.y == 6) {
                animate(board[7][7],0,-2*size)
                board[7][5] = copyPiece(board[7][7])
                board[7][7] = {
                    type:null
                };
            } if (to.y == 2) {
                animate(board[7][0],0,3*size)
                board[7][4] = copyPiece(board[7][0])
                board[7][0] = {
                    type:null
                };
            }

        }

        return false;
    }

    function copyPiece(piece) {
        return {
            type: piece.type,
            color: piece.color,
            id: piece.id,
        };
    }
</script>

{#if $gltf && loaded}

    <T.Mesh
        geometry={$gltf.nodes["Chess_Board_WoodDark_0"].geometry}
        material={$gltf.materials["WoodDark"]}
        scale={1}
        position={[0, 0.55,0]}
        rotation={[4.71,0,0]}
    />
    <T.Mesh
        geometry={$gltf.nodes["Chess_Board_Wood_0"].geometry}
        material={$gltf.materials["Wood"]}
        scale={1}
        position={[0,0.55,0]}
        rotation={[1.57,0,1.58]}
    />

    {#each board as col, x}
        {#each col as piece, y}
            <T.Mesh
                geometry={new BoxGeometry(0.06, 0.06, 0.06)}
                position={[
                    startPos.x + 0.01 + 0.06 * x,
                    startPos.y - 0.027,
                    startPos.z - 0.06 * y,
                ]}
                material={new MeshBasicMaterial({
                    opacity: 0,
                    transparent: true,
                })}
                interactive
                on:click={() => onClick(x, y)}
            />

            {#if piece.type != null && piece.type in meshConfig}
                <T.Mesh
                    castShadow
                    receiveShadow
                    geometry={$gltf.nodes[
                        meshConfig[piece.type][piece.color].name
                    ].clone().geometry}
                    material={$gltf.materials[
                        piece.color == "white" ? "Wood" : "WoodDark"
                    ]}
                    scale={1.25}
                    position={meshes[piece.id].position}
                    rotation={[-1.5,0,0] }
                    interactive
                    on:click={() => onClick(x, y)}
                />
            {/if}
        {/each}
    {/each}
{/if}
