<script>
	import '../app.css';
	import Header from '../lib/Header.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<Header />

<div class="content-container">
	<slot />
</div>

<Footer />

<style>
	.content-container {
		margin: auto;
		max-width: 70%;
	}
</style>
