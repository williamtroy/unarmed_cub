
import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import { connect } from 'react-redux';
import { updateSearch } from '../../store/actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const mapState = state => {
  return {
    search: state.search
  };
};

const mapDispatch = dispatch => {
  return {
    updateSearch: updateSearch(dispatch)
  };
};

class NavBar extends Component {

  state = {
    search: ''
  };

  changeHandler = value => {
    this.setState({
      search: value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.updateSearch(this.state.search);
    this.goHome();
  }

  goHome = () => {
    if (window.location.pathname !== '/') {
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Users</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <div className="mr-auto"></div>
            <form className="form-inline my-2 my-lg-0" onSubmit={this.submitHandler}>
              <SearchBar value={this.props.search} onChange={this.changeHandler} />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(mapState, mapDispatch)(withRouter(NavBar));