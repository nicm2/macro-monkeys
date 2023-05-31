<script lang="ts">
    let score = 0
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
                score = parseInt(data)
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

<div class="flex flex-wrap w-screen h-full min-h-screen py-24 px-8 gap-10 bg-green-600">

<p class="center-text">
    Predicted AP Score: {score}
</p>
</div>
