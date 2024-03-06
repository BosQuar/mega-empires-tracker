import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seed() {
	// cleanup the existing database
	await prisma.user.deleteMany();
	await prisma.turn.deleteMany();
	await prisma.game.deleteMany();

	dbQueries();

	console.log(`Database has been seeded. 🌱`);
}

seed()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

async function dbQueries() {
	await prisma.user.create({
		data: {
			username: 'oskar',
			role: 'admin',
			password: {
				create: {
					hash: await bcrypt.hash('qweQWE123', 10)
				}
			}
		}
	});

	await prisma.game.create({
		data: {
			id: 1
		}
	});
}
