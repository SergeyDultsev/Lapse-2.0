import type { FC } from "react";
import { ProfileBar } from "@modules/users/components/profile-bar/ui/ProfileBar.tsx";

export const ProfilePage: FC = () => {

    const user = {
        userId: '1',
        username: 'Bertram Gilfoyle',
        email: 'Gilfoyle@gmail.com',
        bio: 'VP of Architecture on Pied Piper, founder of cybersecurity firm',
        meta: {
            countFollowers: 2,
            countSubscriptions: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    }

    return (
        <main className={'main'}>
            <ProfileBar {...user} />
        </main>
    );
};