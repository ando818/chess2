<script>
	import * as Tone from "tone";

	const synth = new Tone.Synth().toDestination();
	//synth.triggerAttackRelease("C4", "8n");
	
	let s = ["on","t","off","off","off","on", 't','off','off','on']
	let notes = ["C","D","E","F","G","A","B"]


	function numToNote(num) {
		return notes[num]
	}

	let toPlay = []
	parse(s);

	play(0)
	function play(i) {
		if (i >= toPlay.length) {
			return;
		}
		let note = toPlay[i];
		console.log("note", note,i)
		if (note == 't') {
			setTimeout(() => play(i +1), 500)
		} else {
			const now = Tone.now()
			synth.triggerAttackRelease(`${note}4`, `8n`, now);
			play(i+1)
		}
	}
	
	function parse(arr) {

		let c = 0;
		for (let i=0; i<arr.length; i++) {
			let a = arr[i];
			if (a == 't') {
				toPlay.push("t")
			} else if (a == 'off') {
				c +=1
			} else {
				toPlay.push(numToNote(c));
				c = 0;
			}
		}
	}
	
	
</script>
