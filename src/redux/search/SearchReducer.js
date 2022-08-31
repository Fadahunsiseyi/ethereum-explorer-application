const SEARCH_TRANSACTION = 'SEARCH_TRANSACTION';
const CLEAR_SEARCH_TRANSACTION = 'CLEAR_SEARCH_TRANSACTION';

export const searchTransaction = (payload) => ({
  type: SEARCH_TRANSACTION,
  payload,
});

export const clearTransaction = () => ({
  type: CLEAR_SEARCH_TRANSACTION,
});

export default function SearchReducer(state = '', action = {}) {
  switch (action.type) {
    case SEARCH_TRANSACTION:
      return action.payload;
    case CLEAR_SEARCH_TRANSACTION:
      return '';
    default:
      return state;
  }
}
