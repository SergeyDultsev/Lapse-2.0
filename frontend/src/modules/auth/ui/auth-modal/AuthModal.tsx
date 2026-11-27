'use client';

import type { FC } from "react";

import styles from './AuthModal.module.scss';
import { AuthForm } from "@modules/auth/ui/auth-form/AuthForm.tsx";
import type { tCredentialsForm } from "@modules/auth/config/auth.config.ts";

export const AuthModal: FC<{ mode: tCredentialsForm }> = ({ mode }) => {
    return (
        <div
            className={styles['auth-modal']}
            onClick={(e) => e.stopPropagation()}
        >
            <AuthForm mode={mode} />
        </div>
    );
};