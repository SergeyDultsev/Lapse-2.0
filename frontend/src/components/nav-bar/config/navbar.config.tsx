import { UIIcon } from "@shared/ui/ui-icon/UIIcon.tsx";
import type { INavbarItem } from "@shared/ui/ui-nav-item/config/nav-item.config.ts";

export const createNavBarItems = (
    userId: string,
    fn: {
        logout: () => void;
        openAuthModal: () => void;
    }
): INavbarItem[] => [
    {
        name: 'Лента',
        url: '/',
        icon: <UIIcon name={'Explore'} />,
        isVisible: true,
    },
    {
        name: 'Профиль',
        url: `/profile/${userId}`,
        icon: <UIIcon name={'Profile'} />,
        isVisible: userId !== undefined,
    },
    {
        name: 'Поиск',
        url: '/search',
        icon: <UIIcon name={'Search'} />,
        isVisible: true,
    },
    {
        name: 'Написать пост',
        icon: <UIIcon name={'Write'} />,
        isVisible: userId !== undefined,
    },
    {
        name: 'История',
        url: '/history',
        icon: <UIIcon name={'History'} />,
        isVisible: userId !== undefined,
    },
    {
        name: 'Лайки',
        url: '/favorites',
        icon: <UIIcon name={'Favorite'} />,
        isVisible: userId !== undefined,
    },
    {
        name: 'Настройки',
        url: '/settings',
        icon: <UIIcon name={'Settings'} />,
        isVisible: userId !== undefined,
    },
    {
        name: 'Тема',
        icon: <UIIcon name={'DarkMode'} />,
        isVisible: true,
    },
    {
        name: 'Выход',
        icon: <UIIcon name={'Exit'} />,
        isVisible: userId !== undefined,
        onClick: fn.logout,
    },
    {
        name: 'Вход',
        icon: <UIIcon name={'Exit'} />,
        isVisible: userId === undefined,
        onClick: fn.openAuthModal,
    },
];