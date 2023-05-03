import PropTypes from "prop-types";
import { TransactionHistoryRow } from './TransactionHistoryRow'
import './TransactionHistory.css'

export const TransactionHistory = ({transactions }) => {
    return (
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    <tbody>{
        transactions.map((transaction) => (
          <TransactionHistoryRow key={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency} />
        ))
   
            }
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.array,
}