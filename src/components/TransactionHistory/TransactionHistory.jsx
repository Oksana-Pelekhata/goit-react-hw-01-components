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
            <tr key={transaction.id}>
                <TransactionHistoryRow type={transaction.type} amount={transaction.amount} currency={transaction.currency} />

            </tr>
        ))
   
            }
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.array,
}