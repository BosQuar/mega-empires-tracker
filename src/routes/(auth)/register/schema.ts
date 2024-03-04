import { z } from 'zod';
export const formSchema = z.object({
	username: z.string().min(1, 'Username is required'),
	password: z.string().min(1, 'Password is required'),
	confirmPassword: z.string().min(1, 'Confirming password is required')
});
export type FormSchema = typeof formSchema;
