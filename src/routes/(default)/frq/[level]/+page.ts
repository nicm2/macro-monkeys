import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	
	let title: String;
	let question: String;
	let runLink: String;

	switch (params.level) {
		case "2016A":
			title = "2016 CSA FRQ A";
			question = "test";
			runLink = "2016A";
			break;
		default:
			throw error(404, 'Not found');
	}
	return {
		title: title,
		question: question,
		runLink: runLink
	};
}