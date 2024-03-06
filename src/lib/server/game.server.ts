import { prisma } from '../../db.server';

export function createGame(createdById: number) {
	return prisma.game.create({
		data: {
			createdBy: {
				connect: {
					id: createdById
				}
			}
		}
	});
}

export function deleteGame(id: number) {
	return prisma.game.delete({
		where: {
			id
		}
	});
}
