import PropTypes from "prop-types";

export const StatisticsList = ({label, percentage }) => {
    return (
      <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
      </>
    )
}

StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}