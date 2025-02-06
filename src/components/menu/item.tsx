import React from 'react';
import { Beef, Store, DollarSign, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Menu } from '@/types/menu';
import Link from 'next/link';

export const MenuItem: React.FC<{ menu: Menu }> = ({ menu }) => {
	const meal = menu.meals[0];
	const mainCourse = meal.items.find((item) => item.menuSection === 'mainCourse')?.recipe;

	return (
		<Card className="w-full mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-none border-0">
			<CardContent className="p-6 space-y-4">
				{mainCourse && (
					<div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-md shadow-sm">
						<Beef className="text-red-600 w-10 h-10" />
						<div>
							<h3 className="text-lg font-semibold text-gray-800">{mainCourse.name}</h3>
							<p className="text-sm text-gray-500">{mainCourse.category}</p>
						</div>
					</div>
				)}

				<div className="flex items-center space-x-4">
					<DollarSign className="text-green-500 w-6 h-6" />
					<span className="text-lg font-semibold">
						{meal.prices[0].price} {meal.prices[0].currency.toUpperCase()}
					</span>
				</div>

				<div className="flex items-center space-x-4">
					<Store className="text-blue-500 w-6 h-6" />
					<Link href={menu.cafeteria.urlSite}>
						<span className="text-lg font-medium hover:underline">{menu.cafeteria.name}</span>
					</Link>
				</div>

				<div className="flex items-center space-x-4">
					<MapPin className="text-red-400 w-6 h-6" />
					<Link href={menu.cafeteria.urlLocation}>
						<span className="text-sm text-gray-600 hover:underline">{menu.cafeteria.address}</span>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};
