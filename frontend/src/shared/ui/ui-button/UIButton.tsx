'use client';

import React from 'react';
import styles from './UIButton.module.scss';
import classNames from 'classnames';

export type tButtonVariant = 'primary' | 'danger' | 'success';
export type tButtonType = 'button' | 'submit' | 'reset';
export type tButtonSize = 'sm' | 'md' | 'lg';

export interface IButtonProps  {
    children: React.ReactNode;
    size?: tButtonSize;
    variant?: tButtonVariant;
    className?: string;
    onClick?: () => void;
    type?: tButtonType;
}

export const UIButton: React.FC<IButtonProps > = (
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