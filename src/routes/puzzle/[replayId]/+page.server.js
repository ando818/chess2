import { replayState } from '$lib/store'
import { get, writable } from 'svelte/store'

export function load({ params }) {
	console.log("params", params)

	let data = get(replayState)
	console.log(data, data[params.replayId])
	if (data[params.replayId]) {

		return {
			fen: data[params.replayId].fen,
			history: data[params.replayId].history,
			replayId: params.gameId

		};
	}

	return {
		replayId: params.replayId
	};
}
