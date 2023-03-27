import {replayState} from '$lib/store'
export function load({ params }) {
	console.log("params",params)

	return {
		gameId: params.gameId
	};
}
