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
        <div class="tac">
            <button>Sign up</button>
        </div>
    </div>
</div>
