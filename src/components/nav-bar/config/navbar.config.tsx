import React, {type ReactNode} from 'react';

export interface INavbarItem {
    name: string;
    isVisible?: boolean;
    url?: string;
    icon?: ReactNode;
    onClick?: () => void;
    openInNewTab?: boolean;
}

export const createNavBarItems = (): INavbarItem[] => [
    {
        name: 'Лента',
        url: '/',
        isVisible: true,
    },
    {
        name: 'Профиль',
        url: '/profile',
        isVisible: true,
    },
    {
        name: 'Поиск',
        url: '/search',
        isVisible: true,
    },
    {
        name: 'Написать пост',
        isVisible: false,
    },
    {
        name: 'История',
        url: '/history',
        isVisible: false,
    },
    {
        name: 'Лайки',
        url: '/favorite',
        isVisible: false,
    },
    {
        name: 'Настройки',
        url: '/settings',
        isVisible: false,
    },
    {
        name: 'Тема',
        isVisible: true,
    },
    {
        name: 'Выход',
        isVisible: false,
    },
    {
        name: 'Вход',
        isVisible: true,
    },
];