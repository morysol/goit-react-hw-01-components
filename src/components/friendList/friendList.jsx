import React from 'react';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  const list = friends.map(elem => (
    <li className="item" key={elem.id}>
      <span className="status">{elem.isOnline}</span>
      <img className="avatar" src={elem.avatar} alt="User avatar" width="48" />
      <p className="name">{elem.name}</p>
    </li>
  ));
  return (
    <section className="friend-list">
      <ul className="stat-list">{list}</ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.bool.isRequired,
      PropTypes.number.isRequired
    )
  ),
};
