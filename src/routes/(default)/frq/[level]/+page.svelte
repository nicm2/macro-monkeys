<script lang="ts">

    /** @type {import('./$types').PageData} */
    export let data: any;
    let code: String;

    async function RunCode () {
        fetch("monkeybackend.rohanj.dev/api/code/attemptLevel", {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({code: code})
            })
            .then(response => {
                // handle the response
            })
            .catch(error => {
                // handle the error
            });
    }
        

</script>

<div class="flex flex-col w-screen h-screen justify-start py-24 gap-10 bg-green-600">

    <div class="flex self-center w-96 md:w-1/2 gap-8 h-fit">

        <div class="flex flex-col self-center bg-yellow-300 border-yellow-600 border-2 rounded-lg shadow-xl w-full h-fit p-8 text-2xl text-center font-bold text-yellow-600">
    
            <!-- Title for quiz -->
            <p>{data.title}</p>
        
        </div>

    </div>

    <div class="flex flex-col bg-green-700 border-green-800 border-2 rounded-lg shadow-xl w-96 md:w-1/2 h-fit self-center p-8">
    
        <!-- Question for quiz -->
        <p>{data.question}</p>
    
    </div>

    <div class="flex flex-col bg-green-700 border-green-800 border-2 rounded-lg shadow-xl w-96 md:w-1/2 h-96 self-center p-8 justify-center gap-8">

        <textarea bind:value={code} class="textarea w-full h-full" placeholder="Code..."></textarea>

        <input type="submit" value="Run" class="btn btn-primary" />

    </div>

</div>