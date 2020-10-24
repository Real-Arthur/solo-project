import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router';
import Nav from '../Nav/Nav';
import LoginForm from '../LoginForm/LoginForm';
import LogOutButton from '../LogOutButton/LogOutButton';
import RegisterForm from '../RegisterForm/RegisterForm';
import FilmDetails from './FilmDetails';
import SearchAndLibrary from './SearchAndLibrary';
import AdditionalUserInfo from '../AdditionalUserInfo/AdditionalUserInfo';
import LibraryCast from './LibraryCast';
import { Container, Box, Typography, Grid, Card } from '@material-ui/core';

class LibraryPage extends Component {

  
  render() {
    // user is not logged in
    if(Object.entries(this.props.store.user).length === 0) {
      return (
        <Container>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item>
              <Nav />
            </Grid>
            <Grid item>
              <Typography variant="h1">CAST WATCH</Typography>
            </Grid>
            <Grid item>
              <Typography>{       }</Typography>
            </Grid>
          </Grid>
          <Box display="flex" flexDirection="row" flexWrap="nowrap">       
            <Box order={1} flexShrink={2}>
              <AdditionalUserInfo />           
            </Box>         
            <Box order={2} width="100%">
              <Card>
                <Typography>Log In For Library</Typography>
              </Card>
            </Box>          
            <Box order={3} flexShrink={3}>
            <Typography>Library</Typography>
            <Grid>
              <Typography>
                Log In for More Details
              </Typography>
              <LoginForm/>
              <RegisterForm />
            </Grid>
            </Box>
          </Box>
        </Container>
      );
      // user is logged in
    } else {
      return (
        <Container>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item>
              <Nav />
            </Grid>
            <Grid item>
              <Typography variant="h1">CAST WATCH</Typography>
            </Grid>
            <Grid item>
              <LogOutButton />
            </Grid>
          </Grid>
          <Box display="flex" flexDirection="row" flexWrap="nowrap">
            <Box order={1} flexShrink={3}>
              <LibraryCast />
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