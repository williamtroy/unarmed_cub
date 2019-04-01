import React, { Component } from 'react';
import UserSearch from './UserSearch/UserSearch';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { connect } from 'react-redux';
import { BarLoader } from 'react-spinners';

const FEED_QUERY = gql`
query($search: String!) {
  search(query: $search, type: USER, first: 10){
    nodes {
      ... on User {
        avatarUrl(size: 48),
        login,
        name,
        id,
        bio,
        location
      }
    },
    userCount,
    pageInfo {
      hasPreviousPage,
      hasNextPage,
      endCursor,
      startCursor
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

class Search extends Component {
  render() {
    const query = this.props.search ?
      <Query query={FEED_QUERY} variables={{ search: this.props.search }}>
        {({ loading, error, data }) => {
          if (loading) return <BarLoader sizeUnit={"px"} width={200} height={16} color={'#343a40'} />
          if (error) return <div>Error</div>

          const usersToRender = data.search.nodes;
          const totalResults = data.search.userCount;

          return <UserSearch users={usersToRender} totalResults={totalResults} />;
        }}
      </Query> : null;
    return (
      <div className="row">
        <nav className="col-md-3 d-none d-md-block sidebar">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Users</strong>
            </li>
          </ul>
        </nav>
        <div className="col-md-9 ml-sm-auto">
          {query}
        </div>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(Search);