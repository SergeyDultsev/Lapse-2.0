import { Link } from "react-router";
import { createNavBarItems } from "@components/nav-bar/config/navbar.config.tsx";
import styles from './NavBar.module.scss';
import type { FC } from "react";

export const NavBar: FC = () => {

    const items = createNavBarItems();

    return (
        <section className={styles['nav-bar']}>
            <div className={styles['nav-bar__top']}>
                <Link to={'/'}>
                    <div className={styles['logo']}>
                        <img src={'public/images/logo.svg'} alt="logo" />
                    </div>
                </Link>

                <ul className={styles['nav-list']}>
                    {items.filter(item => item.isVisible).map(item => (
                        <Link to={item.url ?? '#'} key={item.name}>
                            <li key={item.name} className={styles['nav-item']}>
                                    <span className={styles['nav-item__icon']}>{item.icon}</span>
                                    <p className={styles['nav-item__description']}>{item.name}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </section>
    );
};