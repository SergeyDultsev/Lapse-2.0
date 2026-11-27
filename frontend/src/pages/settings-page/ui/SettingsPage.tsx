import type { FC } from "react";
import { useMe } from "@modules/auth/model/auth.queries.ts";
import { UIButton } from "@shared/ui/ui-button/UIButton.tsx";
import { createSettingsBarItems } from "@/pages/settings-page/config/settings.config.ts";

import styles from './SettingsPage.module.scss'

export const SettingsPage: FC = () => {
    const { data: me } = useMe();

    const settingItems = createSettingsBarItems(me ?? null);

    return (
        <main className="main">
            <section className={styles['settings-bar']}>
                <h3 className={styles['settings-title']}>
                    Настройки
                </h3>

                <hr className={styles['border']} />

                <div className={styles['settings-list']}>
                    {settingItems.map((item) => (
                        <div className={styles['settings-item']} key={item.id}>
                            <div className={styles['settings-item__info']}>
                                <h4 className={styles['settings-item__title']}>
                                    {item.title}
                                </h4>
                                <p className={styles['settings-item__description']}>
                                    {item.description}
                                </p>
                            </div>
                            <UIButton
                                variant={item.buttonVariant}
                                type={item.buttonType}
                                size={item.buttonSize}
                                onClick={item.action}
                            >
                                {item.buttonText}
                            </UIButton>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};