import { superValidate } from 'sveltekit-superforms/client';
import { formSchema } from './schema.js';

export const load = async ({ params }) => {
	return {
		turnNumber: Number(params.turnNumber),
		form: await superValidate(formSchema)
	};
};
