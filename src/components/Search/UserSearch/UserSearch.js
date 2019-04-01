import React from 'react';
import UserThumb from './UserThumb/UserThumb';
import { ClipLoader } from 'react-spinners';

export default (props) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between">
        <h4 className="d-inline-block">{props.totalResults} users</h4>
      </div>
      <div>
        {props.users.map((i) => {
          return (i.id ? <UserThumb key={i.id} user={i} /> : null);
        })}
      </div>
    </React.Fragment>
  );
};



