import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import Order from '../components/Order';
import TransactionDetail from '../components/TransactionDetail';

const HomePage = () => {
  const { TransactionReducer: transactions } = useSelector((state) => state);
  const [total, setTotal] = useState({ title: '', subtitle: '' });
  const [organizeTransactions, setOrganizeTransactions] = useState([]);
  useEffect(() => {
    if (transactions.transactions.length > 0) {
      // eslint-disable-next-line max-len
      const sumTransactions = transactions.transactions.reduce((a, b) => a + parseInt(b.value, 10), 0).toLocaleString();
      setTotal({ title: 'Binance 14 Ethereum', subtitle: `ETHEREUM HAS A  TOTAL VALUE OF ${sumTransactions}` });
    }
  }, [transactions]);
  useEffect(() => {
    setOrganizeTransactions(transactions.transactions);
  }, [transactions]);
  return (
    <>
      <Hero title={total.title} subtitle={total.subtitle} />
      <Order />
      <ul className="transactions-container">
        {organizeTransactions.map((transaction, id) => (
          <TransactionDetail
            TransactionHash={transaction.hash}
            TransactionValue={transaction.value}
            BlockNumber={transaction.blockNumber}
            DestinationAddress={transaction.to}
            // eslint-disable-next-line react/no-array-index-key
            key={id}
            Data={transaction}
          />
        ))}
      </ul>
    </>
  );
};

export default HomePage;
