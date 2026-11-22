import type { FC } from "react";
import {Link, useLocation} from 'react-router'
import type { INavbarItem } from "@components/nav-bar/config/navbar.config.tsx";

import styles from './UINavItem.module.scss';

export const UINavItem: FC<INavbarItem> = ({
    name,
    url,
    icon,
    onClick,
    openInNewTab,
}) => {
    const location = useLocation();

    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };

    if (!url) {
        return (
            <li
                className={styles['nav-item']}
                onClick={handleClick}
            >
                <span className={styles['nav-item__icon']}>{icon}</span>
                <p className={styles['nav-item__description']}>{name}</p>
            </li>
        );
    }

    return (
        <Link
            to={url}
            target={openInNewTab ? '_blank' : undefined
        }>
            <li
                className={`${location.pathname === url
                    ? styles['nav-item__active']
                    : styles['nav-item']
                }`}
            >
                <span className={styles['nav-item__icon']}>{icon}</span>
                <p className={styles['nav-item__description']}>{name}</p>
            </li>
        </Link>
    );
}