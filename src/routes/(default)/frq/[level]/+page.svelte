<script lang="ts" src="./script.ts"></script>

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
    <textarea bind:value={code} on:keyup={SaveCodeToLocalStorage} class="textarea w-full h-full language-java" placeholder="Code..." id="codingArea"></textarea>
    <input type="submit" on:click={RunCode} value="Run" class="btn btn-primary" />
  </div>
</div>

<style>
  .textarea {
    background-color: #333;
    color: #fff;
    border: 1px solid #333;
    padding: 8px;
    font-size: 14px;
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

<!-- PrismJS Script and Styles -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism.min.css" />