import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ friends }) => {
  return friends.map(elem => (
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
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape(
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.bool.isRequired,
      PropTypes.number.isRequired
    )
  ),
};
