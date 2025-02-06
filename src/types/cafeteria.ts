export type Cafeteria = {
	id: number;
	name: string;
	address: string;
	contactPerson: string;
	format: string;
	urlSite: string;
	urlLocation: string;
	organization: string;
	tcposId: string;
	tcposName: string;
	openingHours: {
		dayOfWeek: string;
		isClosed: 0 | 1;
		open: string;
		close: string;
	}[];
	vacations: any[];
	menuLines: {
		id: number;
		name: string;
		meals: {
			date: string;
			mealType: string;
			evaluation: {
				nutriScore: string;
				nutriScoreValue: string;
			};
			prices: {
				description: string;
				price: string;
				currency: string;
			}[];
			items: {
				menuSection: string;
				recipe: {
					name: string;
					name_en: string;
					category: string;
					cuisine: string;
					notesOrigin: string;
				};
			}[];
		}[];
	}[];
};
