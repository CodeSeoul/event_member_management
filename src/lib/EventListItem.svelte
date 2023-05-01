<script lang="ts">
    import { onMount } from "svelte";

    export let id: number;
    export let eventTitle: string;
    export let eventDate: Date;
    export let eventTimeslot: string;
    export let eventSeriesName: string|null;
    export let eventDescription: string;
    export let eventImage: string;

    let eventDateText = "";

    onMount(async () => {
        const datePart = eventDate.toISOString().substring(0, 10);
        const dayOfWeekName = eventDate.toLocaleString(navigator.language, {weekday: 'long'});
        const hour = eventDate.getHours().toString().padStart(2, "0");
        const minute = eventDate.getMinutes().toString().padStart(2, "0");
        eventDateText = `${dayOfWeekName} ${datePart} @ ${hour}:${minute}`;
    });
</script>

<a href="/events/{id}" class="event-tile">
    <div class="event">
        <div class="top">
            <p class="time">{eventDateText}</p>
            <p class="timeslot">{eventTimeslot}</p>
        </div>
        <div class="event-content">
            <div class="text-block">
                <div class="title-block">
                    <h1 class="title">{eventTitle}</h1>
                    <h3 class="series">{eventSeriesName || ""}</h3>
                </div>
                <p class="description">{eventDescription}</p>
            </div>
            <img class="image" src="{eventImage}" alt="Image for the {eventTitle} event">
        </div>
    </div>
</a>

<style>
    a {
        color: inherit;
        text-decoration: none;
    }

    .event-tile {
        min-width: 10em;
        max-width: 40%;
        height: 15em;
        flex: 1 1 300px;
        border-radius: 9px;
        text-align: left;
        border: 1px solid black;
        padding: 15px;
        margin-top: 8px;
        margin-left: 4px;
        margin-right: 4px;
    }

    .event {
        max-height: 100%;
    }

    .top {
        display: flex;
        justify-content: space-between;
    }

    .time {
        color: #2D3192;
        font-weight: bold;
    }

    .event-content {
        display: flex;
        max-height: inherit;
    }

    .text-block {
        flex-direction: column;
        max-height: inherit;
    }

    .title {
        margin: 0;
        padding: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .series {
        margin: 0;
        padding: 0;
    }

    .description {
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: inherit;
    }

    .image {
        max-width: 10em;
        max-height: 10em;
    }
</style>
