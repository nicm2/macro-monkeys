<script lang="ts">
    let score = 0;
    let err = "";
    let loading = true;
    async function APScore () {
        fetch("https://monkeybackend.rohanj.dev/api/predictor/apscore", {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
            })
            .then(response =>
                response.text().then(data => {
                loading = false;
                let scoreNum = parseInt(data)
                if (isNaN(scoreNum)) {
                    err = data;
                } else {
                    score = scoreNum;
                }
            }).catch(e => { alert("Error Occurred!")})
            )
            .catch(error => {
            alert("Error Occurred!");
            })
    }
    APScore()
</script>

<style>
    .center-text{
        font-size: 6em;
        font-weight: bold;
        text-align: center;
    }
</style>

<div class="flex flex-wrap justify-center w-screen h-full min-h-screen py-24 px-8 gap-10 bg-green-600">

<p class="center-text">
    {#if loading}
        loading
    {:else if score > 0)
        Predicted AP Score: {score}
    {:else}
        Error: {err}
    {/if}
</p>
</div>
