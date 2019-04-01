import { userThumb, searchResultAvatar } from './UserThumb.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';

export default (props) => {

  return (
    <div className={userThumb + " d-flex flex-auto py-4"}>
      <img className={searchResultAvatar + ' rounded'} src={props.user.avatarUrl}></img>
      <div className="ml-2 min-width-0">
        <Link to={"/user/" + props.user.login} className="h5">{props.user.login}</Link>
        <span className="ml-md-2 d-md-inline">{props.user.name}</span>
        <div>{props.user.bio}</div>
        {props.user.location ?
          <div className="text-muted small f5"><i className="fas fa-map-marker-alt" /> {props.user.location}</div> :
          null}
      </div>
    </div>
  );
};