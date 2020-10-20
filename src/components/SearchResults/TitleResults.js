import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button, Typography, Box } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ResultsVsLibrary from '../ResultsVsLibrary/ResultsVsLibrary';

class TitleResults extends Component {
  state = {
    matches: {}
  }

  addToLibraryAndCollection = (idNumber, movie) => {
    console.log('id number and movie', idNumber.id, movie);
    this.addToLibrary(movie);
    this.addToCollection(movie, idNumber.id);
  }

  addToMatches = (value) => {
    console.log('doing stuff', value)
    this.setState({
      matches: value
    })
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
    console.log('value of id', idNumber);
    console.log('value of username', idNumber.username);
    this.props.dispatch({
      type: 'ADD_TO_COLLECTION',
      payload: {
        id: idNumber,
        movie: movieId.id
      }
    })
  }

  deleteFromCollection = (user, movie) => {
    console.log('This is user and movie', user.id, movie.id);
    this.props.dispatch({
      type: 'DELETE_FROM_COLLECTION',
      payload: {
        id: user.id,
        movie: movie.id
      }
    })
  }
  
  render() {
    console.log('state', this.state);
    
    console.log('movies list', this.props.store.titleReducer);
    console.log('movies list', this.props.store.user.id);
    if(Object.entries(this.props.store.user).length === 0) {
      return (
        <Grid container direction="column" spacing={0}>
          {this.props.store.titleReducer.map(movie =>
          <Grid item xs={12} key={movie.id}>
            <Grid container direction="row" justify="space-between" alignItems="center">
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
            <Typography>{movie.title}</Typography>
            <Button onClick={() => this.props.findCast(movie)}><InfoIcon /></Button>
            </Grid>
            </Grid>
            )}
        </Grid>
      );
    } 
    else {

      return (
        <Grid container direction="column" spacing={0}>
          {this.props.store.titleReducer.map(movie =>
          <Grid item xs={12} key={movie.id}>
            <Grid container direction="row" justify="space-between" alignItems="center">
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
            <Typography>{movie.title}</Typography>
            <Box>
            <Button onClick={() => this.props.findCast(movie)}><InfoIcon /></Button>
            <ResultsVsLibrary
            movie={movie}
            addToLibraryAndCollection={this.addToLibraryAndCollection}
            deleteFromCollection={this.deleteFromCollection}
            addToMatches={this.addToMatches}
            />
            </Box>
            </Grid>
            </Grid>
            )}
        </Grid>
      );
    }

  }
}

export default connect(mapStoreToProps)(TitleResults);
