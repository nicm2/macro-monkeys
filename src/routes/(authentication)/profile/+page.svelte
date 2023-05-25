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
  
  <!-- Profile Content -->
  <div class="flex flex-col items-center justify-center h-screen bg-green-600">
    <div class="max-w-md bg-yellow-300 border-yellow-600 border-2 rounded-lg shadow-xl p-8 text-2xl text-center font-bold text-yellow-600">
      <!-- Profile Title -->
      <h1>Welcome, {name}!</h1>
    </div>
  
    <div class="max-w-md mt-8 bg-green-700 border-green-800 border-2 rounded-lg shadow-xl p-8">
      <!-- Profile Information -->
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat accumsan nunc, in ullamcorper velit
        tristique et. Donec in arcu et risus lacinia facilisis. Morbi in diam ullamcorper, vulputate ligula a, cursus
        libero.
      </p>
      <p>
        Vestibulum lobortis elit risus, ac suscipit lacus accumsan id. Phasellus feugiat mi et est vehicula, non finibus
        turpis interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
    </div>
  
    <!-- Logout Button -->
    <button on:click={() => { window.location.href = '/login'; }} class="btn btn-primary mt-4">Logout</button>
  </div>
  
  <style>
    body {
      margin: 0;
      padding: 0;
    }
  
    .flex {
      display: flex;
    }
  
    .flex-col {
      flex-direction: column;
    }
  
    .items-center {
      align-items: center;
    }
  
    .justify-center {
      justify-content: center;
    }
  
    .h-screen {
      height: 100vh;
    }
  
    .bg-green-600 {
      background-color: #34D399;
    }
  
    .max-w-md {
      max-width: 28rem;
    }
  
    .bg-yellow-300 {
      background-color: #FDE047;
    }
  
    .border-yellow-600 {
      border-color: #D69E2E;
    }
  
    .text-yellow-600 {
      color: #D69E2E;
    }
  
    .bg-green-700 {
      background-color: #065F46;
    }
  
    .border-green-800 {
      border-color: #047857;
    }
  
    .text-center {
      text-align: center;
    }
  
    .text-2xl {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  
    .p-8 {
      padding: 2rem;
    }
  
    .mb-4 {
      margin-bottom: 1rem;
    }
  
    .btn {
      background-color: #2563EB;
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      cursor: pointer;
    }
  
    .btn-primary {
      background-color: #2563EB;
    }
  
    .mt-4 {
      margin-top: 1rem;
    }
  </style>
  