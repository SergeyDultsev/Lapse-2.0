import type { FC } from "react";
import type { IUser } from "@modules/users/model/IUser.ts";

import styles from './Avatar.module.scss'

export const Avatar: FC<IUser> = (user: IUser) => {

    return (
      <img
          className={styles['user-avatar']}
          src={user.avatarUrl ? '' : '/images/avatar.jpg' }
          alt={user.username}
      />
    );
}