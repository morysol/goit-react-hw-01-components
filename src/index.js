import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { SocialProfile } from 'components/social-profile/social-profile.jsx';
import './index.css';

import user from './components/user.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <SocialProfile
      I
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </React.StrictMode>
);
// console.log('dddddddddddd');
