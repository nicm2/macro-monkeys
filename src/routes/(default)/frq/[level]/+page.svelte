<script lang="ts" src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js">
    /** @type {import('./$types').PageData} */
    import SvelteMarkdown from 'svelte-markdown';
    import { onMount, afterUpdate } from 'svelte';
    import Code from '../../../../components/Code.svelte';
    export let data: any;
    let code: string;
    let prevCode: string;
    const lastSegmentOfUrl = data.levelNumber;
    let codeLocalStorageName = "code" + lastSegmentOfUrl;
    let characterCount: number = 0;

    async function RunCode() {
        fetch("https://monkeybackend.rohanj.dev/api/code/attemptLevel", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ levelNumber: data.levelNumber, code: code })
        })
        .then(response =>
            response.json().then(data => {
                if (data.err) alert(data.err);
                else if (data.msg) alert(data.msg);
                else alert("Error Occurred!");
            }).catch(e => { alert("Error Occurred!") })
        )
        .catch(error => {
            alert("Error Occurred!");
        });

        // once sent, delete code from local storage
        localStorage.setItem(codeLocalStorageName, "");
    }

    async function GetCode() {
        // if there is code in local storage, set that instead
        if (localStorage.getItem(codeLocalStorageName) != "" && localStorage.getItem(codeLocalStorageName) != null) {
            code = localStorage.getItem(codeLocalStorageName)!;
            (<HTMLTextAreaElement>document.getElementById("codingArea")).value = code;
            characterCount = code.length;
            return;
        }

        fetch("https://monkeybackend.rohanj.dev/api/code/getSnippet", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ level: data.levelNumber })
        })
        .then(response =>
            response.json().then(data => {
                if (data.err) console.log(data.err);
                else {
                    (<HTMLTextAreaElement>document.getElementById("codingArea")).value = data.snippet;
                    code = data.snippet;
                    characterCount = code.length;
                }
            }).catch(e => { alert("Error Occurred!") })
        )
        .catch(error => {
            alert("Error Occurred!");
        });
    }

    onMount(GetCode);

    async function SaveCodeToLocalStorage() {
        localStorage.setItem(codeLocalStorageName, code);
        characterCount = code.length;
    }

    onMount(() => {
        // Apply syntax highlighting to the input box
        const codeTextArea = document.getElementById("codingArea");
        if (codeTextArea) {
            hljs.highlightElement(codeTextArea);
        }
    });

    afterUpdate(() => {
        // Update syntax highlighting when the code changes
        const codeTextArea = document.getElementById("codingArea");
        if (codeTextArea) {
            hljs.highlightElement(codeTextArea);
        }
    });
</script>

<div class="flex flex-col w-screen h-full justify-start py-24 gap-10 bg-green-600">
    <div class="flex self-center w-96 md:w-1/2 gap-8 h-fit">
        <div class="flex flex-col self-center bg-yellow-300 border-yellow-600 border-2 rounded-lg shadow-xl w-full h-fit p-8 text-2xl text-center font-bold text-yellow-600">
            <!-- Title for quiz -->
            <p>{data.title}</p>
        </div>
    </div>

    <div class="flex flex-col bg-green-700 border-green-800 border-2 rounded-lg shadow-xl w-96 md:w-1/2 h-fit self-center p-8">
        <!-- Question for quiz -->
        {#if data.isMarkdown}
        <SvelteMarkdown source={data.question} renderers={{ code: Code }} />
        {:else}
        <p style="white-space: pre-line;">{data.question}</p>
        {/if}
    </div>

    <div class="flex flex-col bg-green-700 border-green-800 border-2 rounded-lg shadow-xl w-96 md:w-1/2 h-96 self-center p-8 justify-center gap-8">
        <textarea bind:value={code} on:input={SaveCodeToLocalStorage} class="textarea w-full h-full" placeholder="Code..." id="codingArea"></textarea>
        <div class="text-right text-gray-400">{characterCount} characters</div>
        <input type="submit" on:click={RunCode} value="Run" class="btn btn-primary" />
    </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css">
<style>
    .textarea {
        background-color: #333;
        color: #fff;
        border: 1px solid #333;
        padding: 8px;
        font-size: 14px;
        caret-color: #fff;
    }

    .btn {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 8px 16px;
        font-size: 16px;
        cursor: pointer;
    }
</style>
