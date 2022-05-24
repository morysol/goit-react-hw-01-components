// import React from 'react';

import PropTypes from 'prop-types';
import './TransactionHistory.css';

export const TransactionHistory = ({ items }) => {
  const list = items.map(elem => (
    <tr className="TransactionHistory__item" key={elem.id}>
      <td>{elem.type}</td>
      <td>{elem.amount}</td>
      <td>{elem.currency}</td>
    </tr>
  ));
  return (
    <table className="TransactionHistory">
      <thead className="TransactionHistory__header">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape(
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
      PropTypes.string.isRequired
    )
  ),
};
