import { getTurnById, updateTurn, type UpdateTurn } from '$lib/server/turn.server';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { formSchema } from './schema.js';

export const load = async ({ params }) => {
	const turn = async () => {
		const res = await getTurnById(parseInt(params.turnId, 10));

		if (res) {
			return res;
		}

		throw fail(400);
	};

	return {
		turn: await turn(),
		form: await superValidate(formSchema)
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, formSchema);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const turn: UpdateTurn = {
			astAdvance: parseInt(form.data.astAdvance, 10),
			people: parseInt(form.data.people, 10),
			cities: parseInt(form.data.cities, 10),
			isTurnPlayed: form.data.isTurnPlayed,
			id: parseInt(event.params.turnId, 10),
			cardsBought: [],
			calamities: []
		};

		console.log(form.data);
		try {
			await updateTurn(turn, event.locals.user.id);
		} catch (error) {
			console.log(error);
		}

		redirect(307, '/home');
	}
};
