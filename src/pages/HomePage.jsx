import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import Order from '../components/Order';

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
      <Hero title={total.title} subtitle={total.subtitle} />
      <Order />
    </div>
  );
};

export default HomePage;
