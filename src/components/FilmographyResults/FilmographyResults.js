import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Container, Box, Typography, Card } from '@material-ui/core';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AdditionalUserInfo from '../AdditionalUserInfo/AdditionalUserInfo';
import Nav from '../Nav/Nav';
import SideBarLibrary from '../SideBarLibrary/SideBarLibrary';
import LogOutButton from '../LogOutButton/LogOutButton';
import FilmsList from './FilmsList'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class FilmographyResults extends Component {
  state = {
    currentMovie: ""
  };

  addToLibraryAndCollection = (movie, idNumber) => {
    this.addToLibrary(movie);
    this.addToCollection(movie, idNumber)
  }

  addToLibrary = (movie) => {
    console.log('things to send', movie);
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

  addToCollection = (movieId, idNumber) => {
    console.log('value of movie', movieId.id);
    console.log('value of id', idNumber.id);
    console.log('value of username', idNumber.username);
    this.props.dispatch({
      type: 'ADD_TO_COLLECTION',
      payload: {
        id: idNumber.id,
        movie: movieId.id
      }
    })
  }

  findCast = (movie) => {
    console.log('Find cast of ', movie.id);
    console.log('Find cast of ', movie.title);
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
    console.log('Looking up cast of', this.props.store.castReducer);
    console.log('Looking up cast of', this.props);
    
    if(Object.entries(this.props.store.user).length === 0) {
      return (
      <Container>
        <Box><Nav /></Box>
        <Box display="flex" flexDirection="row" flexWrap="nowrap">       
        <Box order={1} width="15%">           
          <LoginPage />
          <RegisterPage />
        </Box>
          <Box order={2} width="75">         
          <FilmsList 
          addToLibraryAndCollection={this.addToLibraryAndCollection}
          findCast={this.findCast}
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
              <Box><Nav /><LogOutButton className="log-in"/></Box>
              <Box display="flex" flexDirection="row" flexWrap="nowrap">       
              <Box order={1} width="15%">           
              <AdditionalUserInfo />
              </Box>    
                <Box order={2} width="75">
              <FilmsList 
              
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

export default connect(mapStoreToProps)(withRouter((FilmographyResults)));
