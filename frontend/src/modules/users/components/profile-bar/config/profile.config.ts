import type { IButtonProps } from "@shared/ui/ui-button/UIButton.tsx";


export const createButtonsUsers = (): IButtonProps[] => [
    {
        children: 'Подписаться',
        variant: 'primary',
        size: 'md',
    },
];

export const createButtonsMe = (): IButtonProps[] => [
    {
        children: 'Редактирование профиля',
        variant: 'primary',
        size: 'md',
    },
];