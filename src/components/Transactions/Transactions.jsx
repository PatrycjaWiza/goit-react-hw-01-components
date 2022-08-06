import PropTypes from 'prop-types';
import { Header, Rows, TransactionsHistory } from './TransactionStyles';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsHistory>
      <Header>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Header>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Rows key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </Rows>
        ))}
      </tbody>
    </TransactionsHistory>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
