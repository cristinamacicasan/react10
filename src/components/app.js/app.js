import React from 'react';
import Profile from './Profile';
import userData from './user.json'; // Asigură-te că ai un fișier user.json în același director

const App = () => {
  return (
    <div>
      <h1>Cristins Macicasan</h1>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

export default App;
