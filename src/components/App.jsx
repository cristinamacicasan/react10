// App.js

import React from 'react';
import Profile from './profile'; // Importați componenta Profile
import Statistics from './statistics';
import userData from './user.json'; // Importați datele utilizatorului
import statsData from './data.json'

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
      {/* Aici vine tema 3 , componenta 3*/}
    </div>
  );
}

export default App;
