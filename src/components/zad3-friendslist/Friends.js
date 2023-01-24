import './Friends.scss';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem.js';

export const Friends = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        isOnline={friend.isOnline}
        name={friend.name}
        avatar={friend.avatar}
      />
    ))}
  </ul>
);

Friends.propTypes = {
  friends: PropTypes.array.isRequired,
};
