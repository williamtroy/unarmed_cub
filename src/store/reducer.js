import { fromJS } from 'immutable';
import * as actionTypes from './actions';

const initialState = fromJS({
  search: ''
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH:
      return state.set('search', action.payload);
    default:
      return state;
  }
};