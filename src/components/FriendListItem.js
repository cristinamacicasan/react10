import React from 'react';
import styles from './friendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={styles.online} style={{ backgroundColor: isOnline ? 'green' : 'red' }} />
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
