import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  const list = stats.map(elem => (
    <li className="item" key={elem.id}>
      <span className="label">{elem.label}</span>
      <span className="percentage">{elem.percentage}</span>
    </li>
  ));
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">{list}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    )
  ),
};
