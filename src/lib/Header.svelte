<script>
    import Search from "./Search.svelte";
    import Navbar from "./Navbar.svelte";
</script>

<div class="header">
    <div class="container">
        <img src="logo_small.png" alt="Small CodeSeoul Logo" />
        <Navbar />
    </div>
</div>

<style>
    .header {
        border-bottom: 0.2rem solid #ED1B24;
        height: 5rem;
    }

    .container {
        display: flex;
        margin: auto;
        width: 60%;
        align-items: center;
        justify-content: space-between;
    }

    img {
        width: 14rem;
        vertical-align: middle;
        border-style: none;
    }
</style>
