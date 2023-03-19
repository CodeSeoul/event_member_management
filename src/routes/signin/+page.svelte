<script lang="ts">
    let username: string;
    let password: string;
</script>

<h1>Sign In</h1>

<div class="form-container">
    <div class="wrap">
        <div class="form-inputs">
            <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    id="username"
                    bind:value={username}
            />
            <label for="username">Username</label>
        </div>

        <div class="form-inputs">
            <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    bind:value={password}
            />
            <label for="password">Password</label>
        </div>
        <div class="tac">
            <button>Log in</button>
        </div>
    </div>
</div>
