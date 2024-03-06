import {
	createTurn,
	deleteTurn,
	getTurns,
	getTurnsByUser,
	type CreateTurn
} from '$lib/server/turn.server';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	const turns = await getTurnsByUser(locals.user.id);

	return json(turns);
};

export const POST: RequestHandler = async ({ locals, request }) => {
	const numberOfTurns: string = await request.json();

	const newTurn: CreateTurn = {
		turnNumber: parseInt(numberOfTurns, 10) + 1,
		cardsBought: [],
		cities: 0,
		people: 0,
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
	};

	const turns = await createTurn(newTurn, locals.user.id);

	return json(turns);
};

export const DELETE: RequestHandler = async ({ request }) => {
	const id: number = await request.json();

	await deleteTurn(id);

	const turns = await getTurns();

	return json(turns);
};
