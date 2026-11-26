import type { FC } from "react";
import { useProfileBar } from '@modules/users/components/profile-bar/hooks/useProfileBar';
import type { IUser } from '@modules/users/model/IUser.ts';
import { shortyNumber } from "@shared/utils/shortyNumber.ts";
import { UIButton } from "@shared/ui/ui-button/UIButton.tsx";

import styles from './ProfileBar.module.scss';

export const ProfileBar: FC<IUser> = (user: IUser) => {
    const { buttonMe, buttonUser, me } = useProfileBar(user.userId);


    // TODO: Сделать надписи подписчиков/подписок/поста исходя от реально кол-ва
    return (
        <section className={styles['profile']}>
            <div className={styles['profile-info']}>
                <div className={styles['profile-info__image']}></div>
                <div className={styles['profile-info__content']}>
                    <div className={styles['profile-info__content__top']}>
                        <h2 className={styles['profile-info__content__name']}>{ user.username }</h2>
                        <p className={styles['profile-info__content__data']}>{ user.bio }</p>
                    </div>
                    <div className={styles['profile-info__content__bottom']}>
                        <p className={styles['profile-info__content__data']}>{ shortyNumber(user.meta.countFollowers) } подписчика - (ков)</p>
                        <p className={styles['profile-info__content__data']}>{ shortyNumber(user.meta.countSubscriptions) } подписки - (ок)</p>
                        <p className={styles['profile-info__content__data']}>{ shortyNumber(user.meta.countPosts) } поста - (ов)</p>
                    </div>
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
