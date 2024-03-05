import {
	createTurn,
	deleteAllTurnsByUser,
	getTurnsByUser,
	type CreateTurn
} from '$lib/server/turn.server';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals }) => {
	await deleteAllTurnsByUser(locals.user.id);

	for (let index = 0; index < starterSetup.length; index++) {
		await createTurn(starterSetup[index], locals.user.id);
	}

	const turns = await getTurnsByUser(locals.user.id);

	return json(turns);
};

const starterSetup: CreateTurn[] = [
	{
		turnNumber: 1,
		cardsBought: [],
		cities: 0,
		people: 2,
		astAdvance: 0,
		cardsCost: 0,
		cardsDiscount: 0,
		isTurnPlayed: true,
		calamities: []
	},
	{
		turnNumber: 2,
		cardsBought: [],
		cities: 0,
		people: 4,
		astAdvance: 0,
		cardsCost: 0,
		cardsDiscount: 0,
		isTurnPlayed: true,
		calamities: []
	},
	{
		turnNumber: 3,
		cardsBought: [],
		cities: 0,
		people: 8,
		astAdvance: 0,
		cardsCost: 0,
		cardsDiscount: 0,
		isTurnPlayed: true,
		calamities: []
	},
	{
		turnNumber: 4,
		cardsBought: [],
		cities: 1,
		people: 10,
		astAdvance: 0,
		cardsCost: 0,
		cardsDiscount: 0,
		isTurnPlayed: false,
		calamities: []
	}
];
