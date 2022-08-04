export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ key, avatar, name, isOnline }) => (
        <li key={key} className="friend-list__item">
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
