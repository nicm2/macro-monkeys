/** @type {import('./$types').PageData} */
import SvelteMarkdown from 'svelte-markdown';
import { onMount } from 'svelte';
import Code from '../../../../components/Code.svelte';

export let data: any;
let code: string;
let prevCode: string;
const lastSegmentOfUrl = data.levelNumber;
let codeLocalStorageName = "code" + lastSegmentOfUrl;

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
    })

  // once sent, delete code from local storage
  localStorage.setItem(codeLocalStorageName, "");
}

async function GetCode() {
  // if there is code in local storage, set that instead
  if (localStorage.getItem(codeLocalStorageName) != "" && localStorage.getItem(codeLocalStorageName) != null) {
    code = localStorage.getItem(codeLocalStorageName)!;
    (document.getElementById("codingArea") as HTMLTextAreaElement).value = code;
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
        else { (document.getElementById("codingArea") as HTMLTextAreaElement).value = data.snippet; console.log(data.snippet); code = data.snippet; }
      }).catch(e => { alert("Error Occurred!") })
    )
    .catch(error => {
      alert("Error Occurred!");
    })
}

onMount(GetCode);

async function SaveCodeToLocalStorage() {
  localStorage.setItem(codeLocalStorageName, code);
}
