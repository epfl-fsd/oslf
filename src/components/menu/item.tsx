import React from 'react';
import { Beef, Store, DollarSign, MapPin } from 'lucide-react';
import { Menu } from '@/types/menu';
import Link from 'next/link';

export const MenuItem: React.FC<{ menu: Menu }> = ({ menu }) => {
	const meal = menu.meals[0];
	const mainCourse = meal.items.find((item) => item.menuSection === 'mainCourse')?.recipe;

	return (
		<div className="w-full mx-auto border-b last:border-0 sm:rounded-lg sm:shadow-lg sm:border-0 sm:transition-shadow sm:duration-300">
			<div className="p-3 px-0 space-y-3 sm:p-4 md:p-6 sm:space-y-4">
				{mainCourse && (
					<div className="flex items-center sm:items-start gap-2 p-2 bg-gray-50 rounded-md shadow-sm sm:gap-4 sm:p-4">
						<Beef className="flex-shrink-0 w-6 h-6 sm:mt-1 text-red-600 md:w-10 md:h-10" />
						<div className="min-w-0">
							<h3 className="text-sm font-semibold text-gray-800 break-words md:text-lg">{mainCourse.name}</h3>
							<p className="hidden sm:flex text-gray-500 md:text-sm">{mainCourse.category}</p>
						</div>
					</div>
				)}

				<div className="grid grid-cols-12 sm:hidden pb-4 pt-1">
					<div className="col-span-3 col-start-1 flex">
						<DollarSign className="inline-block w-5 h-5 text-green-500" />
						<span className="text-sm font-semibold">
							{meal.prices ? (
								<>
									{meal.prices[0].price} {meal.prices[0].currency.toUpperCase()}
								</>
							) : (
								<span className="text-sm text-gray-500">Price not available</span>
							)}
						</span>
					</div>

					<div className="col-span-3 col-start-4 flex gap-1">
						<Store className="inline-block w-5 h-5 text-blue-500 ml-[2svw]" />
						{menu.cafeteria.urlSite ? (
							<Link href={menu.cafeteria.urlSite} target="_blank" className="inline-block min-w-0">
								<span className="text-sm font-medium break-words line-clamp-1 hover:underline">{menu.cafeteria.name}</span>
							</Link>
						) : (
							<span className="text-sm font-medium break-words line-clamp-1">{menu.cafeteria.name}</span>
						)}
					</div>

					<div className="col-span-8 col-start-7 flex items-center gap-1">
						<MapPin className="inline-block w-5 h-5 text-red-400" />
						{menu.cafeteria.urlLocation ? (
							<Link href={menu.cafeteria.urlLocation} target="_blank" className="inline-block w-[90%]">
								<span className="text-xs text-gray-600 break-words line-clamp-1 hover:underline">{menu.cafeteria.address}</span>
							</Link>
						) : (
							<span className="text-xs text-gray-600 break-words line-clamp-1">{menu.cafeteria.address}</span>
						)}
					</div>
				</div>

				<div className="hidden sm:block sm:space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="flex items-center gap-3">
							<DollarSign className="flex-shrink-0 w-6 h-6 text-green-500" />
							<span className="text-lg font-semibold">
								{meal.prices ? (
									<>
										{meal.prices[0].price} {meal.prices[0].currency.toUpperCase()}
									</>
								) : (
									<span className="text-sm text-gray-500">Price not available</span>
								)}
							</span>
						</div>

						<div className="flex items-center gap-3">
							<Store className="flex-shrink-0 w-6 h-6 text-blue-500" />
							{menu.cafeteria.urlSite ? (
								<Link href={menu.cafeteria.urlSite} target="_blank" className="min-w-0">
									<span className="text-lg font-medium break-words line-clamp-1 hover:underline">{menu.cafeteria.name}</span>
								</Link>
							) : (
								<span className="text-lg font-medium break-words line-clamp-1">{menu.cafeteria.name}</span>
							)}
						</div>
					</div>

					<div className="flex items-center gap-3">
						<MapPin className="flex-shrink-0 w-6 h-6 text-red-400" />
						{menu.cafeteria.urlLocation ? (
							<Link href={menu.cafeteria.urlLocation} target="_blank" className="min-w-0">
								<span className="text-sm text-gray-600 break-words hover:underline">{menu.cafeteria.address}</span>
							</Link>
						) : (
							<span className="text-sm text-gray-600 break-words">{menu.cafeteria.address}</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
