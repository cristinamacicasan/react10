import React from 'react';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
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
