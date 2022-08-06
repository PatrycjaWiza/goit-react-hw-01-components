import styled from 'styled-components';

const RandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const Statistic = styled.section`
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  max-width: 260px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
`;
const Title = styled.h2`
  background-color: white;
  text-transform: uppercase;
  padding: 20px;
  font-size: 16px;
  color: gray;
  font-weight: 500;
`;
const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: darkorchid;
`;
const Item = styled.li`
  flex-basis: 100%;
  padding: 10px 0;
  background-color: ${props => (props.key ? '' : RandomColor)};
  font-size: 10px;
  mix-blend-mode: screen;

  & span {
    display: flex;
    margin-bottom: 5px;
    justify-content: center;
    color: white;
    mix-blend-mode: difference;

    &:nth-child(even) {
      font-size: 14px;
    }
  }
`;
export { Statistic, StatList, Title, Item };
