import { redirect, type Handle, type HandleServerError } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/') {
		return Response.redirect(`${event.url.origin}/sign-in`, 303);
	}

	const token = event.cookies.get('user-jwt');
	if (token) {
		event.locals.user = JSON.parse(atob(token));
	}

	return await resolve(event);
};

export const handleError: HandleServerError = ({ message, event, error }) => {
	if (message.includes('Not found') && event.url.pathname.includes('home')) {
		redirect(307, '/home');
	}

	console.log(error);

	return {
		message: 'Whoops! Something went wrong.'
	};
};
