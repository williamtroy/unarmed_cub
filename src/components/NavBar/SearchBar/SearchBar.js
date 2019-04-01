import React from 'react';

export default (props) => {
  const changeHandler = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <input type="text"
      className="form-control"
      placeholder="Search"
      value={props.value}
      onChange={changeHandler} />
  );
};