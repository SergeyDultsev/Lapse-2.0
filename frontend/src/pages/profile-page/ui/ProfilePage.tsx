import type { FC } from "react";
import { ProfileBar } from "@modules/users/components/profile-bar/ui/ProfileBar.tsx";
import { useUser } from "@modules/users/model/user.queries.ts";
import {useParams} from "react-router";

export const ProfilePage: FC = () => {
    const { userId } = useParams<{ userId: string }>()
    const { data: user, isLoading, isError } = useUser(userId);

    return (
        <main className={'main'}>
            {isLoading && <p>Загрузка пользователя...</p>}
            {isError && <p>Не удалось загрузить пользователя</p>}

            {user && <ProfileBar {...user} />}
        </main>
    );
};