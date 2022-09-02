import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ArrowCircleRightIcon } from '../assets/icons/Icons';

const TransactionDetail = ({
  TransactionHash, TransactionValue, BlockNumber, DestinationAddress, Data,
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/transactions/${TransactionHash}`, { state: { ...Data } });
  };
  return (
    <li className="transaction-lists">
      <div
        role="button"
        onClick={handleNavigate}
        onKeyPress={handleNavigate}
        tabIndex={0}
        className="transaction-lists-wrapper"
      >
        <div className="arrow-right">
          <ArrowCircleRightIcon />
        </div>
        <div className="details-container">
          <h2>
            Block
            {' '}
            {BlockNumber}
          </h2>
          <p>
            ETH
            {' '}
            {parseInt(TransactionValue, 10).toLocaleString()}
            {' '}
            Value
          </p>
          <p>
            Destination Address:
            {' '}
            {DestinationAddress}
          </p>
        </div>
      </div>
    </li>
  );
};

TransactionDetail.propTypes = {
  TransactionHash: PropTypes.string.isRequired,
  TransactionValue: PropTypes.string.isRequired,
  BlockNumber: PropTypes.string.isRequired,
  DestinationAddress: PropTypes.string.isRequired,
  Data: PropTypes.shape().isRequired,
};

export default TransactionDetail;
