import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
import {
  TransactionTable,
  TableHead,
  TableHeadTH,
} from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <TableHeadTH>Type</TableHeadTH>
          <TableHeadTH>Amount</TableHeadTH>
          <TableHeadTH>Currency</TableHeadTH>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
