// import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.stats}>
      {friends.map(elem => (
        <li className={s.item} key={elem.id}>
          <span className={elem.isOnline ? s.statusgreen : s.statusred}>
            &#9679;
          </span>
          <img
            className={s.avatar}
            src={elem.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{elem.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape(
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.bool.isRequired,
      PropTypes.number.isRequired
    )
  ),
};
