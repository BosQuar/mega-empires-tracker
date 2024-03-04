import { getTurnsByUser } from '$lib/server/turn.server.js';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.user) {
		redirect(307, '/sign-in');
	}

	const turns = async () => {
		const res = await getTurnsByUser(locals.user.id);

		if (res) {
			return res;
		}

		throw fail(400);
	};

	return {
		turns: await turns(),
		user: locals.user
	};
};
