import { civilizationAdvances } from '$lib/civilizationAdvances/values';
import { derived } from 'svelte/store';
import { turnsStore } from './turns-store';

export const discountByTurnStore = derived(turnsStore, (turns) =>
	turns
		.map((turn) => {
			return {
				turnNumber: turn.turnNumber,
				isDone: turn.isDone,
				cardsBought: turn.cardsBought
					.map((cardName) => civilizationAdvances.filter((advance) => advance.name === cardName)[0])
					.map((cardsBought) => {
						return {
							red: cardsBought.discountRed,
							green: cardsBought.discountGreen,
							blue: cardsBought.discountBlue,
							orange: cardsBought.discountOrange,
							yellow: cardsBought.discountYellow
						};
					})
			};
		})
		.map((turn) => {
			return {
				turnNumber: turn.turnNumber,
				isDone: turn.isDone,
				discount: turn.cardsBought.reduce(
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
			};
		})
);

export const discountTotalStore = derived(discountByTurnStore, (discountByTurn) =>
	discountByTurn
		.filter((discountByTurn) => discountByTurn.isDone)
		.flat(1)
		.reduce(
			(accumulator, currentValue) => {
				return {
					red: accumulator.red + currentValue.discount.red,
					green: accumulator.green + currentValue.discount.green,
					blue: accumulator.blue + currentValue.discount.blue,
					orange: accumulator.orange + currentValue.discount.orange,
					yellow: accumulator.yellow + currentValue.discount.yellow
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
