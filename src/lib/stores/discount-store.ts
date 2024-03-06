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
					}),
				monumentRed: turn.monumentRed,
				monumentGreen: turn.monumentGreen,
				monumentBlue: turn.monumentBlue,
				monumentOrange: turn.monumentOrange,
				monumentYellow: turn.monumentYellow,
				writtenRecordRed: turn.writtenRecordRed,
				writtenRecordGreen: turn.writtenRecordGreen,
				writtenRecordBlue: turn.writtenRecordBlue,
				writtenRecordOrange: turn.writtenRecordOrange,
				writtenRecordYellow: turn.writtenRecordYellow
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
						red: 0 + turn.monumentRed + turn.writtenRecordRed,
						green: 0 + turn.monumentGreen + turn.writtenRecordGreen,
						blue: 0 + turn.monumentBlue + turn.writtenRecordBlue,
						orange: 0 + turn.monumentOrange + turn.writtenRecordOrange,
						yellow: 0 + turn.monumentYellow + turn.writtenRecordYellow
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
