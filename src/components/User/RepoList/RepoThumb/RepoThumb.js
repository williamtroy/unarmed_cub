
import React from 'react';
import TimeAgo from 'react-timeago'
import { repoThumb } from './RepoThumb.module.scss';

export default (props) => {
  const labels = props.repo.labels.nodes.map(i => <span className="badge badge-info mr-1" key={i.id}>{i.name}</span>);
  return (
    <div className={repoThumb + " py-4"}>
      <a className="h4" href="#">{props.repo.name}</a>
      <div className="text-muted small py-1">{props.repo.description}</div>
      <div>{labels}</div>
      <div className="text-muted small">
        {props.repo.primaryLanguage ?
          <span className="pr-3">
            <span style={{ color: props.repo.primaryLanguage.color }}>
              <i className="fas fa-circle" />
            </span> {props.repo.primaryLanguage.name}
          </span> : null}
        <span className="pr-3"><i className="fas fa-star" /> {props.repo.stargazers.totalCount}</span>
        <span className="pr-3"><i className="fas fa-code-branch" /> {props.repo.forkCount}</span>
        <span className="pr-3"><i className="fas fa-balance-scale" /> {props.repo.licenseInfo ? props.repo.licenseInfo.name : null}</span>
        <span className="pr-3">{props.repo.issues.totalCount} issues need help</span>
        <span className=""><TimeAgo date={props.repo.updatedAt} /></span>
      </div>
    </div >
  );
};