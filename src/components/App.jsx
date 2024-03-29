// App.js

import React from 'react';
import Profile from './profile'; // Importați componenta Profile
import Statistics from './statistics';
import userData from './user.json'; // Importați datele utilizatorului
import statsData from './data.json'
import PropTypes from 'prop-types';
import friendsData from '../components/friends.json'
import FriendList from './friendList';
import FriendListItem from './/FriendListItem';


export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <FriendListItem />
      {/* Aici vine tema 3 , componenta 3*/}
    </div>
  );
}

App.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default App;
