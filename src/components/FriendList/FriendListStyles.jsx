import styled from 'styled-components';

const Status = styled.span`
  background: mediumseagreen;
  width: 20px;
  height: 20px;
  border: azure;
  display: inline-block;
  border-radius: 50%;
  &.inactive {
    background: indianred;
  }
`;
const FriendListStyle = styled.ul`
  margin: 30px auto;
  width: 260px;
`;

const FriendListAvatar = styled.img`
  border-radius: 7px;
  border: 1px solid #fdc9c8;
  background-color: bisque;
`;

const FriendListItemStyle = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

export { FriendListAvatar, FriendListItemStyle, FriendListStyle, Status };
