import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { Box, Container, Card, Typography } from '@material-ui/core'

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginPage from '../LoginPage/LoginPage';
import InfoPage from '../InfoPage/InfoPage';
import SearchPage from '../SearchPage/SearchPage';
import UserPage from '../UserPage/UserPage';

class LandingPage extends Component {
  state = {
    
  };

  loadCollection = (value) => {
    console.log('value', value);
    
  }
  
 
  render() {
    console.log('this props', this.props.store);
    console.log('this.s----', this.state);
    
    
    return (
      <Router>
      <Container>
        <Box>
          <UserPage />
        </Box>
        <Typography variant="h1"></Typography>
        

        <Box display="flex" flexDirection="row" flexWrap="nowrap">
          <Box order={2} width="65%">
            <SearchPage />
          </Box>
          {/* All login/register materials */}
          <Box order={1} width="15%">
              <LoginPage />
              <RegisterForm />
          </Box>
          <Box order={3}width="20%">
            <Typography>Library</Typography> 
              {this.props.store.collectionReducer.map((movie, i) =>
                <InfoPage
                  id={i}
                  movieId={movie.id}
                  title={movie.title}
                />
              )}
                   
        </Box>
        </Box>
        
      </Container>
      </Router>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
