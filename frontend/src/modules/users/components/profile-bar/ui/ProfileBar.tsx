import type { FC } from "react";
import { useProfileBar } from '@modules/users/components/profile-bar/hooks/useProfileBar';
import type { IUser } from '@modules/users/model/IUser.ts';
import { shortyNumber } from "@shared/utils/shortyNumber.ts";
import { UIButton } from "@shared/ui/ui-button/UIButton.tsx";

import styles from './ProfileBar.module.scss';

export const ProfileBar: FC<IUser> = (user: IUser) => {
    const { buttonMe, buttonUser, me } = useProfileBar(user.userId);

    return (
        <section className={styles['profile']}>
            <div className={styles['profile-info']}>
                <div className={styles['profile-info__image']}></div>
                <div className={styles['profile-info__content']}>
                    <h2 className={styles['profile-info__content__name']}>{ user.username }</h2>
                    <p className={styles['profile-info__content__data']}>{ user.bio }</p>
                    <p className={styles['profile-info__content__data']}>{ shortyNumber(user.meta.countFollowers) } подписчиков</p>
                    <p className={styles['profile-info__content__data']}>{ shortyNumber(user.meta.countSubscriptions) } подписок</p>
                </div>
            </div>
            <div className={styles['profile__btns']}>
                {me?.userId === user.userId ? (
                    buttonMe.map((button) => (
                        <UIButton variant={button.variant} size={button.size} key={button.children}>
                            { button.children }
                        </UIButton>
                    ))
                ): (
                    buttonUser.map((button) => (
                        <UIButton variant={button.variant} size={button.size} key={button.children}>
                            { button.children }
                        </UIButton>
                    ))
                )}
            </div>
        </section>
    );
};
