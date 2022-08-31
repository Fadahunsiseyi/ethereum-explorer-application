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

const initial = {
  transactions: [],
  loading: true,
  error: false,
};

export default function TransactionReducer(state = initial, action) {
  switch (action.type) {
    case TRANSACTION_FETCHING:
      return { ...state, loading: true, error: null };
    case TRANSACTION_FAIL:
      return { ...state, loading: false, error: true };
    case TRANSACTION_SUCCESS:
      return { transactions: action.payload, loading: false, error: null };
    default:
      return state;
  }
}

export const displayTransaction = () => async (dispatch) => {
  dispatch(fetchingTransactions());
  try {
    const data = await GetApi();
    dispatch({ type: TRANSACTION_SUCCESS, payload: data });
    return data;
  } catch (error) {
    return dispatch(failedTransactions(error));
  }
};
