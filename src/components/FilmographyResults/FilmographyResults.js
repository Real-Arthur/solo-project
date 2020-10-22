import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Container, Box, Typography, Grid, Paper } from '@material-ui/core';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AdditionalUserInfo from '../AdditionalUserInfo/AdditionalUserInfo';
import Nav from '../Nav/Nav';
import SideBarLibrary from '../SideBarLibrary/SideBarLibrary';
import LogOutButton from '../LogOutButton/LogOutButton';
import FilmsList from './FilmsList'
import CollectionTopBar from '../AdditionalUserInfo/CollectionTopBar';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class FilmographyResults extends Component {
  state = {
    currentMovie: ""
  };
  // Calls both functions to add to library and personal collection
  // At the same time
  addToLibraryAndCollection = (idNumber, movie) => {
    // console.log('id number and movie', idNumber.id, movie); 
    this.addToLibrary(movie);
    this.addToCollection(movie, idNumber.id)
  }
  // Adds to library database
  addToLibrary = (movie) => {
    // console.log('things to send', movie);
    this.props.dispatch({
      type: 'ADD_TO_LIBRARY',
      payload: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
      }
    })
  }
  // Adds to personal collection database
  addToCollection = (movieId, idNumber) => {
    // console.log('value of movie', movieId.id);
    // console.log('value of id', idNumber);
    // console.log('value of username', idNumber.username);
    this.props.dispatch({
      type: 'ADD_TO_COLLECTION',
      payload: {
        id: idNumber,
        movie: movieId.id
      }
    })
  }
  // Finds cast of selected movie
  findCast = (movie) => {
    // console.log('Find cast of ', movie.id);
    // console.log('Find cast of ', movie.title);
    this.props.dispatch({
      type: 'FETCH_CAST',
      payload: movie.id
    })
    this.props.dispatch({
      type: 'SET_CURRENT',
      payload: movie.title
    })
    this.props.history.push('/fullCast')
  }

  render() {
    // console.log('Looking up cast of', this.props.store.castReducer);
    // console.log('Looking up cast of', this.props);
    
    // User is not logged in 
    if(Object.entries(this.props.store.user).length === 0) {
      return (
        <Container>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item >
              <Grid item>
                <Nav />
              </Grid>
              <Grid item>  
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h1">CAST WATCH</Typography>
              </Grid>
              </Grid>
          <Box display="flex" flexDirection="row" flexWrap="nowrap">       
            <Box order={1} flexShrink={2}>           
            
            </Box>
            <Box order={2} width="100%">         
              <FilmsList 
                findCast={this.findCast}
                loggedIn={false}
              />
            </Box>   
            <Box order={3} flexShrink={2}>
              <Typography>
                Log In For Collection
              </Typography>
              <LoginPage />
              <RegisterPage />
              <SideBarLibrary />
            </Box>
            </Box>
        </Container>
      );
  }
  // User is logged in
  else {
    return (
      <Container>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item>
            <Nav />
          </Grid>
          <Grid item>
            <Typography variant="h1">
              CAST WATCH
            </Typography>
          </Grid>
          <Grid item>
            <LogOutButton />
          </Grid>
        </Grid>
        <Box display="flex" flexDirection="row" flexWrap="nowrap">       
          <Box order={1} flexShrink={2}>           
            <AdditionalUserInfo />
          </Box>    
          <Box order={2} width="100%">
            <Grid container justify="center">
              <Grid item>
                <Paper elevation={3} variant="outlined">
                  <Typography variant="h5">
                      {this.props.store.currentReducer}'s {this.props.store.filmography.length} Films
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <FilmsList 
              findCast={this.findCast}
              loggedIn={true}
            />
          </Box>    
          <Box order={3} flexShrink={3}>
            <CollectionTopBar />
            <SideBarLibrary />
          </Box>
        </Box>
      </Container>
    );
    }
  }
}

export default connect(mapStoreToProps)(withRouter((FilmographyResults)));
