import PropTypes from 'prop-types';
import {
  FriendListAvatar,
  FriendListItemStyle,
  FriendListStyle,
  Status,
} from './FriendListStyles.jsx';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItemStyle key={id}>
          <Status className={isOnline ? '' : 'inactive'}></Status>

          <FriendListAvatar src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </FriendListItemStyle>
      ))}
    </>
  );
};

export const FriendList = ({ children }) => {
  return <FriendListStyle>{children}</FriendListStyle>;
};

// propTypes
FriendList.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
