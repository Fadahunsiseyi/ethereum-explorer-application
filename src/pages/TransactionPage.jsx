import React from 'react';
import { useLocation } from 'react-router-dom';

const TransactionPage = () => {
  const {state} = useLocation();
  console.log(state, 'of the application');
  return (
    <div>
     <h1> Transaction Page</h1>
    </div>
  )
}

export default TransactionPage
