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
			id: parseInt(event.params.turnId, 10),
			astAdvance: parseInt(form.data.astAdvance, 10),
			people: parseInt(form.data.people, 10),
			cities: parseInt(form.data.cities, 10),
			isDone: form.data.isDone,
			cardsCost: parseInt(form.data.cardsCost, 10),
			cardsDiscount: parseInt(form.data.cardsDiscount, 10),
			cardsBought: form.data.civilizationAdvances.split(',').filter((c) => c !== ''),
			calamities: [],
			monumentRed: parseStringNumber(form.data.monumentRed),
			monumentGreen: parseStringNumber(form.data.monumentGreen),
			monumentBlue: parseStringNumber(form.data.monumentBlue),
			monumentOrange: parseStringNumber(form.data.monumentOrange),
			monumentYellow: parseStringNumber(form.data.monumentYellow),
			writtenRecordRed: parseStringNumber(form.data.writtenRecordRed),
			writtenRecordGreen: parseStringNumber(form.data.writtenRecordGreen),
			writtenRecordBlue: parseStringNumber(form.data.writtenRecordBlue),
			writtenRecordOrange: parseStringNumber(form.data.writtenRecordOrange),
			writtenRecordYellow: parseStringNumber(form.data.writtenRecordYellow)
		};

		try {
			await updateTurn(turn, event.locals.user.id);
		} catch (error) {
			console.log(error);
		}

		redirect(307, '/home');
	}
};

function parseStringNumber(stringNumber: string) {
	return parseInt(stringNumber, 10) ? parseInt(stringNumber, 10) : 0;
}
