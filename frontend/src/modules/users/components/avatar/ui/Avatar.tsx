import type { FC } from "react";

import styles from './Avatar.module.scss'

interface AvatarProps {
    avatarUrl: string | null;
    username: string;
}

export const Avatar: FC<AvatarProps> = ({ avatarUrl, username }) => {

    console.log(avatarUrl)
    return (
      <img
          className={styles['user-avatar']}
          src={avatarUrl || '/images/avatar.jpg'}
          alt={username}
      />
    );
}