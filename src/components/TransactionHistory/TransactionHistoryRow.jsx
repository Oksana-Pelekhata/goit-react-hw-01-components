import PropTypes from "prop-types";
import './TransactionHistory.css'

export const TransactionHistoryRow = ({ type, amount, currency }) => {
    return (
<>
      <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
    </>
    )
}

TransactionHistoryRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}