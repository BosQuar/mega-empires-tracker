import type { CivilizationAdvance } from '$lib/civilizationAdvances/types';
import { civilizationAdvances } from '$lib/civilizationAdvances/values';

import { derived, writable } from 'svelte/store';

export const turnsStore = writable<Turn[]>([]);

export const turnAccumulatedStore = derived(turnsStore, (turns) =>
	turns
		.filter((turn) => turn.isDone)
		.map((turn) => {
			return {
				...turn,
				cardsBought: turn.cardsBought.map(
					(cardName) => civilizationAdvances.filter((card) => card.name === cardName)[0]
				)
			};
		})
		.reduce(
			(accumulator, currentValue) => {
				return {
					cardsBought: [...accumulator.cardsBought, ...currentValue.cardsBought],
					cardsCost: accumulator.cardsCost + currentValue.cardsCost,
					cardsDiscount: accumulator.cardsDiscount + currentValue.cardsDiscount,
					astAdvance: accumulator.astAdvance + currentValue.astAdvance,
					calamities: [...accumulator.calamities, ...currentValue.calamities]
				};
			},
			{
				cardsBought: [] as CivilizationAdvance[],
				cardsCost: 0,
				cardsDiscount: 0,
				astAdvance: 0,
				calamities: [] as string[]
			}
		)
);

export interface Turn {
	turnNumber: number;
	cardsBought: string[];
	cardsCost: number;
	cardsDiscount: number;
	cities: number;
	people: number;
	astAdvance: number;
	isDone: boolean;
	calamities: string[];
	monumentRed: number;
	monumentGreen: number;
	monumentBlue: number;
	monumentOrange: number;
	monumentYellow: number;
	writtenRecordRed: number;
	writtenRecordGreen: number;
	writtenRecordBlue: number;
	writtenRecordOrange: number;
	writtenRecordYellow: number;
}
