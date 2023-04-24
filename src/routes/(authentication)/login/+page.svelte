<script lang="ts">
    
    let name : String;
    let password : String;

    async function post() {
		fetch("https://monkeybackend.rohanj.dev/api/login/authenticate", {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, password: password})
            })
            .then(response =>
                response.json().then(data => {
                if (data.err) alert(data.err);
                else window.location.href = '/';
            }).catch(e => { window.location.href = '/' })
            )
            .catch(error => {
            alert("error occurred!");
            })
    }

</script>

<!-- Email and Password Box -->
<form method="POST">
	<input bind:value={name} type="text" placeholder="Username" class="input w-full max-w-xs " />
	<input bind:value={password} type="password" placeholder="Password" class="input w-full max-w-xs my-4" />

	<!-- Submit Button -->
	<input type="button" value="Login" class="btn btn-primary my-4 w-full" on:click={post} />
</form>

<!-- Signup Redirect -->
<div class="divider h-0">OR</div>
<div class="self-center text-center">
	Don't have an account? <a class="underline" href="/signup">Sign Up</a>
</div>