<script lang="ts">
	import AttendeeList from './AttendeeList.svelte';
	import type { AttendeeData } from './AttendeeData';
	import { onMount } from 'svelte';

	// export let id: number;
	export let title: string;
	export let seriesName: string | null;
	export let timeslot: string;
	export let date: Date;
	export let location: string;
	export let description: string;
	export let attendees: AttendeeData[];

	let dateText: string;
	let timeText: string;

	onMount(async () => {
		const datePart = date.toISOString().substring(0, 10);
		const dayOfWeekName = date.toLocaleString(navigator.language, { weekday: 'long' });
		const hour = date.getHours().toString().padStart(2, '0');
		const minute = date.getMinutes().toString().padStart(2, '0');
		dateText = `${dayOfWeekName} ${datePart}`;
		timeText = `${hour}:${minute}`;
	});
</script>

<div class="eventDetails">
	<h1>Event Title: {title}</h1>
	<p>Series Name: {seriesName}</p>
	<p>Timeslot: {timeslot}</p>
	<p>Location: {location}</p>
	<p>Date: {dateText}</p>
	<p>Time: {timeText}</p>
	<p>Event Description: {description}</p>
	<hr />
</div>
<AttendeeList {attendees} />
