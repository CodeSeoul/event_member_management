<script lang="ts">
    let username = "";
    let email = "";
    let password = "";
</script>

<h1>Sign Up</h1>

<div class="form-container">
    <div class="wrap">
        <div class="form-inputs">
            <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    placeholder="Username"
            />
            <label for="username">Username</label>
        </div>

        <div class="form-inputs">
            <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Email"
            />
            <label for="email">Email</label>
        </div>

        <div class="form-inputs">
            <input
                    name="password"
                    id="password"
                    type="password"
                    value={password}
                    placeholder="Password"
            />
            <label for="password">Password</label>
        </div>
        <div>
            <button>Sign up</button>
        </div>
    </div>
</div>

<style>
    @import 'https://fonts.googleapis.com/css?family=Lato:300';

    .form-container {
        font-family: 'Lato', sans-serif;
        color: white;
        display: grid;
        place-items: center;
        background: blue;
        width: 100%;
        height: 500px;
        overflow: auto;
    }
    div.wrap {
        width: 58%;
        margin: 0 auto;
    }
    .form-inputs {
        display: flex;
        flex-direction: column-reverse;
        position: relative;
        margin: 40px 0;
        letter-spacing: 5px;
    }

    label {
        position: absolute;
        top: 0;
        font-size: 28px;
        margin: 10px;
        padding: 0 10px;
        background-color: blue;
        color: white;
        -webkit-transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out;
        transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out;
    }
    input:focus + label {
        top: -25px;
        font-size: 18px;
    }

    input[type='text'],
    input[type='password'] {
        width: 100%;
        padding: 20px;
        border: 1px solid white;
        font-size: 18px;
        background-color: blue;
        color: white;
    }

    input:focus {
        outline: none;
    }

    button {
        background-color: black;
        color: white;
        font-size: 18px;
        border-radius: 5px;
        padding: 0.5em 1.5em;

        outline: none;
        box-shadow: 0px 4px 10px #333;
    }
    button:hover {
        cursor: pointer;
        transition: all 0.5s;
        color: black;
        background-color: white;
    }
</style>
