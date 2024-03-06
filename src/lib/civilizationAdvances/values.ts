import { CivilizationAdvances, type CivilizationAdvance } from './types';

export const civilizationAdvancesVP1: CivilizationAdvance[] = [
	{
		name: CivilizationAdvances.Cloth_Making,
		color: { orange: true },
		cost: 50,
		discountRed: 0,
		discountGreen: 5,
		discountBlue: 0,
		discountOrange: 10,
		discountYellow: 0,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Sculpture,
		color: { blue: true },
		cost: 50,
		discountRed: 5,
		discountGreen: 10,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 0,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	}
];
export const civilizationAdvancesVP3: CivilizationAdvance[] = [
	{
		name: CivilizationAdvances.Naval_Warfare,
		color: { orange: true },
		cost: 160,
		discountRed: 10,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 5,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Cloth_Making,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	}
];
export const civilizationAdvancesVP6: CivilizationAdvance[] = [
	{
		name: CivilizationAdvances.Monotheism,
		color: { yellow: true },
		cost: 230,
		discountRed: 5,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 20,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	}
];

export const civilizationAdvances: CivilizationAdvance[] = [
	...civilizationAdvancesVP1,
	...civilizationAdvancesVP3,
	...civilizationAdvancesVP6
];
