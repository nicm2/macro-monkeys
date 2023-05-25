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
  <div class="flex flex-col w-screen h-full justify-start py-24 gap-10 bg-green-600">
    <div class="flex self-center w-96 md:w-1/2 gap-8 h-fit">
      <div class="flex flex-col self-center bg-yellow-300 border-yellow-600 border-2 rounded-lg shadow-xl w-full h-fit p-8 text-2xl text-center font-bold text-yellow-600">
        <!-- Profile Title -->
        <h1>Welcome, {name}!</h1>
      </div>
    </div>
  
    <div class="flex flex-col bg-green-700 border-green-800 border-2 rounded-lg shadow-xl w-96 md:w-1/2 h-fit self-center p-8">
      <!-- Profile Information -->
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
  </div>
  
  <!-- Logout Button -->
  <button on:click={() => { window.location.href = '/login'; }} class="btn btn-primary mt-4 mx-auto">Logout</button>
  
  <style>
    /* Add your custom styles here */
  </style>
  