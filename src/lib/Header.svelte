<script>
    import Search from "./Search.svelte";
    import Navbar from "./Navbar.svelte";
</script>

<div class="tac">
    <h1>Event Manager</h1>
    <Search />
    <Navbar />
</div>

<style>
    @import 'https://fonts.googleapis.com/css?family=Arvo&display=swap';

    nav.main-navbar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 30px 0 30px 0;
        text-align: center;
        font-size: 16px;
    }
    nav.main-navbar > a {
        border-left: 2px solid #3ca0e7;
        padding-left: 0 30px;
        text-decoration: none;
        text-align: center;
        font-family: arvo;
        color: black;
        width: 120px;
    }
    nav.main-navbar a:hover {
        color: #3ca0e7;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: underline;
    }
    nav.main-navbar a:nth-last-child(1) {
        border-right: 2px solid #3ca0e7;
    }
</style>
