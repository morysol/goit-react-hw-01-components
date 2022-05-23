import React from 'react';

import user from './social-profile/user.json';
import { Profile } from './social-profile/social-profile';

import { Statistics } from './statistics/statistics';
import data from './statistics/data.json';

import { FriendList } from './friendList/friendList';
import friendsList from './friendList/friends.json';

import { TransactionHistory } from './transactionHistory/transactionHistory';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
        flexDirection: 'column',
      }}
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
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
// React homework template
