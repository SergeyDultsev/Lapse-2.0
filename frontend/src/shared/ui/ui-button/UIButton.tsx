'use client';

import type { FC, ReactNode} from 'react';
import classNames from 'classnames';

export type tButtonVariant = 'primary' | 'danger' | 'success';
export type tButtonType = 'button' | 'submit' | 'reset';
export type tButtonSize = 'sm' | 'md' | 'lg';

export interface IButtonProps  {
    children: ReactNode;
    size?: tButtonSize;
    variant?: tButtonVariant;
    className?: string;
    onClick?: () => void;
    type?: tButtonType;
}

import styles from './UIButton.module.scss';

export const UIButton: FC<IButtonProps > = (
    {
        children,
        className,
        size,
        variant,
        onClick,
        type = 'button',
    }) => {

    return (
        <button
            className={classNames(
                styles['ui-button'],
                styles[`ui-button__${size}`],
                styles[`ui-button__${variant}`],
                className
            )}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};