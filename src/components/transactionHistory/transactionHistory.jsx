// import React from 'react';

import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  const list = items.map(elem => (
    <tr className="item" key={elem.id}>
      <td>{elem.type}</td>
      <td>{elem.amount}</td>
      <td>{elem.currency}</td>
    </tr>
  ));
  return (
    <table className="transaction-history">
      <thead key="table head">
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
