import React, { Component } from 'react';
import RepoList from './RepoList/RepoList';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { connect } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { userAvatar } from './User.module.scss';


const USER_QUERY = gql`
query($user: String!) {
  user(login: $user) {
    name,
    login,
    avatarUrl(size: 230),
    repositories(first: 10) {
      nodes {
        ... on Repository {
          id,
          name,
          description,
          updatedAt,
          primaryLanguage {
            name,
            color
          },
          forkCount,
          stargazers(first: 0) {
            totalCount
          },
          repositoryTopics(first: 10) {
            nodes {
              ... on RepositoryTopic {
                id,
                topic {
                  id,
                  name
                }
              }
            }
          },
          issues(first: 0){
            totalCount
          },
          licenseInfo {
            name,
            nickname
          }
        }
      }
    }
  }
}
`;

const mapState = state => {
  return {
    search: state.get('search')
  };
};

const mapDispatch = dispatch => {
  return {};
};

class User extends Component {
  render() {
    const query = this.props.match.params.id ?
      <Query query={USER_QUERY} variables={{ user: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <BarLoader sizeUnit={"px"} width={200} height={16} color={'#343a40'} />
          if (error) return <div>Error</div>

          const user = data.user;

          return (
            <React.Fragment>
              <div className="row">
                <div className="col-md-3">
                  <img className={userAvatar + " rounded"} src={user.avatarUrl}></img>
                  <div className="h3">{user.name}</div>
                  <div className="text-muted">{user.login}</div>
                </div>
                <div className="col-md-9">
                  <RepoList user={user} />
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Query> : null;
    return query;
  }
}

export default connect(mapState, mapDispatch)(User);



