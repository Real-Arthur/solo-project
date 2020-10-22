import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import CastListResults from './CastListResults';
import Nav from '../Nav/Nav';
import SideBarLibrary from '../SideBarLibrary/SideBarLibrary';
import CollectionTopBar from '../AdditionalUserInfo/CollectionTopBar';
import BasicUserInfo from '../AdditionalUserInfo/BasicUserInfo';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import LogOutButton from '../LogOutButton/LogOutButton';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../Theme/Theme';


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
    this.props.dispatch({
      type: 'SET_CURRENT',
      payload: personName
    })
    this.props.history.push('/films');
  }

  render() {
    console.log('Looking up cast of', this.props.store.castReducer);
    console.log('Looking up cast of', this.props);
    // Not logged in   
    if(Object.entries(this.props.store.user).length === 0) {
      return (
        <ThemeProvider theme={theme}>
      <Container>
        <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item><Nav /></Grid>
        <Grid item><Typography variant="h1" color="primary">CAST WATCH</Typography></Grid>
          </Grid>
          <Box display="flex" flexDirection="row" flexWrap="nowrap">       
          <Box order={1} flexShrink={2}>
            <BasicUserInfo />
          </Box>    
        </Box>         
          <Box order={2} width="100%">
            <CastListResults 
            findFilmography={this.findFilmography}
            />
          </Box>          
          <Box order={3} flexShrink={2}>
            <LoginForm />
            <RegisterForm />
          </Box>
      </Container></ThemeProvider>
  );}
  // Logged in   
  else {
      return (
        <ThemeProvider theme={theme}>
          <Container>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item><Nav /></Grid>
              <Grid item><Typography variant="h1" color="primary">CAST WATCH</Typography></Grid>
                <Grid item><LogOutButton /></Grid>
                </Grid>
              <Box display="flex" flexDirection="row" flexWrap="nowrap">       
              <Box order={1} flexShrink={2}>           
              <BasicUserInfo />
              </Box>         
              <Box order={2} width="100%">
                  <CastListResults 
                  findFilmography={this.findFilmography}
                  />
              </Box>          
              <Box order={3} flexShrink={2}>
              <CollectionTopBar />
              <SideBarLibrary />
              </Box>
              </Box>
          </Container>
          </ThemeProvider>
              );
          }
}
}

export default connect(mapStoreToProps)(withRouter((FullCast)));
