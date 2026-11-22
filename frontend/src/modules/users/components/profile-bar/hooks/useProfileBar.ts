import { useMe } from '@modules/auth/model/auth.queries';
import { useMemo } from 'react';
import { createButtonsMe, createButtonsUsers } from '@modules/users/components/profile-bar/config/profile.config';

export const useProfileBar = (id: string) => {
    const { data: me } = useMe();

    const buttonMe = useMemo(
        () => createButtonsMe(),
        [id]
    );

    const buttonUser = useMemo(
        () => createButtonsUsers(),
        [id]
    );

    return {
        buttonMe,
        buttonUser,
        me,
    };
};