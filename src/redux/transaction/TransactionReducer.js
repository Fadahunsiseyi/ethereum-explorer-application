import GetApi from '../../api/Api';

const TRANSACTION_FETCHING = 'TRANSACTION_FETCHING';
const TRANSACTION_SUCCESS = 'TRANSACTION_SUCCESS';
const TRANSACTION_FAIL = 'TRANSACTION_FAIL';

export const fetchingTransactions = () => ({
  type: TRANSACTION_FETCHING,
});

export const successfulTransactions = (result) => ({
  type: TRANSACTION_SUCCESS,
  payload: result,
});

export const failedTransactions = (result) => ({
  type: TRANSACTION_FAIL,
  payload: result,
});
