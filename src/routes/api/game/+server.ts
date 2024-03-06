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
		gameId: 1,
		turnNumber: 1,
		cardsBought: [],
		cities: 0,
		people: 2,
		astAdvance: 1,
		cardsCost: 0,
		cardsDiscount: 0,
		isDone: true,
		monumentRed: 0,
		monumentGreen: 0,
		monumentBlue: 0,
		monumentOrange: 0,
		monumentYellow: 0,
		writtenRecordRed: 0,
		writtenRecordGreen: 0,
		writtenRecordBlue: 0,
		writtenRecordOrange: 0,
		writtenRecordYellow: 0,
		calamities: []
	},
	{
		gameId: 1,
		turnNumber: 2,
		cardsBought: [],
		cities: 0,
		people: 4,
		astAdvance: 1,
		cardsCost: 0,
		cardsDiscount: 0,
		isDone: true,
		calamities: [],
		monumentRed: 0,
		monumentGreen: 0,
		monumentBlue: 0,
		monumentOrange: 0,
		monumentYellow: 0,
		writtenRecordRed: 0,
		writtenRecordGreen: 0,
		writtenRecordBlue: 0,
		writtenRecordOrange: 0,
		writtenRecordYellow: 0
	},
	{
		gameId: 1,
		turnNumber: 3,
		cardsBought: [],
		cities: 0,
		people: 8,
		astAdvance: 1,
		cardsCost: 0,
		cardsDiscount: 0,
		isDone: true,
		calamities: [],
		monumentRed: 0,
		monumentGreen: 0,
		monumentBlue: 0,
		monumentOrange: 0,
		monumentYellow: 0,
		writtenRecordRed: 0,
		writtenRecordGreen: 0,
		writtenRecordBlue: 0,
		writtenRecordOrange: 0,
		writtenRecordYellow: 0
	},
	{
		gameId: 1,
		turnNumber: 4,
		cardsBought: [],
		cities: 1,
		people: 10,
		astAdvance: 0,
		cardsCost: 0,
		cardsDiscount: 0,
		isDone: false,
		calamities: [],
		monumentRed: 0,
		monumentGreen: 0,
		monumentBlue: 0,
		monumentOrange: 0,
		monumentYellow: 0,
		writtenRecordRed: 0,
		writtenRecordGreen: 0,
		writtenRecordBlue: 0,
		writtenRecordOrange: 0,
		writtenRecordYellow: 0
	}
];
