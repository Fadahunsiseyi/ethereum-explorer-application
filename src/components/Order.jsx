import React, { useState } from 'react';
import Select from 'react-select';

import { useDispatch } from 'react-redux';
import { displayTransaction } from '../redux/transaction/TransactionReducer';

const Order = () => {
  const [order, setOrder] = useState(' asc ');
  const dispatch = useDispatch();
  const options = [
    {
      id: 1,
      value: 'asc',
      label: 'Ascending',
    },
    {
      id: 2,
      value: 'desc',
      label: 'Descending',
    },
  ];

  const handleChange = (e) => {
    setOrder(e.value);
    if (e.value === 'asc') {
      dispatch(displayTransaction({ order: 'asc' }));
    } if (e.value === 'desc') {
      dispatch(displayTransaction({ order: 'desc' }));
    }
  };

  return (
    <div className="order-container">
      <h5>ORDER BY</h5>
      <Select
        name="Select"
        placeholder="Select Order"
        label="text"
        value={options.find((option) => option.value === order)}
        options={options}
        onChange={handleChange}
        className="select-input"
      />
    </div>
  );
};

export default Order;
