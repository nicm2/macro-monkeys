<script lang="ts">

    let username : String;
    let password : String;
    let confirmPassword : String;
    let mergedPassword : String;

    async function post() {
        // /api/login/getYourUser
		fetch("https://monkeybackend.rohanj.dev/api/user/createPerson", {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: username, password: password})
            })
            .then(response => {
                console.log("in");
                if (response.status != 200) {
                    response.json().then(d => alert(d.err))
                }
            })
            .catch(error => {
                // handle the error
            });
	}

</script>

<form method="POST">
    <!-- Username/Email/Password/Confirm Boxes -->
    <input bind:value={username} type="text" placeholder="Username" class="input w-full max-w-xs my-4" name="username_box" />
    <input bind:value={password} type="password" placeholder="Password" class="input w-full max-w-xs" name="password_box" />
    <input bind:value={confirmPassword} type="password" placeholder="Confirm Password" class="input w-full max-w-xs my-4" name="confirm_box" />

    <!-- Submit Button -->
    <input type="button" value="Sign Up" class="btn btn-primary my-4 w-full" on:click={post} />
</form>

<!-- Login Redirect -->
<div class="divider h-0">OR</div>
<div class="self-center">
    Already have an account? <a class="underline" href="/login">Login</a>
</div>