<script lang="ts">
	export let title: string;
	export let text: string;
	export let link: string;
  export let level: string;
  let completed: Boolean;


  Fetch();
  
  async function Fetch () {
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
              if (data[level] == "Complete") completed = true;
              else completed = false;
        }).catch(e => { })
        )
        .catch(error => {
        
        })
    }
</script>

<div class="card w-96 bg-green-700 shadow-xl border-green-800 border-2">
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>{text}</p>
      {#if completed}
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check absolute right-7 top-5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      {/if}
      <div class="card-actions justify-end">
        <a href="/frq/{link}" class="btn btn-primary">Go</a>
      </div>
    </div>
  </div>