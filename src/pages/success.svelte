<script>
	import { functions } from './firebase';

	function sendEmail() {
		const callable = functions.httpsCallable('sendAway');
		return callable({ num: '5', name: 'Email from Svelte'}).then(console.log);
	}
	
</script>
<h2>SendGrid Transactional Email with Svelte</h2>

<button on:click={() => sendEmail()}>Send Email with Callable Function</button>
