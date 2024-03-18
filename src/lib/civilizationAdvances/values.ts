import { CivilizationAdvances, type CivilizationAdvance } from './types';

export const civilizationAdvancesVP1: CivilizationAdvance[] = [
	{
		name: CivilizationAdvances.Cloth_Making,
		description: `Your ships are allowed to move 5 steps.`,
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
		description: `(+)TYRANNY: The beneficiary selects
		and annexes 5 less unit points.`,
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
	},
	{
		name: CivilizationAdvances.Mysticism,
		description: `(+)SUPERSTITION: Reduce 1 less city`,
		color: { blue: true, yellow: true },
		cost: 50,
		discountRed: 0,
		discountGreen: 5,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 5,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Urbanism,
		description: `Once per turn, when constructing a
		wilderness city you may choose to use up
		to 4 tokens from areas adjacent by land.`,
		color: { red: true },
		cost: 50,
		discountRed: 10,
		discountGreen: 0,
		discountBlue: 5,
		discountOrange: 0,
		discountYellow: 0,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Monarchy,
		description: `You may choose to increase your tax rate
		by 1.
		(+)BARBARIAN HORDES: 5 less
		barbarian tokens are used.
		(-)TYRANNY: The beneficiary selects
		and annexes 5 additional unit points.`,
		color: { red: true },
		cost: 60,
		discountRed: 10,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 5,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Written_Record,
		description: `Acquire 10 additional points of credit
		tokens in any combination of colors.`,
		color: { red: true, green: true },
		cost: 60,
		discountRed: 5,
		discountGreen: 0,
		discountBlue: 5,
		discountOrange: 0,
		discountYellow: 0,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Pottery,
		description: `FAMINE: Prevent 5 damage.`,
		color: { orange: true },
		cost: 60,
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
		name: CivilizationAdvances.Masonry,
		description: `(+)CYCLONE: Reduce 1 less of your
		selected cities.`,
		color: { orange: true },
		cost: 60,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 5,
		discountOrange: 10,
		discountYellow: 0,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Mythology,
		description: `(+)SLAVE REVOLT: Your city support
		rate is decreased by 1 during the
		resolution of Slave Revolt.`,
		color: { yellow: true },
		cost: 60,
		discountRed: 0,
		discountGreen: 5,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 10,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Empiricism,
		description: ``,
		color: { green: true },
		cost: 60,
		discountRed: 5,
		discountGreen: 5,
		discountBlue: 10,
		discountOrange: 5,
		discountYellow: 5,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Deism,
		description: `(+)SUPERSTITION: Reduce 1 less city.`,
		color: { yellow: true },
		cost: 70,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 10,
		discountYellow: 5,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Theocracy,
		description: `(+)ICONOCLASM AND HERESY:
		You may choose and discard 2
		commodity cards to prevent the city
		reduction effect for you.`,
		color: { red: true, yellow: true },
		cost: 80,
		discountRed: 5,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 5,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Drama_and_Poetry,
		description: `(+)CIVIL WAR: Select 5 less unit points.
		(+)CIVIL DISORDER: Reduce 1 less
		city.`,
		color: { blue: true },
		cost: 80,
		discountRed: 0,
		discountGreen: 10,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 5,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Music,
		description: `(+)CIVIL WAR: Select 5 less unit points.
		(+)CIVIL DISORDER: Reduce 1 less `,
		color: { blue: true },
		cost: 80,
		discountRed: 10,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 5,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Astronavigation,
		description: `Your ships are allowed to move through
		open sea areas.`,
		color: { green: true },
		cost: 80,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 10,
		discountOrange: 0,
		discountYellow: 5,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Coinage,
		description: `You may choose to increase or decrease
		your tax rate by 1.
		(-)CORRUPTION: Discard 5 additional
		points of face value.`,
		color: { green: true },
		cost: 90,
		discountRed: 5,
		discountGreen: 0,
		discountBlue: 10,
		discountOrange: 0,
		discountYellow: 0,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	},
	{
		name: CivilizationAdvances.Metalworking,
		description: `In conflicts, for each round of token
		removal all other players not holding
		Metalworking must remove their token
		first.`,
		color: { orange: true },
		cost: 90,
		discountRed: 5,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 10,
		discountYellow: 0,
		discountedByAdvance: null,
		discountedByAdvanceNumber: 0,
		victoryPoints: 1
	}
];
export const civilizationAdvancesVP3: CivilizationAdvance[] = [
	{
		name: CivilizationAdvances.Naval_Warfare,
		description: `Your ships are allowed to carry 6 tokens.
		In conflicts, you may choose to remove
		ships from the conflict area instead
		of tokens. After each round of token
		removal a new check for token majority
		must be made.
		(+)PIRACY: If you are the primary victim, the
		beneficiary selects and replaces 1 less coastal city. You
		may not be selected as a secondary victim.
		(-)CIVIL DISORDER: Reduce 1 additional city.`,
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
	},
	{
		name: CivilizationAdvances.Architecture,
		description: `Once per turn, when constructing a city,
		you may choose to pay up to half of the
		required number of tokens from treasury.`,
		color: { blue: true },
		cost: 140,
		discountRed: 0,
		discountGreen: 10,
		discountBlue: 5,
		discountOrange: 0,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Sculpture,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Naval_Warfare,
		description: ``,
		color: { red: true },
		cost: 160,
		discountRed: 10,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 5,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Cloth_Making,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Monument,
		description: `Acquire 20 additional points of credit
		tokens in any combination of colors.`,
		color: { yellow: true, orange: true },
		cost: 180,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 10,
		discountYellow: 10,
		discountedByAdvance: CivilizationAdvances.Mysticism,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Diplomacy,
		description: `Players are not allowed to move tokens
		into areas containing your cities, except
		for areas where a conflict situation already
		occurs. This does not count for players
		holding Diplomacy or Military.
		(-)TREACHERY: The beneficiary selects and annexes
		1 additional city.`,
		color: { blue: true },
		cost: 160,
		discountRed: 5,
		discountGreen: 10,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Urbanism,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Law,
		description: `(+)TYRANNY: The beneficiary selects
		and annexes 5 less unit points.
		(+)CIVIL DISORDER: Reduce 1 less city.
		(+)CORRUPTION: Discard 5 less points
		of face value.`,
		color: { red: true },
		cost: 150,
		discountRed: 10,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 5,
		discountedByAdvance: CivilizationAdvances.Monarchy,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Cartography,
		description: `During the Trade cards acquisition phase,
		you may acquire additional trade cards
		from stack 2 for 5 treasury tokens and/
		or from stack 7 for 13 treasury tokens per
		card.
		(-)PIRACY: If you are the primary victim, the beneficiary selects and replaces 1 additional coastal city.`,
		color: { green: true },
		cost: 160,
		discountRed: 0,
		discountGreen: 5,
		discountBlue: 10,
		discountOrange: 0,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Written_Record,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Agriculture,
		description: `The population limit of '0', ''1 and '2'
		areas on the board is increased by 1 for
		you as long as these areas do not contain
		any other player's units or barbarian
		tokens.
		(-)FAMINE: If you are the primary victim, take 5
		additional damage.`,
		color: { orange: true },
		cost: 120,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 5,
		discountOrange: 10,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Pottery,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Engineering,
		description: `Other players or barbarians require
		8 tokens to successfully attack your
		cities. Your cities are then replaced with
		7 tokens. This does not apply when the
		attacking player also holds Engineering.
		You require 6 tokens to successfully attack other player’s
		cities or pirate cities. Their cities are then replaced with
		5 tokens. This does not apply when the defending player
		also holds Engineering.
		(+)EARTHQUAKE: Your city is reduced instead of
		destroyed.
		(+)FLOOD: Prevent 5 damage.`,
		color: { orange: true, green: true },
		cost: 160,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 10,
		discountOrange: 10,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Masonry,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Literacy,
		description: ``,
		color: { red: true, blue: true },
		cost: 110,
		discountRed: 10,
		discountGreen: 10,
		discountBlue: 5,
		discountOrange: 5,
		discountYellow: 5,
		discountedByAdvance: CivilizationAdvances.Mythology,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Medicine,
		description: `(+)EPIDEMIC: Prevent 5 damage.`,
		color: { green: true },
		cost: 140,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 10,
		discountOrange: 5,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Empiricism,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Fundamentalism,
		description: `SPECIAL ABILITY: You may choose
		to destroy all units in an area adjacent
		by land to your units. Barbarian tokens,
		pirate cities and units belonging to players
		holding Fundamentalism or Philosophy
		are unaffected.
		(-)REGRESSION: Your marker is moved backward
		1 additional step.`,
		color: { yellow: true },
		cost: 150,
		discountRed: 0,
		discountGreen: 5,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 10,
		discountedByAdvance: CivilizationAdvances.Deism,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Universal_Doctrine,
		description: `SPECIAL ABILITY: You may choose
		to annex 1 pirate city or up to 5 barbarian
		tokens anywhere on the board.
		(-)SUPERSTITION: Reduce 1
		additional city.`,
		color: { yellow: true },
		cost: 160,
		discountRed: 5,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 10,
		discountedByAdvance: CivilizationAdvances.Theocracy,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Rhetoric,
		description: `During the Trade cards acquisition phase,
		you may acquire additional trade cards
		from stack 3 for 9 treasury tokens per
		card.`,
		color: { blue: true },
		cost: 130,
		discountRed: 5,
		discountGreen: 10,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Drama_and_Poetry,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Enlightenment,
		description: `(+)SUPERSTITION: Reduce 1 less city.
		(+)SLAVE REVOLT: Your city support
		rate is decreased by 1 during the
		resolution of Slave Revolt.
		(+)EPIDEMIC: If you are the primary
		victim, prevent 5 damage.
		(+)REGRESSION: For each step backward, you may
		choose to prevent the effect by destroying 2 of your
		cities (if possible non-coastal).`,
		color: { yellow: true },
		cost: 160,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 5,
		discountYellow: 10,
		discountedByAdvance: CivilizationAdvances.Music,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Calendar,
		description: `(+)FAMINE: Prevent 5 damage.
		(+)CYCLONE: Reduce 2 less selected
		cities.`,
		color: { green: true },
		cost: 180,
		discountRed: 5,
		discountGreen: 0,
		discountBlue: 10,
		discountOrange: 0,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Astronavigation,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Trade_Routes,
		description: `SPECIAL ABILITY: You may choose to
		discard any number of commodity cards
		to gain treasury tokens at twice the face
		value of the commodity cards discarded
		this way.`,
		color: { orange: true },
		cost: 180,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 10,
		discountYellow: 5,
		discountedByAdvance: CivilizationAdvances.Coinage,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	},
	{
		name: CivilizationAdvances.Military,
		description: `Your movement phase is after all other
		players not holding Military have moved.
		You are allowed to move tokens into areas
		containing cities belonging to players
		holding Diplomacy.
		(-)CIVIL WAR: Select 5 additional unit points.`,
		color: { red: true },
		cost: 170,
		discountRed: 10,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 5,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Metalworking,
		discountedByAdvanceNumber: 10,
		victoryPoints: 3
	}
];
export const civilizationAdvancesVP6: CivilizationAdvance[] = [
	{
		name: CivilizationAdvances.Monotheism,
		description: `SPECIAL ABILITY: You may choose
		to annex all units in an area adjacent
		by land to your units. Barbarian tokens,
		pirate cities and units belonging to players
		holding Monotheism or Theology
		are unaffected.
		(-)ICONOCLASM AND HERESY: Reduce
		1 additional city.`,
		color: { yellow: true },
		cost: 230,
		discountRed: 5,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 20,
		discountedByAdvance: CivilizationAdvances.Fundamentalism,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Mining,
		description: `During the Trade cards acquisition phase,
		you may acquire additional trade cards
		from stack 6 and/or stack 8 for
		13 treasury tokens per card.
		Treasury tokens are worth 2 points when
		purchasing Civilization Advances.
		(-)SLAVE REVOLT: Your city support rate is increased
		by 1 during the resolution of Slave Revolt.`,
		color: { orange: true },
		cost: 230,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 5,
		discountOrange: 20,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Architecture,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Provincial_Empire,
		description: `SPECIAL ABILITY: You may choose
		to select up to 5 players that have units
		adjacent by land or water to your units.
		These players must choose and give you a
		commodity card with a face value of
		at least 2. Players holding Provincial Empire or Public
		Works may not be selected.
		(-)BARBARIAN HORDES: 5 additional barbarian
		tokens are used.
		(-)TYRANNY: The beneficiary selects and annexes 5
		additional unit points.`,
		color: { red: true },
		cost: 260,
		discountRed: 20,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 5,
		discountedByAdvance: CivilizationAdvances.Diplomacy,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Diaspora,
		description: `SPECIAL ABILITY: You may choose
		to take up to 5 of your tokens from the
		board and place them anywhere else on
		the board, providing that no population
		limits are exceeded.`,
		color: { yellow: true },
		cost: 270,
		discountRed: 0,
		discountGreen: 5,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 20,
		discountedByAdvance: CivilizationAdvances.Naval_Warfare,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Wonder_of_the_World,
		description: `During the Trade cards acquisition phase,
		you may acquire 1 additional trade card
		for free from a stack number that is higher
		than your number of cities in play.
		Wonder of the World counts as a city
		during the A.S.T.-alteration phase.
		(-)CORRUPTION: Discard 5 additional points of face
		value.`,
		color: { blue: true, orange: true },
		cost: 290,
		discountRed: 0,
		discountGreen: 20,
		discountBlue: 0,
		discountOrange: 20,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Monument,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Cultural_Ascendancy,
		description: `Players are not allowed to cause conflict
		in areas containing your units, except
		for areas where a conflict situation
		already occurs. This does not count for
		players holding Cultural Ascendancy or
		Advanced Military.
		Your units are protected against the effect of Politics.
		Your default city support rate is increased by 1.`,
		color: { blue: true },
		cost: 280,
		discountRed: 0,
		discountGreen: 20,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 5,
		discountedByAdvance: CivilizationAdvances.Law,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Library,
		description: `You may discount the cost of 1 other
		Civilization Advance that you purchase in
		the same turn as Library by 40 points.
		(+)REGRESSION: Your marker is moved
		backward 1 step less.`,
		color: { green: true },
		cost: 220,
		discountRed: 0,
		discountGreen: 5,
		discountBlue: 20,
		discountOrange: 0,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Cartography,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Democracy,
		description: `During the Tax collection phase you
		collect tax as usual but your cities do
		not revolt as a result of a shortage in tax
		collection.
		(+)CIVIL WAR: Select 10 less unit points.
		(+)CIVIL DISORDER: Reduce 1 less city`,
		color: { red: true },
		cost: 220,
		discountRed: 20,
		discountGreen: 5,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Agriculture,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Roadbuilding,
		description: `When moving over land, your tokens
		may move 2 areas. Tokens that are in
		a conflict situation after 1 step are not
		allowed to move any further. Your hand
		limit of trade cards is increased by 1.
		(-)EPIDEMIC: If you are the primary victim, take 5
		additional damage.`,
		color: { orange: true },
		cost: 230,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 5,
		discountOrange: 20,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Engineering,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Mathematics,
		description: ``,
		color: { green: true, blue: true },
		cost: 250,
		discountRed: 10,
		discountGreen: 20,
		discountBlue: 20,
		discountOrange: 10,
		discountYellow: 10,
		discountedByAdvance: CivilizationAdvances.Literacy,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Anatomy,
		description: `Upon purchase, you may choose
		to acquire 1 science card with an
		undiscounted cost price of less than 100
		for free.
		(+)EPIDEMIC: If you are a secondary victim, prevent 5
		damage.`,
		color: { green: true },
		cost: 270,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 20,
		discountOrange: 5,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Medicine,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},

	{
		name: CivilizationAdvances.Theology,
		description: `Your units are protected against the effect
		of Monotheism.(+)ICONOCLASM AND HERESY: Reduce 3 less cities.
		`,
		color: { yellow: true },
		cost: 250,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 5,
		discountOrange: 0,
		discountYellow: 20,
		discountedByAdvance: CivilizationAdvances.Universal_Doctrine,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Politics,
		description: `SPECIAL ABILITY: You may choose
		1 of 2 options: 1) Gain up to 5 treasury
		tokens from stock. 2) Annex all units
		in an area adjacent by land to your
		units. Pay treasury tokens equal to the
		number of unit points annexed, or the effect is canceled.
		Barbarian tokens, pirate cities and units belonging to
		players holding Politics or Cultural Ascendancy are
		unaffected.
		(-)BARBARIAN HORDES: 5 additional barbarian
		tokens are used.`,
		color: { blue: true },
		cost: 230,
		discountRed: 0,
		discountGreen: 20,
		discountBlue: 0,
		discountOrange: 0,
		discountYellow: 5,
		discountedByAdvance: CivilizationAdvances.Rhetoric,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Philosophy,
		description: `(+)ICONOCLASM AND HERESY:
		Reduce 2 less cities.
		Your units are protected against the effect
		of Fundamentalism.
		(-)CIVIL WAR: Select 5 additional unit
		 points.`,
		color: { yellow: true, green: true },
		cost: 220,
		discountRed: 0,
		discountGreen: 0,
		discountBlue: 20,
		discountOrange: 0,
		discountYellow: 20,
		discountedByAdvance: CivilizationAdvances.Enlightenment,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Public_Works,
		description: `Areas containing your cities may also
		contain 1 of your tokens.
		You are protected against the effect of
		Provincial Empire.`,
		color: { red: true },
		cost: 230,
		discountRed: 20,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 5,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Calendar,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Trade_Empire,
		description: `Once per turn, you may choose to use
		1 substitute commodity card of at least
		the same face value when turning in an
		incomplete set of commodity cards.
		(-)CYCLONE: Select and reduce 1 additional city
		adjacent to the open sea area.
		(-)EPIDEMIC: If you are the primary victim, take
		5 additional damage.`,
		color: { orange: true },
		cost: 260,
		discountRed: 5,
		discountGreen: 0,
		discountBlue: 0,
		discountOrange: 20,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Trade_Routes,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	},
	{
		name: CivilizationAdvances.Advanced_Military,
		description: `In conflicts, you may choose to remove
		tokens from areas adjacent by land. After
		each round of token removal a new
		check for token majority must be made.
		You may decide to wait for other token
		conflicts to be resolved first.
		You are allowed to cause conflict in areas containing units
		belonging to players holding Cultural Ascendancy.
		(-)CIVIL DISORDER: Reduce 1 additional city.`,
		color: { red: true },
		cost: 240,
		discountRed: 20,
		discountGreen: 0,
		discountBlue: 5,
		discountOrange: 0,
		discountYellow: 0,
		discountedByAdvance: CivilizationAdvances.Military,
		discountedByAdvanceNumber: 20,
		victoryPoints: 6
	}
];

export const civilizationAdvances: CivilizationAdvance[] = [
	...civilizationAdvancesVP1,
	...civilizationAdvancesVP3,
	...civilizationAdvancesVP6
];
