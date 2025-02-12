import { Cafeteria } from '@/types/cafeteria';
import { Menu } from '@/types/menu';
import { getUserLocale } from './locale';

export async function getMenus(): Promise<Menu[] | null> {
	try {
		const date = new Date().toISOString().split('T')[0];
		const response = await fetch(`${process.env.API_URL}?date=${date}`, {
			method: 'GET',
			headers: {
				Authorization: `Basic ${btoa(`${process.env.API_USERNAME}:${process.env.API_PASSWORD}`)}`,
			},
		});

		if (!response.ok) {
			console.error('Error fetching menus:', response.statusText);
			return null;
		}

		const cafeterias: Cafeteria[] = await response.json();
		const words = ['fries', 'frite', 'frites'];

		const locale = await getUserLocale();

		const menus = cafeterias.flatMap((cafeteria) =>
			cafeteria.menuLines.map((menuLine) => ({
				menuId: menuLine.id,
				menuName: menuLine.name,
				meals: menuLine?.meals.map((meal) => ({
					...meal,
					items: meal?.items?.map((item) => ({
						...item,
						recipe: {
							...item.recipe,
							name: item.recipe.name_en ? (locale === 'en' ? item.recipe.name_en : item.recipe.name) : item.recipe.name,
						},
					})),
				})),
				cafeteria: {
					id: cafeteria.id,
					name: cafeteria.name,
					address: cafeteria.address,
					contactPerson: cafeteria.contactPerson,
					urlSite: cafeteria.urlSite,
					urlLocation: cafeteria.urlLocation,
				},
			}))
		);

		const filteredMenus = menus.filter((menu) => menu.meals?.some((meal) => meal.items?.some((item) => item.recipe?.name && words.some((word) => item.recipe.name.toLowerCase().includes(word)))));

		return filteredMenus;
	} catch (error) {
		console.error('Error fetching menus:', error);
		return null;
	}
}
