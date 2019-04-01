export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export const updateSearch = dispatch => {
  return search => {
    return dispatch({
      type: UPDATE_SEARCH,
      payload: search
    });
  };
};