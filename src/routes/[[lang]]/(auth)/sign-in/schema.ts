import { z } from 'zod';
export const formSchema = z.object({
	username: z.string().min(1, 'Must enter a username'),
	password: z.string().min(1, 'Must enter a password')
});
export type FormSchema = typeof formSchema;
