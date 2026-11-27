import type { tButtonSize, tButtonType, tButtonVariant } from '@shared/ui/ui-button/UIButton';
import type { IUser } from "@modules/users/model/IUser.ts";


export interface SettingsItem {
    id: 'username' | 'bio' | 'theme' | 'delete';
    title: string;
    description: string;
    buttonText?: string;
    buttonSize?: tButtonSize;
    buttonVariant?: tButtonVariant;
    buttonType?: tButtonType;
    action?: tSettingsAction;
}

export type tSettingsAction =
    | 'change-username'
    | 'toggle-theme'
    | 'delete-account';

export const createSettingsBarItems = (
    userData: IUser | null
): SettingsItem[] => [
    {
        id: 'username',
        title: 'Имя пользователя',
        description: userData?.username ?? 'Not Found',
        buttonText: 'Изменить имя',
        buttonSize: 'sm',
        buttonVariant: 'primary',
        buttonType: 'button',
        action: 'change-username',
    },
    {
        id: 'bio',
        title: 'Описание профиля',
        description: userData?.bio ?? 'Not Found',
        buttonText: 'Изменить описание',
        buttonSize: 'sm',
        buttonVariant: 'primary',
        buttonType: 'button',
        action: 'change-username',
    },
    {
        id: 'theme',
        title: 'Тема сайта',
        description: 'Как сайт выглядит на вашем устройстве',
        buttonText: 'Тема',
        buttonSize: 'sm',
        buttonVariant: 'primary',
        buttonType: 'button',
        action: 'toggle-theme',
    },
    {
        id: 'delete',
        title: 'Удалить аккаунт',
        description: 'Вы можете восстановится аккаунт в течении 30 дней',
        buttonText: 'Удалить аккаунт',
        buttonSize: 'sm',
        buttonVariant: 'danger',
        buttonType: 'button',
        action: 'delete-account',
    },
];