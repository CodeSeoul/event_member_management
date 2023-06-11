<script>
	import '../app.css';
	import Header from '../lib/Header.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<Header />

<!-- SVH is a new CSS measure unit for mobile devices https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units_based_on_viewport -->
<div class="min-h-[calc(100svh-248px)] m-auto max-w-[70%]">
	<slot />
</div>

<Footer />
