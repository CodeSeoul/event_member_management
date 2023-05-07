<script lang="ts">
    let username = "";
    let email = "";
    let password = "";
</script>

<h1>Sign Up</h1>

<div class="form-container">
    <div class="form-inputs">
        <label for="username">Username</label>
        <input
                type="text"
                name="username"
                id="username"
                value={username}
                placeholder="Username"
        />
    </div>

    <div class="form-inputs">
        <label for="email">Email</label>
        <input
                type="text"
                name="email"
                id="email"
                value={email}
                placeholder="Email"
        />
    </div>

    <div class="form-inputs">
        <label for="password">Password</label>
        <input
                name="password"
                id="password"
                type="password"
                value={password}
                placeholder="Password"
        />
    </div>
    <div class="button-container">
        <button>Sign up</button>
    </div>
</div>

<style>
    @import 'https://fonts.googleapis.com/css?family=Lato:300';

    .form-container {
        font-family: 'Lato', sans-serif;
        width: 58%;
        margin: 0 auto;
    }
    
    .form-inputs {
        margin: 2em 0;
    }

    label {
        font-size: 1.5em;
    }

    input[type='text'],
    input[type='password'] {
        width: 100%;
        margin-top: 1em;
        padding: 0.5em;
        font-size: 1.125em;
    }

    .button-container {
        display: flex;
        justify-content: end;
    }

    button {
        background-color: black;
        color: white;
        font-size: 1.125em;
        border-radius: 1em;
        padding: 0.5em 1.5em;

        box-shadow: 0 0.25em 0.625em #333;
    }

    button:hover {
        cursor: pointer;
        transition: all 0.5s;
        color: black;
        background-color: white;
    }
</style>
