import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router';

import { Container, Box, Typography, Grid, Button, Card } from '@material-ui/core';
import Nav from '../Nav/Nav';
import LoginPage from '../LoginPage/LoginPage';
import LogOutButton from '../LogOutButton/LogOutButton';

import RegisterPage from '../RegisterPage/RegisterPage';
import FilmDetails from './FilmDetails';
import SearchAndLibrary from './SearchAndLibrary';
import SideBarSearch from './SideBarSearch';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class LibraryPage extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    if(Object.entries(this.props.store.user).length === 0) {
      return (
      <Container>
        <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item><Nav /></Grid>
              <Grid item><Typography variant="h1">CAST WATCH</Typography></Grid>
        <Grid item><Typography>{       }</Typography></Grid>
              </Grid>
        <Box display="flex" flexDirection="row" flexWrap="nowrap">       
        <Box order={1} width="10%">           
          <LoginPage/>
          <RegisterPage />
        </Box>         
          <Box order={2} width="80%">
            {/* <SearchPage /> */}
            <Card><Typography>Log In For Library</Typography></Card>
          </Box>          
          <Box order={3} width="10%">
          <Typography>Library</Typography>
          <Grid><Typography>Log In for More Details</Typography></Grid>
          </Box>
          </Box>
      </Container>
  );}
  else {
      return (
          <Container>
              <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item><Nav /></Grid>
              <Grid item ><Button onClick={this.reset}>Reset Search</Button></Grid>
              <Grid item><Typography variant="h1">CAST WATCH</Typography></Grid>
              
              <Grid item><LogOutButton /></Grid>
              </Grid>
              <Box display="flex" flexDirection="row" flexWrap="nowrap">       
              <Box order={1} flexShrink={1}>           
              <SideBarSearch />
              </Box>         
              <Box order={2} width="100%">
                  <SearchAndLibrary />
              </Box>          
              <Box order={3} flexShrink={3}>
              <FilmDetails />
              </Box>
              </Box>
          </Container>
              );
          }
  }
}

export default connect(mapStoreToProps)(withRouter((LibraryPage)));