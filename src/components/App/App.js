import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

import HomePage from '../HomePage/HomePage';
import LibraryPage from '../LibraryPage/LibraryPage';
import FullCast from '../FullCast/FullCast';
import FilmographyResults from '../FilmographyResults/FilmographyResults';

import './App.css';
import theme from '../Theme/Theme';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
     <ThemeProvider theme={theme}>
      <Router>
        <Redirect from="/" to="/home" />
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/library" exact component={LibraryPage} />
          <Route path="/fullCast" exact component={FullCast} />
          <Route path="/films" exact component={FilmographyResults} />
        </Switch>
      </Router></ThemeProvider>
    );
  }
}

export default connect()(App);
