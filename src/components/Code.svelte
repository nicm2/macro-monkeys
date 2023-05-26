<script lang="ts">
    export let lang: string;
    export let text: string;
</script>

<style>
pre {
    background-color: black;
    margin-top: 8px;
    margin-bottom: 10px;
    padding: 3px;
}
</style>

<pre class={lang}><code>{text}</code></pre>