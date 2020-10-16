import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Container, Box, Typography, Card } from '@material-ui/core';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AdditionalUserInfo from '../AdditionalUserInfo/AdditionalUserInfo';
import Nav from '../Nav/Nav';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class FilmographyResults extends Component {
  state = {
    currentMovie: ""
  };


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
        <Box><UserPage /></Box>
        <Box display="flex" flexDirection="row" flexWrap="nowrap">       
        <Box order={1} width="15%">           
          <LoginPage />
          <RegisterPage />
        </Box>         
          <Box order={2} width="80%">
            {this.props.store.filmography.map( film =>
            <Box> 
            {/* <img src={`https://image.tmdb.org/t/p/w300${film.backdrop_path}`} /> */}
            <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} />
                <Typography>{film.character} in {film.original_title}</Typography>
          </Box>
            )}
          </Box>          
          <Box order={3} width="10%">
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
  );}
  else {
      return (
          <Container>
              <Box><Nav /></Box>
              <Box><UserPage /></Box>
              <Box display="flex" flexDirection="row" flexWrap="nowrap">       
              <Box order={1} width="15%">           
              <AdditionalUserInfo />
              </Box> 
              <Box order={2} width="80%">
            {this.props.store.filmography.map( film =>
              <Box>
                <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} />
                <Typography>{film.character} in {film.original_title}</Typography>
              </Box>
            )}
              </Box>    

              </Box>          
              <Box order={3} width="10%">
              <Typography>Library</Typography>
              {this.props.store.collectionReducer.map((movie, i) =>
                  <InfoPage
                      id={i}
                      movieId={movie.id}
                      title={movie.title}
                  />
                  )} 
             
              </Box>
          </Container>
              );
          }
}
}

export default connect(mapStoreToProps)(withRouter((FilmographyResults)));
