import styled from 'styled-components';

const TransactionsHistory = styled.table`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 465px;
  margin: 0 auto 50px;
  text-align: center;
  color: slategray;
  font-size: 10px;
  border-collapse: collapse;

  & th,
  td {
    padding: 10px;

    &:not(:last-child) {
      border-right: 1px solid gainsboro;
    }
  }
`;
const Header = styled.thead`
  background: darkturquoise;
  color: whitesmoke;
  text-transform: uppercase;
`;
const Rows = styled.tr`
  text-transform: capitalize;

  &:nth-child(odd) {
    background-color: white;
  }
`;

export { Rows, Header, TransactionsHistory };
