'use client';

import { type FC } from 'react';
import styles from './UIInput.module.scss';
import classNames from 'classnames';

type tInputTextType = 'text' | 'email' | 'password' | 'url' | 'search'

export interface IInputBase {
    placeholder: string
    typeInput?: 'base' | 'auth' | 'search'
    type: tInputTextType
    className?: string
    required?: boolean
    name?: string
    value?: string | number
    onChange?: (name: string, value: string | number) => void
}

export const UIInput: FC<IInputBase> = (
    {
        placeholder,
        typeInput,
        type,
        className,
        required,
        name,
        value,
        onChange,
    }
) => {
    return (
        <input
            className={classNames(
                styles['ui-input'],
                styles[`ui-input__${typeInput}`],
                className
            )}
            type={type}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={(e) => onChange && onChange(name || e.target.value, e.target.value)}
        />
    );
};