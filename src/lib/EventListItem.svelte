<script lang="ts">
    export let id: number;
    export let eventTitle: string;
    export let eventDate: Date;
    export let eventTime: Date;
    export let location: string;
</script>

<div class="pancake-child event" >
    <h4>
        <a href="/events/{id}">{eventTitle}</a>
    </h4>
    <p>Location: {location}</p>
    <p>Date: {eventDate}</p>
    <p>Time: {eventTime}</p>
</div>

<style>
    .pancake-child {
        flex: 1 1 300px;
        border-radius: 9px;
        background: #8093ff;
        text-align: center;
    }

    .event {
        border: 1px solid black;
        padding: 15px;
        margin-top: 8px;
        margin-left: 4px;
        margin-right: 4px;
    }
</style>
