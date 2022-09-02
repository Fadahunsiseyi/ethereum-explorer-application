import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowCircleRightIcon } from '../assets/icons/Icons';
import Hero from '../components/Hero';

const TransactionPage = () => {
  const { state } = useLocation();
  const [total, setTotal] = useState({ title: '', subtitle: '' });
  useEffect(() => {
    setTotal({ title: `Block ${state.blockNumber}`, subtitle: `${state.gas}` });
  }, [state]);
  const list = [
    {
      id: 0,
      title: 'Block Number',
      value: 'blockNumber',
    },
    {
      id: 1,
      title: 'Confirmations',
      value: 'confirmations',
    },
    {
      id: 2,
      title: 'Gas Used',
      value: 'gasUsed',
    },
    {
      id: 3,
      title: 'Gas',
      value: 'gas',
    },
    {
      id: 4,
      title: 'Timestamp',
      value: 'timeStamp',
    },
    {
      id: 5,
      title: 'Target Address',
      value: 'to',
    },
  ];
  return (
    <div>
      <Hero title={total.title} subtitle={total.subtitle} />
      {
        state.length !== 0 && (
          <ul className="transaction-page-lists">
            {list.map((item) => (
              <li key={item.id}>
                <p className="">
                  {item.title}
                </p>
                <div className="">
                  {state[item.value]}
                  <div className="icon-wrapper">
                    <ArrowCircleRightIcon />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};

export default TransactionPage;
