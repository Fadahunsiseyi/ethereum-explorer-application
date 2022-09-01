import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const selector = useSelector((state) => state);
  const { TransactionReducer: transactions, SearchReducer: search } = selector;
  const [total, setTotal] = useState({ title: '', subtitle: '' });
  useEffect(() => {
    if (transactions.transactions.length > 0) {
      // eslint-disable-next-line max-len
      const sumTransactions = transactions.transactions.reduce((a, b) => a + parseInt(b.value, 10), 0).toLocaleString();
      setTotal({ title: 'Binance 14 Ethereum', subtitle: `ETHEREUM HAS A  TOTAL VALUE OF ${sumTransactions}` });
    }
  }, [transactions]);
  return (
    <div>
      HomePage
    </div>
  );
};

export default HomePage;
