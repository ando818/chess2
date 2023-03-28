import { replayState } from '$lib/store'
import { get, writable } from 'svelte/store'

export function load({ params, url}) {

	let fen = url.searchParams.get('fen')

	console.log(fen)
	let data = get(replayState)
	if (data[params.replayId]) {
		fen = data[params.replayId].fen
		return {
			fen: data[params.replayId].fen,
			history: data[params.replayId].history,
			replayId: params.gameId
		};
	}

	return {
		fen: fen,
		replayId: params.replayId
	};
}
