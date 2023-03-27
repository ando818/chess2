import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import seqPreprocessor from 'svelte-sequential-preprocessor'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: seqPreprocessor([]),
	
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		})
	}
};

export default config;
