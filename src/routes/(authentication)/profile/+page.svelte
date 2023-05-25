<!-- Profile.svelte -->
<script>
    let name = "";
    let password = "";
  
    async function post() {
      fetch("https://monkeybackend.rohanj.dev/api/login/authenticate", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, password: password })
      })
        .then(response =>
          response.json().then(data => {
            if (data.err) alert(data.err);
            else window.location.href = '/';
          }).catch(e => { window.location.href = '/' })
        )
        .catch(error => {
          alert("Error occurred!");
        });
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
    <h1 class="profile-title">Welcome, {name}!</h1>
  
    <div class="profile-info">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat accumsan nunc, in ullamcorper velit
        tristique et. Donec in arcu et risus lacinia facilisis. Morbi in diam ullamcorper, vulputate ligula a, cursus
        libero.
      </p>
      <p>
        Vestibulum lobortis elit risus, ac suscipit lacus accumsan id. Phasellus feugiat mi et est vehicula, non finibus
        turpis interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
    </div>
  
    <button class="logout-button" on:click={() => { window.location.href = '/login'; }}>Logout</button>
  </div>
  