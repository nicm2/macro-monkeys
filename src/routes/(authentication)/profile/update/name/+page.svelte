<script lang="ts">
    let authenticated = false;
    let userName = "";
    let updatedName = "";
    let error = "";
    Fetch();
  
    async function Fetch () {
      fetch("https://monkeybackend.rohanj.dev/api/login/getYourUser", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response =>
        response.json().then(data => {
          if (data.err) {
            authenticated = false;
          } else {
            authenticated = true;
            userName = data.name;
          }
        }).catch(e => {})
      )
      .catch(error => {})
    }

    async function updateUsername() {
      fetch("https://monkeybackend.rohanj.dev/api/login/updateUsername", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: updatedName})
      })
      .then(response =>
        response.json().then(data => {
          if (data.err != false) {
            error = data.err;
          } else {
            userName = updatedName;
          }
        }).catch(e => {})
      )
      .catch(error => {})
    }
</script>

<div class="update-profile-container">
    {#if authenticated}
      <h1 class="update-profile-title">Change Username</h1>
      <div class="update-profile-info">
        <p>
          Your current username is {userName}.
        </p>
      </div>
      <div class="update-profile-field">
        <input bind:value={updatedName} type="text" placeholder={userName} class="input w-full max-w-xs my-4 " />
        <input type="button" value="Update" class="btn btn-primary my-4 w-full" on:click={updateUsername} />
      </div>

      <p class="text-red-500 text-xs italic">{error}</p>
    {:else}
      <h1 class="profile-title">Please log in to view your profile.</h1>
      <div class="profile-info">
        <p>
          You are not authenticated.
        </p>
      </div>
    {/if}
  </div>