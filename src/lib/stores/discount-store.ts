import type { CivilizationAdvance } from '$lib/civilizationAdvances/types';
import { civilizationAdvances } from '$lib/civilizationAdvances/values';
import { derived } from 'svelte/store';
import { cardsBoughtStore } from './cards-bought-store';
import { turnsStore } from './turns-store';

let cardsBought: string[] = [];
let internalDiscount = {
	red: 0,
	green: 0,
	blue: 0,
	orange: 0,
	yellow: 0
};

export const discountStore = derived(turnsStore, (turns) =>
	turns
		.filter((turn) => turn.isTurnPlayed)
		.map((turn) =>
			turn.cardsBought.map(
				(cardName) => civilizationAdvances.filter((advance) => advance.name === cardName)[0]
			)
		)
		.map((advances) =>
			advances.map((advance) => {
				return {
					red: advance.discountRed,
					green: advance.discountGreen,
					blue: advance.discountBlue,
					orange: advance.discountOrange,
					yellow: advance.discountYellow
				};
			})
		)
		.flat(1)
		.reduce(
			(accumulator, currentValue) => {
				return {
					red: accumulator.red + currentValue.red,
					green: accumulator.green + currentValue.green,
					blue: accumulator.blue + currentValue.blue,
					orange: accumulator.orange + currentValue.orange,
					yellow: accumulator.yellow + currentValue.yellow
				};
			},
			{
				red: 0,
				green: 0,
				blue: 0,
				orange: 0,
				yellow: 0
			}
		)
);

cardsBoughtStore.subscribe((cards) => (cardsBought = cards));
discountStore.subscribe((discount) => (internalDiscount = discount));

export function getDiscount(card: CivilizationAdvance) {
	const hasDiscountedByAdvanceCard = cardsBought.includes(
		card.discountedByAdvance ? card.discountedByAdvance : ''
	);

	const discountedByAdvanceValue = hasDiscountedByAdvanceCard ? card.discountedByAdvanceNumber : 0;

	const discountRed = card.color.red ? internalDiscount.red : 0;
	const discountGreen = card.color.green ? internalDiscount.green : 0;
	const discountBlue = card.color.blue ? internalDiscount.blue : 0;
	const discountOrange = card.color.orange ? internalDiscount.orange : 0;
	const discountYellow = card.color.yellow ? internalDiscount.yellow : 0;

	const discountInventory = Math.max(
		discountRed,
		discountGreen,
		discountBlue,
		discountOrange,
		discountYellow
	);

	return card.cost - discountedByAdvanceValue - discountInventory;
}
