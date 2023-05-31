<script lang="ts">
	let authenticated = false;
	let userName = '';
	let updatedPassword = '';
	let currentPassword = '';
	let error = '';
	Fetch();

	async function Fetch() {
		fetch('https://monkeybackend.rohanj.dev/api/login/getYourUser', {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((response) =>
				response
					.json()
					.then((data) => {
						if (data.err) {
							authenticated = false;
						} else {
							authenticated = true;
							userName = data.name;
						}
					})
					.catch((e) => {})
			)
			.catch((error) => {});
	}

	async function updatePassword() {
		if (validate()) {
			fetch('https://monkeybackend.rohanj.dev/api/login/updatePassword', {
				method: 'POST',
				credentials: 'include',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ password: updatedPassword, currentPassword: currentPassword })
			})
				.then((response) =>
					response
						.json()
						.then((data) => {
							if (data.err) {
								authenticated = false;
							} else {
								authenticated = true;
								userName = data.name;
							}
						})
						.catch((e) => {})
				)
				.catch((error) => {});
		}
	}

	function validate() {
		if (updatedPassword == currentPassword) {
			error = 'New password cannot be the same as the current password.';
			return false;
		} else if (updatedPassword.length < 8) {
			error = 'New password must be at least 8 characters long.';
			return false;
		} else if (updatedPassword != currentPassword) {
			error = '';
			return true;
		}
	}
</script>

<div class="update-profile-container">
	{#if authenticated}
		<h1 class="update-profile-title">Change Password</h1>
		<div class="update-profile-field">
			<input
				bind:value={currentPassword}
				type="text"
				placeholder="Current Password"
				class="input w-full max-w-xs "
			/>
			<input type="text" placeholder="New Password" class="input w-full max-w-xs " />
			<input
				bind:value={updatedPassword}
				type="text"
				placeholder="Retype New Password"
				class="input w-full max-w-xs "
			/>

			<input
				type="button"
				value="Update"
				class="btn btn-primary my-4 w-full"
				on:click={updatePassword}
			/>

			<p class="text-red-500 text-xs italic">{error}</p>
		</div>
	{:else}
		<h1 class="profile-title">Please log in to view your profile.</h1>
		<div class="profile-info">
			<p>You are not authenticated.</p>
		</div>
	{/if}
</div>
