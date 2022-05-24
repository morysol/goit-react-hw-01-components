// import React from 'react';

import PropTypes from 'prop-types';
import './Social.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="Profile">
      <div className="Profile__description">
        <img src={avatar} alt={avatar} className="Profile__avatar" />
        <p className="Profile__name">{username}</p>
        <p className="Profile__tag">@{tag}</p>
        <p className="Profile__location">{location}</p>
      </div>

      <ul className="Profile__stats">
        <li>
          <span className="Profile__stats--label">Followers</span>
          <span className="Profile__stats--quantity">{followers}</span>
        </li>
        <li>
          <span className="Profile__stats--label">Views</span>
          <span className="Profile__stats--quantity">{views}</span>
        </li>
        <li>
          <span className="Profile__stats--label">Likes</span>
          <span className="Profile__stats--quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape(
    PropTypes.number.isRequired,
    PropTypes.number.isRequired,
    PropTypes.number.isRequired
  ),
};
