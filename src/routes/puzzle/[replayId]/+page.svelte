<script>
    import { onMount } from "svelte";
    import { board2D } from "$lib/boards";
    import { ChessGame } from "$lib/engine";
    import html2canvas from "html2canvas";
    import { replayState } from "$lib/store";
    import gifshot from "gifshot";

    export let data;

    let fen = "r4k1r/ppp2p1p/5qp1/2bP4/6b1/1BP2N2/PP4PP/R1BQR2K b - - 0 15";
    let Game;
    let board = [];
    console.log("dat",data)

    let history = data.history ? data.history : []

    let images = [];
    function initBoard(fen) {
        board = [];
        let row = [];
        for (let i = 0; i < fen.length; i++) {
            let c = fen[i];
            if (c == "/") {
                board.push(row);
                row = [];
            } else if (!c.match("[0-9]")) {
                row.push({
                    type: c,
                });
            } else {
                let n = Number(c);
                for (let k = 0; k < n; k++) {
                    row.push({
                        type: null,
                    });
                }
            }
        }

        board = board;
    }

    let dark = "A76136";
    let light = "632701";

    function getColor(x, y) {
        if (x % 2 == 0) {
            return y % 2 == 0 ? dark : light;
        } else {
            return y % 2 == 0 ? light : dark;
        }
    }

    let selected;

    function move(from, to, updateHistory = true) {
        try {
            console.log(from, to);
            let fromNotated = toNotation(from);
            let toNotated = toNotation(to);
            Game.move(fromNotated, toNotated);

            board[to.x][to.y] = board[from.x][from.y];
            board[from.x][from.y] = {
                type: null,
            };
            if (updateHistory) {
                history.push({ fromNotated, toNotated });
            }
        } catch (e) {
            console.log(e);
        }
    }

    let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    function toNotation(pos) {
        let letter = letters[pos.y];
        let number = pos.x;
        return `${letter}${8 - number}`;
    }

    function toPos(notation) {
        let first = notation.substring(0, 1);
        let second = notation.substring(1, 2);

        let y = letters.findIndex((letter) => letter == first);
        let x = 8 - second;
        return { x, y };
    }

    function click(x, y) {
        if (selected && (x != selected.x || y != selected.y)) {
            move(selected, { x, y });
            selected = null;
        } else if (board[x][y].type) {
            selected = {
                x,
                y,
            };
        }
    }

    async function replay() {
        Game = new ChessGame(fen);
        initBoard("r4k1r/ppp2p1p/5qp1/2bP4/6b1/1BP2N2/PP4PP/R1BQR2K/");
        setTimeout(async () => {
            let data = await takeScreenshot();
            images.push(data);
        }, 50);

        for (let i = 0; i < history.length; i++) {
            let m = history[i];
            setTimeout(async () => {
                console.log(m);
                move(toPos(m.fromNotated), toPos(m.toNotated), false);
                setTimeout(async () => {
                    let image = await takeScreenshot();
                    images.push(image);
                    images = images;
                }, 100);
            }, 500 + i * 500);
        }

        let nodes = document.getElementsByClassName("image");
        images = images;

        fetch("./abc", {
            method: "POST",
            body: JSON.stringify({
                fen,
                history,
                route: data.replayId
            })
        });
        $replayState["abc"] = {
            fen,
            history,
        };

        console.log($replayState);
    }

    onMount(() => {
        initBoard("r4k1r/ppp2p1p/5qp1/2bP4/6b1/1BP2N2/PP4PP/R1BQR2K/");
        Game = new ChessGame(fen);
    });

    async function takeScreenshot() {
        return html2canvas(document.querySelector(".board"), {
            scale: 0.5,
        }).then((canvas) => {
            console.log("canvas", canvas);
            const base64image = canvas.toDataURL("image/jpg");
            return base64image;
        });
    }
</script>

<div class="board">
    {#each board as row, x}
        {#each row as col, y}
            <div
                style={`background: #${getColor(x, y)}; display: flex`}
                class={selected && selected.x == x && selected.y == y
                    ? "selected"
                    : ""}
                on:click={() => click(x, y)}
            >
                {#if board[x][y].type && board2D[board[x][y].type]}
                    <img
                        style="margin:auto;"
                        src={board2D[board[x][y].type].src}
                    />
                {/if}
            </div>
        {/each}
    {/each}
</div>

<button on:click={() => replay()}>Replay</button>

<style>
    .dark {
        background: black;
    }

    .light {
        background: white;
    }
    .board {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        width: 600px;
        height: 600px;
    }

    .selected {
        background: green !important;
    }
</style>
