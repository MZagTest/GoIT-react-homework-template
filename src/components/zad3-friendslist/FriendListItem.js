export const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className="item">
    <span className={isOnline ? 'online' : 'offline'}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);
