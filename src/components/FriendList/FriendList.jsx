// import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  const list = friends.map(elem => (
    <li className={s.item} key={elem.id}>
      <span
        className="FriendList__status"
        style={elem.isOnline ? { color: 'green' } : { color: 'red' }}
      >
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
  ));
  return (
    <section className={s.list}>
      <ul className={s.stats}>{list}</ul>
    </section>
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
