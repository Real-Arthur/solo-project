import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Container, Box, Typography, Card } from '@material-ui/core';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import SearchPage from '../SearchPage/SearchPage';
import AdditionalUserInfo from '../AdditionalUserInfo/AdditionalUserInfo';
import CastListResults from './CastListResults';
import Nav from '../Nav/Nav';
import SideBarLibrary from '../SideBarLibrary/SideBarLibrary';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class FullCast extends Component {
  state = {
    currentMovie: ""
  };

  findFilmography = (personId, personName) => {
    console.log('Person id', personId, personName);
    this.props.dispatch({
      type: 'FETCH_FILMOGRAPHY',
      payload: {
        id: personId,
        name: personName
      }
    })
    this.props.history.push('/films');
  }

  render() {
    console.log('Looking up cast of', this.props.store.castReducer);
    console.log('Looking up cast of', this.props);
    
    if(Object.entries(this.props.store.user).length === 0) {
      return (
      <Container>
        <Box><Nav /></Box>
        <Box display="flex" flexDirection="row" flexWrap="nowrap">       
        <Box order={1} width="15%">           
          <LoginPage/>
          <RegisterPage />
        </Box>         
          <Box order={2} width="80%">
            <CastListResults 
            findFilmography={this.findFilmography}
            />
          </Box>          
          <Box order={3} width="10%">
          <Typography>Library</Typography>
          <SideBarLibrary />
          </Box>
          </Box>
      </Container>
  );}
  else {
      return (
          <Container>
              <Box><Nav /></Box>
              <Box display="flex" flexDirection="row" flexWrap="nowrap">       
              <Box order={1} width="15%">           
              <AdditionalUserInfo />
              </Box>         
              <Box order={2} width="80%">
                  <CastListResults 
                  findFilmography={this.findFilmography}
                  />
              </Box>          
              <Box order={3} width="10%">
              <Typography>Library</Typography>
              <SideBarLibrary />
              </Box>
              </Box>
          </Container>
              );
          }
}
}

export default connect(mapStoreToProps)(withRouter((FullCast)));
