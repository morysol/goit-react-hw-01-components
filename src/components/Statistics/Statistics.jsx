// import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  // const itemStyle = ;
  // style={{ color: 'red' }}
  const list = stats.map(elem => (
    <li
      className={s.item}
      key={elem.id}
      style={{
        backgroundColor: getRandomHexColor(),
        flexBasis: 480 / stats.length,
      }}
    >
      <span className="label">{elem.label}</span>
      <span className="percentage">{elem.percentage}</span>
    </li>
  ));
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>{list}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape(
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    )
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
