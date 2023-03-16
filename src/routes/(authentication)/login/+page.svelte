<script lang="ts">
    
    let email : String;
    let password : String;

    async function post() {
		//signInWithEmail(email, password);
	}

</script>
		<!-- Email and Password Box -->
		<form method="POST">
			<input bind:value={email} type="text" placeholder="Email" class="input w-full max-w-xs " name="email_box" id="email_box" />
			<input bind:value={password} type="password" placeholder="Password" class="input w-full max-w-xs my-4" name="password_box" id="password_box" />

			<!-- Submit Button -->
			<input type="button" value="Login" class="btn btn-primary my-4 w-full" on:click={post} />
		</form>

		<!-- Signup Redirect -->
		<div class="divider h-0">OR</div>
		<div class="self-center text-center">
			Don't have an account? <a class="underline" href="/signup">Sign Up</a>
		</div>