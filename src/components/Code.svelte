<script lang="ts">
    export let lang: string;
    export let text: string;
</script>

<style>
pre {
    background-color: black;
    margin-top: 8px;
    margin-bottom: 10px;
    padding: 10px;
    
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>

<pre class={lang}><code>{text}</code></pre>
