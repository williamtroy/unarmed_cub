
import React from 'react';
import RepoThumb from './RepoThumb/RepoThumb'

export default (props) => {
  const repos = props.user.repositories.nodes.map(item => {
    return <RepoThumb key={item.id} repo={item} />
  });
  return (
    <React.Fragment>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
            Repositories
          </a>
        </div>
      </nav>
      {repos}
    </React.Fragment>
  );
};



