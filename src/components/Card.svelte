<script lang="ts">
	export let title: string;
	export let text: string;
	export let link: string;
	export let level: string;
	export let categories: string[] = [];
	export let passedTestcases = -1;
	export let totalTestcases = -1;
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
