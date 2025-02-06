import { Error } from '@/components/error';
import { MenuList } from '@/components/menu/list';
import { getMenus } from '@/services/menu';
import { Menu } from '@/types/menu';
import { CircleAlert } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default async function Home() {
	const menus: Menu[] | null = await getMenus();

	return <MenuList menus={menus} />;
}
