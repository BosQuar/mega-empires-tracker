export type CivilizationAdvance = {
	name: string;
	color: {
		red?: boolean;
		green?: boolean;
		blue?: boolean;
		orange?: boolean;
		yellow?: boolean;
	};
	cost: number;
	discountRed: number;
	discountGreen: number;
	discountBlue: number;
	discountOrange: number;
	discountYellow: number;
	discountedByAdvance: CivilizationAdvances | null;
	discountedByAdvanceNumber: number;
	victoryPoints: number;
};

export enum CivilizationAdvances {
	Cloth_Making = 'Cloth Making',
	Sculpture = 'Sculpture',
	Mysticism = 'Mysticism',
	Urbanism = 'Urbanism',
	Monarchy = 'Monarchy',
	Written_Record = 'Written Record',
	Pottery = 'Pottery',
	Masonry = 'Masonry',
	Mythology = 'Mythology',
	Empiricism = 'Empiricism',
	Deism = 'Deism',
	Theocracy = 'Theocracy',
	Drama_and_Poetry = 'Drama and Poetry',
	Music = 'Music',
	Astronavigation = 'Astronavigation',
	Coinage = 'Coinage',
	Metalworking = 'Metalworking',
	Architecture = 'Architecture',
	Naval_Warfare = 'Naval Warfare',
	Monument = 'Monument',
	Diplomacy = 'Diplomacy',
	Law = 'Law',
	Cartography = 'Cartography',
	Agriculture = 'Agriculture',
	Engineering = 'Engineering',
	Literacy = 'Literacy',
	Medicine = 'Medicine',
	Fundamentalism = 'Fundamentalism',
	Universal_Doctrine = 'Universal Doctrine',
	Rhetoric = 'Rhetoric',
	Enlightenment = 'Enlightenment',
	Calendar = 'Calendar',
	Trade_Routes = 'Trade Routes',
	Military = 'Military',
	Mining = 'Mining',
	Provincial_Empire = 'Provincial Empire',
	Diaspora = 'Diaspora',
	Wonder_of_the_World = 'Wonder of the World',
	Cultural_Ascendancy = 'Cultural Ascendancy',
	Library = 'Library',
	Democracy = 'Democracy',
	Roadbuilding = 'Roadbuilding',
	Mathematics = 'Mathematics',
	Anatomy = 'Anatomy',
	Monotheism = 'Monotheism',
	Theology = 'Theology',
	Politics = 'Politics',
	Philosophy = 'Philosophy',
	Public_Works = 'Public Works',
	Trade_Empire = 'Trade Empire',
	Advanced_Military = 'Advanced Military'
}
