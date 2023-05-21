<script>
	import EventDetail from '../../../lib/EventDetail.svelte';

	export let data;
</script>

<h1>Event Detail</h1>

<EventDetail {...data} />
