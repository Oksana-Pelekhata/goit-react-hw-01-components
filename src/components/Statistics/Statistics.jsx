import { StatisticsList } from './StatisticsList'
import PropTypes from 'prop-types';
import './Statistics.css'

export const Statistics = ({ title, stats }) => {
    return (
         <section className="statistics">
         {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            {stats.map((stat) => (
              <StatisticsList key={stat.id} label = {stat.label} percentage = {stat.percentage} />
            ))}
            </ul>
            </section>
    )
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}
