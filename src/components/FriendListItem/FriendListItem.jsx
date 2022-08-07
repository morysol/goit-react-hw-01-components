import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.statusgreen : s.statusred}>&#9679;</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  // id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
