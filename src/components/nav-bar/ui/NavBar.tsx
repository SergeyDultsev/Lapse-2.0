import { Link } from "react-router";
import { createNavBarItems } from "@components/nav-bar/config/navbar.config.tsx";
import styles from './NavBar.module.scss';

export const NavBar: React.FC = () => {

    const items = createNavBarItems();

    return (
        <section className={styles['nav-bar']}>
            <div className={styles['nav-bar__top']}>
                <Link href={'/'}>
                    <div className={styles['logo']}>
                        <img src={'public/images/logo.svg'} alt="logo" />
                    </div>
                </Link>

                <nav className={styles['nav-list']}>
                    {items
                        .filter((item) => item.isVisible).map((item) => (
                            <Link href={item.url} key={item.name}>
                                <li
                                    className={styles['nav-item']}
                                >
                                    <span className={styles['nav-item__icon']}>{item.icon}</span>
                                    <p className={styles['nav-item__description']}>{item.name}</p>
                                </li>
                            </Link>
                        ))}
                </nav>
            </div>
        </section>
    );
};