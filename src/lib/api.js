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