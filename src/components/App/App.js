import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import HomePage from '../HomePage/HomePage';
import LibraryPage from '../LibraryPage/LibraryPage';
import FullCast from '../FullCast/FullCast';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/library" exact component={LibraryPage} />
          <Route path="/fullCast" exact component={FullCast} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
