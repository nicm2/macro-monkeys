<script lang="ts">
	export let title: string;
	export let text: string;
	export let link: string;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>{text}</p>
      <div class="card-actions justify-end">
        <a href="/frq/{link}" class="btn btn-primary">Go</a>
      </div>
    </div>
  </div>