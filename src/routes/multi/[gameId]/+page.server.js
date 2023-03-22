
export function load({ params }) {
	console.log("params",params)

	return {
		gameId: params.gameId
	};
}
