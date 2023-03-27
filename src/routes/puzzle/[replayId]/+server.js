import { json } from '@sveltejs/kit';
import {replayState} from '$lib/store'
import {get, readable, writable} from 'svelte/store'


/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const data = await request.json();

  let replay = get(replayState);
  replay[data.route] = data
  replayState.set(replay)
}