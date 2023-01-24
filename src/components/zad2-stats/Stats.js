import './Stats.scss';
import PropTypes from 'prop-types';

export const Stats = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {stats.map(stat => (
        <li className="item" key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};
