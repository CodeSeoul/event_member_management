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
        display: flex;
        width: 40%;
        height: 15em;
        border-radius: 9px;
        text-align: left;
        border: 1px solid black;
        padding-left: 1em;
        padding-right: 1em;
        margin-top: 0.75em;
        margin-left: 1em;
        margin-right: 1px;
    }

    .event {
        display: flex;
        flex-direction: column;
        /* https://stackoverflow.com/a/11226029 */
        flex-grow: 1;
    }

    .top {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    .time {
        color: #2D3192;
        font-weight: bold;
    }

    .event-content {
        display: flex;
        flex-grow: 1;
        /* https://stackoverflow.com/a/66689926 */
        min-height: 0;
    }

    .text-block {
        display: flex;
        flex-direction: column;
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
    }

    .image {
        max-width: 10em;
        max-height: 10em;
    }
</style>
