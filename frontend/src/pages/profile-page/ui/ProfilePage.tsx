import type { FC } from "react";
import { ProfileBar } from "@modules/users/components/profile-bar/ui/ProfileBar.tsx";

export const ProfilePage: FC = () => {

    const user = {
        userId: '1',
        username: 'Serejka',
        email: 'Serejka@',
        bio: 'Serejka',
        meta: {
            countFollowers: 2,
            countSubscriptions: 3,
            createdAt: Date,
            updatedAt: Date,
        }
    }

    return (
        <main className={'main'}>
            <ProfileBar {...user} />
        </main>
    );
};