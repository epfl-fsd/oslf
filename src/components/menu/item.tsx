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
			<CardContent className="p-4 md:p-6 space-y-4">
				{mainCourse && (
					<div className="flex flex-row items-start sm:space-x-4 space-x-2 bg-gray-50 p-2 sm:p-4 rounded-md shadow-sm">
						<Beef className="text-red-600 w-6 h-6 md:w-10 md:h-10 mt-1 flex-shrink-0" />
						<div className="min-w-0">
							<h3 className="text-xs md:text-lg font-semibold text-gray-800 break-words">{mainCourse.name}</h3>
							<p className="text-xs md:text-sm text-gray-500">{mainCourse.category}</p>
						</div>
					</div>
				)}

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="flex items-center space-x-3">
						<DollarSign className="text-green-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
						<span className="text-sm md:text-lg font-semibold">
							{meal.prices[0].price} {meal.prices[0].currency.toUpperCase()}
						</span>
					</div>

					<div className="flex items-center space-x-3">
						<Store className="text-blue-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
						{menu.cafeteria.urlSite ? (
							<Link href={menu.cafeteria.urlSite} className="min-w-0">
								<span className="text-sm md:text-lg font-medium hover:underline break-words line-clamp-1">{menu.cafeteria.name}</span>
							</Link>
						) : (
							<span className="text-sm md:text-lg font-medium break-words line-clamp-1">{menu.cafeteria.name}</span>
						)}
					</div>
				</div>

				<div className="flex items-start space-x-3">
					<MapPin className="text-red-400 w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
					<div className="min-w-0">
						{menu.cafeteria.urlLocation ? (
							<Link href={menu.cafeteria.urlLocation}>
								<span className="text-xs md:text-sm text-gray-600 hover:underline break-words">{menu.cafeteria.address}</span>
							</Link>
						) : (
							<span className="text-xs md:text-sm text-gray-600 break-words">{menu.cafeteria.address}</span>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
