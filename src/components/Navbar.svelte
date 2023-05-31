<script lang="ts">

  let authenticated = false;
  let userName = "";
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
                  if (data.err) authenticated = false;
                  else authenticated = true; userName = data.name;
            }).catch(e => { })
            )
            .catch(error => {
            
            })
    }

    async function Logout () {
        fetch("https://monkeybackend.rohanj.dev/api/login/logout", {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
            })
            .then(response =>
                response.json().then(data => {
                authenticated = false;
            }).catch(e => { alert("Error Occurred!")})
            )
            .catch(error => {
            alert("Error Occurred!");
            })
    }

    async function APScore () {
        fetch("https://monkeybackend.rohanj.dev/api/predictor/apscore", {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
            })
            .then(response =>
                response.json().then(data => {
                authenticated = false;
            }).catch(e => { alert("Error Occurred!")})
            )
            .catch(error => {
            alert("Error Occurred!");
            })
    }
  
</script>


<div class="navbar bg-green-800 p-2 fixed z-40 shadow-xl">
  <div class="navbar-start">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <div class="dropdown">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <!-- svelte-ignore a11y-missing-attribute -->
        <li><a href="/frq">FRQ</a></li>
      </ul>
    </div>

    <a href="/" class="btn btn-ghost normal-case text-xl">Macro Monkeys</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/frq">FRQ</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    {#if authenticated}
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="https://www.w3schools.com/howto/img_avatar.png" />
        </div>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li><button>{userName}</button></li>
        <li><a href="/profile">Profile</a></li>
        <li><button on:click={Logout}>Logout</button></li>
        <li><a href="/apscore">AP Score</a></li>
      </ul>
    </div>
    {:else}
    <div class="gap-2">
      <a href="/login" class="btn btn-ghost">Login</a>
      <a href="/signup" class="btn btn-primary">Signup</a>
    </div>
    {/if}
  </div>
</div>
