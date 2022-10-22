import PropTypes from 'prop-types';
import { TableTd, TableTr } from './Transactions.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableTr>
      <TableTd>{type}</TableTd>
      <TableTd>{amount}</TableTd>
      <TableTd>{currency}</TableTd>
    </TableTr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
