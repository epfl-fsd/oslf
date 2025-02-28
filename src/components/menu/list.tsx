import React from 'react';
import { Menu } from '@/types/menu';
import { MenuItem } from './item';
import { useTranslations } from 'next-intl';
import { Error } from '../error';
import { CircleAlert, Frown } from 'lucide-react';

export const MenuList: React.FC<{ menus: Menu[] | null }> = ({ menus }) => {
	const t = useTranslations('Home');

	if (!menus) {
		return <Error text={t('error.notFound')} subText={t('error.problem')} Icon={CircleAlert} color="text-red-500" />;
	}

	if (menus.length === 0) {
		return <Error text={t('error.noMenus')} subText={t('error.tryAgain')} Icon={Frown} color="text-gray-500" />;
	}

	return (
		<div className="text-primary-secondary sm:space-y-3 mx-auto md:w-[60%] sm:w-[80%] w-full py-2 px-3 items-center justify-between">
			{menus.map((menu, index) => (
				<MenuItem key={index} menu={menu} />
			))}
		</div>
	);
};
