<script>
    import { onMount } from "svelte";
    import { board2D } from "$lib/boards";
    import { ChessGame } from "$lib/engine";

    let fen;
    let Game;
    let board = [];

    let history = [];

    function initBoard(fen) {
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
        history.push(fen);

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

    function move(from, to) {
        try {
            let fromNotated = toNotation(from);
            let toNotated = toNotation(to);
            Game.move(fromNotated, toNotated);

            board[to.x][to.y] = board[from.x][from.y];
            board[from.x][from.y] = {
                type: null,
            };
            history.push({ fromNotated, toNotated });

        } catch (e) {}

    }



    let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    function toNotation(pos) {
        let letter = letters[pos.y];
        let number = pos.x;
        return `${letter}${8 - number}`;
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

    function replay() {

    }

    onMount(() => {
        let fen = "r4k1r/ppp2p1p/5qp1/2bP4/6b1/1BP2N2/PP4PP/R1BQR2K b - - 0 15";
        initBoard("r4k1r/ppp2p1p/5qp1/2bP4/6b1/1BP2N2/PP4PP/R1BQR2K/");
        Game = new ChessGame(fen);
    });
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
