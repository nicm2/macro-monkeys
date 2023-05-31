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
</script>

<p>
    {score}
</p>