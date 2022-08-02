// import React from 'react';
// import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return <ul className={s.stats}>{<FriendListItem friends={friends} />}</ul>;
};
