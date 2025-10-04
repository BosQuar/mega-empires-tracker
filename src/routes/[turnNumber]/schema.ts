import { z } from 'zod';
export const formSchema = z.object({
	people: z.string(),
	cities: z.string(),
	astAdvance: z.string(),
	cardsCost: z.string(),
	cardsDiscount: z.string(),
	civilizationAdvances: z.string(),
	isDone: z.boolean(),
	monumentRed: z.string(),
	monumentGreen: z.string(),
	monumentBlue: z.string(),
	monumentOrange: z.string(),
	monumentYellow: z.string(),
	writtenRecordRed: z.string(),
	writtenRecordGreen: z.string(),
	writtenRecordBlue: z.string(),
	writtenRecordOrange: z.string(),
	writtenRecordYellow: z.string()
});
export type FormSchemaCreate = typeof formSchema;
