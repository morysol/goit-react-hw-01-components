// import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css';

export const FriendList = ({ friends }) => {
  const list = friends.map(elem => (
    <li className="FriendList__item" key={elem.id}>
      <span
        className="FriendList__status"
        style={elem.isOnline ? { color: 'green' } : { color: 'red' }}
      >
        &#9679;
      </span>
      <img
        className="FriendList__avatar"
        src={elem.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="FriendList__name">{elem.name}</p>
    </li>
  ));
  return (
    <section className="FriendList">
      <ul className="FriendList__stats">{list}</ul>
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
