export type Menu = {
	menuId: number;
	menuName: string;
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
	cafeteria: {
		id: number;
		name: string;
		address: string;
		contactPerson: string;
		urlSite: string;
		urlLocation: string;
	};
};
