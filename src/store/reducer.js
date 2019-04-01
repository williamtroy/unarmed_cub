import { fromJS } from 'immutable';
import * as actionTypes from './actions';

const initialState = fromJS({
  search: '',
  searchResults: {}
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH:
      return state.set('search', action.payload);
    case actionTypes.UPDATE_SEARCH_RESULTS:
      return state.set('searchResults', action.payload);
    default:
      return state;
  }
};