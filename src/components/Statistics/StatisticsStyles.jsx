import styled from 'styled-components';

const RandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const Statistic = styled.section`
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  max-width: 260px;
  margin: 0 auto;
`;
const Title = styled.h2`
  background-color: white;
  text-transform: uppercase;
  padding: 20px;
  font-size: 16px;
  color: gray;
`;
const StatList = styled.ul`
  display: inline-flex;
  font-weight: ${props => (props.bold ? 600 : 400)};
  margin-bottom: 5px;
`;

const Item = styled.li`
  padding: 5px 7.3px 10px;
  text-align: center;
  background: ${props => (props.key ? '' : RandomColor)};
`;
export { Statistic, StatList, Title, Item };
