import { redirect, type Handle, type HandleServerError } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	return await resolve(event);
};

export const handleError: HandleServerError = ({ message, event, error }) => {
	if (message.includes('Not found') && event.url.pathname.includes('/')) {
		redirect(307, '/');
	}

	console.log(error);

	return {
		message: 'Whoops! Something went wrong.'
	};
};
