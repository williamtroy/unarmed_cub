import { debug } from "util";

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';
export const FORM_SUBMITTED = 'FORM_SUBMITTED';

export const updateSearch = dispatch => {
  return search => {
    return dispatch({
      type: UPDATE_SEARCH,
      payload: search
    });
  };
};

export const updateSearchResults = dispatch => {
  return searchData => {
    return dispatch({
      type: UPDATE_SEARCH_RESULTS,
      payload: searchData
    });
  };
};