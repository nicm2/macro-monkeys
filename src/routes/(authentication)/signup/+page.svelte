<script lang="ts">

    let username : String;
    let email : String;
    let password : String;
    let confirmPassword : String;

    async function post() {
		//signUpWithEmail(email, password, username);
	}

</script>

<form method="POST">
    <!-- Username/Email/Password/Confirm Boxes -->
    <input bind:value={username} type="text" placeholder="Username" class="input w-full max-w-xs" name="username_box" />
    <input bind:value={email} type="text" placeholder="Email" class="input w-full max-w-xs my-4" name="email_box" />
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