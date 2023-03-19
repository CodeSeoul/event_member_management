<script>
    import Attendee from "./Attendee.svelte";

    export let attendees;
</script>

<div>
    <h3>List of Attendees</h3>
    <div class="flex-container">
        {#if attendees.length === 0}
            <div>There are no attendees.</div>
        {:else}
            <div class="pancake-parent">
                {#each attendees as attendee, index}
                    <Attendee index={index} {...attendee} />
                {/each}
            </div>
        {/if}
    </div>
</div>
