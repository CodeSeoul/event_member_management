<script lang="ts">
	import AttendeeList from './AttendeeList.svelte';
	import type { AttendeeData } from './AttendeeData';

	export let id: number;
	export let eventTitle: string;
	export let eventDate: Date;
	export let eventTime: Date;
	export let location: string;
	export let details: string;
	export let attendees: AttendeeData[];
</script>

<div class="eventDetails">
	<h1>Event Title: {eventTitle}</h1>
	<div>Event ID: {id}</div>
	<p>Location: {location}</p>
	<p>Date: {eventDate}</p>
	<p>Time: {eventTime}</p>
	<p>Event Details: {details}</p>
	<hr />
</div>
<AttendeeList {attendees} />
