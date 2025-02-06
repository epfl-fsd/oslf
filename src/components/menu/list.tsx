import React from 'react';
import { Menu } from '@/types/menu';
import { MenuItem } from './item';

export const MenuList: React.FC<{ menus: Menu[] }> = ({ menus }) => {
	return (
		<div className="text-primary-secondary space-y-3 mx-auto md:w-[60%] sm:w-[80%] w-full py-2 px-3 items-center justify-between">
			{menus.map((menu, index) => (
				<MenuItem key={index} menu={menu} />
			))}
		</div>
	);
};
