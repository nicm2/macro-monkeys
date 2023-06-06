<script lang="ts">
  let authenticated = false;
  let userName = "";
  let levels = [];

  Fetch();

  async function Fetch() {
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
        }).catch(e => { })
      )
      .catch(error => { })
  }

  async function fetchLevels() {
    fetch("https://monkeybackend.rohanj.dev/api/code/getLevelList", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response =>
        response.json().then(data => {
          for (let level of data.levels) {
            let passedTestcases = data.status?.[level.number.toString()] !== undefined ? data.status?.[level.number.toString()] : -1;
            levels.push({ passedTestcases, totalTestcases: level.testcases, title: level.name, level: level.number.toString(), link: level.number.toString() });
          }
          levels = [...levels];
        })
        .catch(e => { })
      )
      .catch(error => { })
  }

  fetchLevels();

  async function Logout() {
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
        }).catch(e => {
          alert("Error Occurred!");
        })
      )
      .catch(error => {
        alert("Error Occurred!");
      })
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #34D399;
    font-family: Arial, sans-serif;
  }

  .profile-container {
    max-width: 400px;
    padding: 2rem;
    background-color: #FDE047;
    border: 2px solid #D69E2E;
    border-radius: 8px;
    text-align: center;
  }

  .profile-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #D69E2E;
  }

  .profile-info {
    margin-bottom: 1rem;
    color: #065F46;
  }

  .level-info {
    margin-bottom: 0.5rem;
    color: #065F46;
  }

  .logout-button {
    background-color: #2563EB;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  .logout-button:hover {
    background-color: #1d4ed8;
  }
</style>

<div class="profile-container">
  {#if authenticated}
    <h1 class="profile-title">Welcome, {userName}!</h1>
    <div class="profile-info">
      {#each levels as level}
        <p class="level-info">{level.title}: {level.passedTestcases}/{level.totalTestcases}</p>
      {/each}
    </div>
    <a href="/profile/update">
      <button class="btn btn-primary my-4 w-full">Update User Info</button>
    </a>
    <button class="logout-button" on:click={() => {Logout(); window.location.href = '/login'; }}>Logout</button>
  {:else}
    <h1 class="profile-title">Please log in to view your profile.</h1>
    <div class="profile-info">
      <p>
        You are not authenticated.
      </p>
    </div>
  {/if}
</div>
