import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className="friend-list__item">
          <span className={isOnline ? 'status' : 'status inactive'}></span>
          <img
            className="friend-list__avatar"
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{name}</p>
        </li>
      ))}
    </>
  );
};

export const FriendList = ({ children }) => {
  return <ul className="friend-list">{children}</ul>;
};

// propTypes
FriendList.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
