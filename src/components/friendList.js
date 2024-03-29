import React from 'react';
import FriendListItem from './FriendListItem';
import styles from '../components/friendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend, index) => (
        <FriendListItem
          key={index}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;
