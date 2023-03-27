import { writable } from 'svelte/store';
import { browser } from '$app/environment'; 

function getSafetyParsedJsonFromLocalStorage(key) {
    console.log(browser)
	if (browser) {
		const item = localStorage.getItem(key);
		let result = null;
		try {
			result = JSON.parse(item);
		} catch (e) {
			localStorage.setItem(key, null);
			return null;
		}
        console.log(result)
		return result;
	} else {
		return null
	}
}


/**
 *  Local Storage for debug flag
 */
export const authToken = writable(
	getSafetyParsedJsonFromLocalStorage('authToken')
);
authToken.subscribe((u) => {
	if (browser) {
		localStorage.setItem('authToken', JSON.stringify(u));
	}
});

export const replayState = writable({})