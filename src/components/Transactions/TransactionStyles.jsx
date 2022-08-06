import styled from 'styled-components';

const TransactionsHistory = styled.table`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 465px;
  margin: 0 auto;
  text-align: center;
`;
const Header = styled.thead`
  background: turquoise;
  color: whitesmoke;
  padding: 10px;
  text-transform: uppercase;
`;
const Rows = styled.tr`
  text-transform: capitalize;
  background-color: darkgray;
`;

export { Rows, Header, TransactionsHistory };
