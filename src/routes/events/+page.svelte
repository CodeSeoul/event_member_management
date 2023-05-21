<script lang="ts">
    import EventListItem from "$lib/EventListItem.svelte";

    export let data;
</script>

<h1>The Latest and Greatest CodeSeoul Events!</h1>

<div>
    {#if data.events && data.events.length === 0}
        <div>There are no events.</div>
    {:else}
        <div class="pancake-parent">
        {#each data.events as event, index}
            <EventListItem {...event} />
        {/each}
        </div>
    {/if}
</div>

<style>
    .pancake-parent {
        display: flex;
        flex-wrap: wrap;
    }
</style>
