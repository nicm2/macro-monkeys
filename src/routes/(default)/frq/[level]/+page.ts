import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    if (isNaN(parseInt(params.level))) {
        throw error(404, 'Not found');
    }
	
	let levelNumber = parseInt(params.level);
    let isMarkdown = true;

    const result = await fetch("https://monkeybackend.rohanj.dev/api/level/getLevel", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number: parseInt(params.level) })
    })

    if (result.status != 200) {
        throw error(404, 'Not found');
    }
    
    const parsedRes = await result.json();

	return {
		title: parsedRes.level.name,
		question: parsedRes.description,
		levelNumber: levelNumber,
        isMarkdown: isMarkdown,
	};
}
