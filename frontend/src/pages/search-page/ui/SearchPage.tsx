import type { FC } from "react";
import { UIButton } from "@shared/ui/ui-button/UIButton.tsx";

import styles from "./SearchPage.module.scss";
import {UIIcon} from "@shared/ui/ui-icon/UIIcon.tsx";

export const SearchPage: FC = () => {

    return (
        <main className={'main'}>
            <section className={styles['search-bar']}>
                <div className={styles['search-bar__top']}>
                    <div className={styles['search_block']}>
                        <UIIcon name={'Search'} />
                        <input className={styles['search-input']} placeholder={'Поиск...'} />
                    </div>
                    <UIButton
                        size={'md'}
                        variant={'primary'}
                    >
                        Фильтры
                    </UIButton>
                </div>

                <div className={styles['search-bar__bottom']}>
                    <UIButton
                        size={'sm'}
                        variant={'primary'}
                    >
                        Пользователи
                    </UIButton>
                    <UIButton
                        size={'sm'}
                        variant={'primary'}
                    >
                        Посты
                    </UIButton>
                </div>
            </section>

            <section className={styles['user-list']}>
                <article className={styles['user-item']}>
                    <div className={styles['user-item_info']}>
                        <h2 className={styles['user-item_info__name']}>Сергей Дульцев</h2>
                        <p  className={styles['user-item_info__description']}>CEO и основатель платформы.</p>
                    </div>

                    <UIButton
                        size={'sm'}
                        variant={'primary'}
                    >
                        Подписаться
                    </UIButton>
                </article>
            </section>
        </main>
    );
};