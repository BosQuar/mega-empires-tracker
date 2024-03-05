import type { Turn } from '@prisma/client';

import { prisma } from '../../db.server';

export function getTurns() {
	return prisma.turn.findMany({ orderBy: { updatedAt: 'desc' } });
}

export function getTurnById(id: number) {
	return prisma.turn.findFirst({
		select: {
			id: true,
			cardsBought: true,
			cities: true,
			people: true,
			cardsCost: true,
			cardsDiscount: true,
			astAdvance: true,
			isDone: true,
			calamities: true,
			turnNumber: true
		},
		where: { id }
	});
}

export function getTurnsByUser(createdById: number) {
	return prisma.turn.findMany({ where: { createdById }, orderBy: { updatedAt: 'desc' } });
}

export type CreateTurn = Omit<Turn, 'updatedAt' | 'createdAt' | 'id' | 'createdById' | 'cuid'>;
export function createTurn(
	{
		cardsBought,
		cities,
		people,
		astAdvance,
		isDone,
		calamities,
		turnNumber,
		cardsCost,
		cardsDiscount
	}: CreateTurn,
	createdById: number
) {
	return prisma.turn.create({
		data: {
			turnNumber,
			cardsBought,
			cities,
			people,
			cardsCost,
			cardsDiscount,
			astAdvance,
			isDone,
			calamities,
			createdBy: {
				connect: {
					id: createdById
				}
			}
		}
	});
}

export type UpdateTurn = Omit<
	Turn,
	'updatedAt' | 'createdAt' | 'createdById' | 'cuid' | 'turnNumber'
>;
export function updateTurn(
	{
		id,
		cardsBought,
		cities,
		people,
		astAdvance,
		isDone,
		calamities,
		cardsCost,
		cardsDiscount
	}: UpdateTurn,
	createdById: number
) {
	return prisma.turn.update({
		where: {
			id,
			createdById
		},
		data: {
			cardsBought,
			cities,
			people,
			astAdvance,
			isDone,
			calamities,
			cardsCost,
			cardsDiscount
		}
	});
}

export function deleteTurn(id: number) {
	return prisma.turn.delete({
		where: { id }
	});
}
export function deleteAllTurnsByUser(id: number) {
	return prisma.turn.deleteMany({
		where: { createdById: id }
	});
}
