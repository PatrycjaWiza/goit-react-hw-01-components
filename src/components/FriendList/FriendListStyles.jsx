import styled from 'styled-components';

const Status = styled.span`
  background: green;
  width: 20px;
  height: 20px;
  border: azure;
  display: inline-block;
  border-radius: 50%;
  &.inactive {
    background: red;
  }
`;
const FriendListStyle = styled.ul`
  margin: 30px auto;
  width: 260px;
`;

const FriendListAvatar = styled.img`
  margin-right: 10px;
  border-radius: 10px;
  background-color: bisque;
`;

const FriendListItemStyle = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export { FriendListAvatar, FriendListItemStyle, FriendListStyle, Status };
