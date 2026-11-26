import {type FC, useState } from "react";
import { UIButton } from "@shared/ui/ui-button/UIButton.tsx";

import styles from "./SearchPage.module.scss";
import { UIIcon } from "@shared/ui/ui-icon/UIIcon.tsx";
import { useDebounce } from "@shared/hooks/useDebounce.ts";
import { useUsersRecommendation } from "@modules/users/model/user.queries.ts";
import { useNavigate } from "react-router";
import {Avatar} from "@modules/users/components/avatar/ui/Avatar.tsx";

export const SearchPage: FC = () => {
    const [query, setQuery] = useState<string | null>('');
    const navigate = useNavigate();

    const { data: recommendations, isLoading, isError } = useUsersRecommendation();

    const handleSearch = (q: string) => setQuery(q);
    const debouncedSearch = useDebounce(handleSearch);

    const handleRedirect = (userId: string) => {
        navigate(`/profile/${userId}`)
    }

    return (
        <main className={'main'}>
            <section className={styles['search-bar']}>
                <div className={styles['search-bar__top']}>
                    <div className={styles['search_block']}>
                        <UIIcon name={'Search'} />
                        <input
                            className={styles['search-input']}
                            placeholder={'Поиск...'}
                            onChange={(e) => debouncedSearch(e.target.value)}
                        />
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
                {isLoading && <p>Загрузка рекомендаций...</p>}
                {isError && <p>Не удалось загрузить пользователей</p>}

                {recommendations?.map((user) => (
                    <article
                        key={user.userId}
                        className={styles['user-item']}
                        onClick={() => handleRedirect(user.userId)}
                    >
                        <div className={styles['user-item__left']}>
                            <Avatar avatarUrl={user.avatarUrl} username={user.username} />

                            <div className={styles['user-item__left__info']}>
                                <h2 className={styles['user-item__left__info__name']}>{user.username}</h2>
                                <p className={styles['user-item__left__info__description']}>{user.bio}</p>
                            </div>
                        </div>

                        <UIButton
                            size={'sm'}
                            variant={'primary'}
                        >
                            Подписаться
                        </UIButton>
                    </article>
                ))}
            </section>
        </main>
    );
};