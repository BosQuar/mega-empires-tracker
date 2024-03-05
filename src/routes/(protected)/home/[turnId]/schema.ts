import { z } from 'zod';
export const formSchema = z.object({
	people: z.string(),
	cities: z.string(),
	astAdvance: z.string(),
	cardsCost: z.string(),
	cardsDiscount: z.string(),
	civilizationAdvances: z.string(),
	isDone: z.boolean()
});
export type FormSchemaCreate = typeof formSchema;
