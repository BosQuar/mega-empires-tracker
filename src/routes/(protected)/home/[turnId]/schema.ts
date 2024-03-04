import { z } from 'zod';
export const formSchema = z.object({
	people: z.string(),
	cities: z.string(),
	astAdvance: z.string(),
	civilizationAdvances: z.string(),
	isTurnPlayed: z.boolean()
});
export type FormSchemaCreate = typeof formSchema;
