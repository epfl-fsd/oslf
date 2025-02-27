import { MenuList } from '@/components/menu/list';
import { getMenus } from '@/services/menu';
import { Menu } from '@/types/menu';

export default async function Home() {
	const menus: Menu[] | null = await getMenus();

	return <MenuList menus={menus} />;
}
