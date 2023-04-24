import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, page }: any) {

	const level = await fetch(`monkeybackend.rohanj.dev/${params.level}`)
	
    	.then( (response: any) => {
			const data = response.json()
			return data;
		});

		if( !level.question ) throw error(404);
		
		return {
			question: level.question,
			title: level.name,
			number: level.number,
			answer1: level.answer1,
			answer2: level.answer2,
			answer3: level.answer3,
            answer4: level.answer4,
		};
}