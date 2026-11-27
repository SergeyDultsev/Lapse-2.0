import type { FC } from "react"
import { Link } from "react-router";
import { createNavBarItems } from "@components/nav-bar/config/navbar.config.tsx";
import { UINavItem } from "@shared/ui/ui-nav-item/ui/UINavItem.tsx";
import { useMe } from "@modules/auth/model/auth.queries.ts";

import styles from './NavBar.module.scss';

export const NavBar: FC = () => {
    const { data: me } = useMe();

    const items = createNavBarItems(me?.userId);

    return (
        <section className={styles['nav-bar']}>

            <div className={styles['nav-bar__wrapper']}>
                <div className={styles['nav-bar__wrapper__top']}>
                    <Link to={'/'}>
                        <div className={styles['logo']}>
                            <img src={'/images/logo.svg'} alt="logo" />
                        </div>
                    </Link>

                    <ul className={styles['nav-list']}>
                        {items.filter(item => item.isVisible).map(item => (
                            <UINavItem key={item.name} {...item}  />
                        ))}
                    </ul>

                </div>
            </div>

        </section>
    );
};