import styled from 'styled-components';

const ProfileCard = styled.div`
  margin: 30px auto;
  text-align: center;
  max-width: 260px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: white;
  border-radius: 10px;
`;
const Description = styled.div`
  padding: 30px 20px 20px;
`;
const Avatar = styled.img`
  width: 100px;
  border-radius: 50px;
  border: 1px solid gainsboro;
  background-color: bisque;
`;
const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
const DescriptionElement = styled.p`
  color: lightslategray;
  margin: 10px;
  font-size: 14px;
  }
`;
const Stats = styled.ul`
  display: flex;
  background: whitesmoke;
  justify-content: space-between;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  & li {
    flex-basis: 100%;
    padding: 10px 0 15px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
const Label = styled.span`
  color: ${props => (props.bold ? '' : 'lightslategray')};
  margin: 5px;
  display: flex;
  font-weight: ${props => (props.bold ? 600 : 400)};
  font-size: ${props => (props.bold ? '16px' : '14px')};
  justify-content: center;
`;
export {
  ProfileCard,
  Description,
  Avatar,
  Name,
  DescriptionElement,
  Stats,
  Label,
};
