<script lang="ts">
	export let title: string;
	export let text: string;
	export let link: string;
  export let level: string;
  let completed: Boolean;
  let categories: string[] = [];
  let passedTestcases = -1;
  let totalTestcases = -1;


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
              passedTestcases = data.status?.[level] !== undefined ? data.status?.[level] : -1;
	      let curLevel = data.levels.find(e => e.number === parseInt(level));
	      if (curLevel) {
	         categories = curLevel.categories.map(c => c.name)
		 totalTestcases = curLevel.testcases;
	      }
        }).catch(e => { })
        )
        .catch(error => {
        
        })
    }
</script>
<style>
	.category {
		color: #e8d125;
    border-radius: 15px;
    background: green;
    padding-right: 20px;
    display: inline-block;
    height: auto;
    width: fit-content;
    padding-left: 20px;
    padding: 10px;
	}
</style>
<div class="card w-96 bg-green-700 shadow-xl border-green-800 border-2">
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>{text}</p>
      {#if passedTestcases !== -1 && totalTestcases !== -1}
	    <p>{passedTestcases} / {totalTestcases}</p>
      {/if}
      {#each categories as category}
	    <p class = "category">{category}</p>
      {/each}
      <div class="card-actions justify-end">
        <a href="/frq/{link}" class="btn btn-primary">Go</a>
      </div>
    </div>
  </div>
