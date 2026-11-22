import type { FC } from "react";
import { UIButton } from "@shared/ui/ui-button/UIButton.tsx";

import styles from "./SearchPage.module.scss";

export const SearchPage: FC = () => {

    return (
        <main className={'main'}>
            <section className={styles['search-bar']}>
                <div className={styles['search-bar__top']}>
                    <input className={styles['search-input']} placeholder={'Поиск...'} />
                    <UIButton
                        size={'md'}
                        variant={'primary'}
                    >
                        Поиск
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
        </main>
    );
};