import type { FC } from "react";

import { UIButton } from '@shared/ui/ui-button/UIButton';
import { UIInput } from '@shared/ui/ui-input/UIInput';
import { useAuth } from "@modules/auth/hooks/useAuth.ts";
import { useModal } from "@app/providers/ModalProvider.tsx";
import type { tCredentialsForm } from "@modules/auth/config/auth.config.ts";

import styles from './AuthForm.module.scss';

export const AuthForm: FC<{
    mode: tCredentialsForm
}> = ({ mode }) => {
    const {
        credentialsForm,
        authData,
        formConfig,
        login,
        register,
        setCredentialsForm,
        setForm,
    } = useAuth(mode);

    const modal = useModal();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            if (credentialsForm === 'login') {
                await login({
                    email: authData.email,
                    password: authData.password,
                });
            } else {
                await register({
                    username: authData.username,
                    email: authData.email,
                    password: authData.password,
                    repeatPassword: authData.repeatPassword,
                });
            }

            modal?.closeModal();
        } catch (e) { console.error(e); }
    };

    return (
        <form className={styles['auth-form']} onSubmit={onSubmit}>

            {credentialsForm === 'login' ?
                (
                    <div className={styles['auth-form__header']}>
                        <h2 className={styles['auth-form__header__title']}>
                            { formConfig.title }
                        </h2>
                    </div>
                ) : (
                    <div className={styles['auth-form__header']}>
                        <h2 className={styles['auth-form__header__title']}>
                            { formConfig.title }
                        </h2>
                    </div>
                )
            }

            {credentialsForm === 'login' ?
                (
                    <div className={styles['auth-form__inputs']}>
                        <UIInput
                            name="email"
                            typeInput={'auth'}
                            type={'email'}
                            placeholder={'Почта'}
                            required={true}
                            value={authData['email']}
                            onChange={setForm}
                        />
                        <UIInput
                            name="password"
                            typeInput={'auth'}
                            type={'password'}
                            placeholder={'Пароль'}
                            required={true}
                            value={authData['password']}
                            onChange={setForm}
                        />
                    </div>
                ) : (
                    <div className={styles['auth-form__inputs']}>
                        <UIInput
                            name="username"
                            typeInput={'auth'}
                            type={'text'}
                            placeholder={'Имя пользователя'}
                            required={true}
                            value={authData['username']}
                            onChange={setForm}
                        />
                        <UIInput
                            name="email"
                            typeInput={'auth'}
                            type={'email'}
                            placeholder={'Почта'}
                            required={true}
                            value={authData['email']}
                            onChange={setForm}
                        />
                        <UIInput
                            name="password"
                            typeInput={'auth'}
                            type={'password'}
                            placeholder={'Пароль'}
                            required={true}
                            value={authData['password']}
                            onChange={setForm}
                        />
                        <UIInput
                            name="repeatPassword"
                            typeInput={'auth'}
                            type={'password'}
                            placeholder={'Повтор пароля'}
                            required={true}
                            value={authData['repeatPassword']}
                            onChange={setForm}
                        />
                    </div>
                )
            }

            {credentialsForm === 'login' ?
                (
                    <UIButton
                        size={'lg'}
                        variant={'primary'}
                        type="submit"
                    >
                        { formConfig.button }
                    </UIButton>
                ) : (
                    <UIButton
                        size={'lg'}
                        variant={'primary'}
                        type="submit"
                    >
                        { formConfig.button }
                    </UIButton>
                )
            }

            {credentialsForm === 'login' ?
                (
                    <div className={styles['auth-form__footer']}>
                        <p className={styles['auth-form__footer__description']}>Первый раз на сайте?</p>
                        <p
                            className={styles['auth-form__footer__link']}
                            onClick={() => setCredentialsForm('register')}
                        >
                            { formConfig.footer }
                        </p>
                    </div>
                ) : (
                    <div className={styles['auth-form__footer']}>
                        <p className={styles['auth-form__footer__description']}>Уже есть аккаунт?</p>
                        <p
                            className={styles['auth-form__footer__link']}
                            onClick={() => setCredentialsForm('login')}
                        >
                            { formConfig.footer }
                        </p>
                    </div>
                )
            }
        </form>
    );
};;