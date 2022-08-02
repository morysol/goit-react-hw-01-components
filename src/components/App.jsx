import React from 'react';

import user from './SocialProfile/user.json';
import { Profile } from './SocialProfile/SocialProfile';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/Friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/Transactions.json';

import s from './default/App.module.css';

export const App = () => {
  return (
    <div
      className={s.defaultapp}
      // style={{
      //   // height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 24,
      //   color: '#010101',
      //   flexDirection: 'column',
      // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
// React homework template
