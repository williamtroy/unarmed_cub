import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import User from './components/User/User';
import Search from './components/Search/Search';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/" exact component={Search} />
        <Route path="/user/:id" component={User} />
      </Layout>
    );
  }
}

export default App;
