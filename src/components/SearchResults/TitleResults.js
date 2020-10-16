import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button, Container, Typography, Box } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class TitleResults extends Component {

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



  render() {
    console.log('movies list', this.props.store.titleReducer);
    console.log('movies list', this.props.store.user.id);
    if(Object.entries(this.props.store.user).length === 0) {
      return (
        <Grid container direction="column" spacing={0}>
          {this.props.store.titleReducer.map(movie =>
          <Grid item xs={12} key={movie.id}>
            <Grid container direction="row" justify="space-between" alignItems="center">
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
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
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
            <Typography>{movie.title}</Typography>
            <Box>
            <Button onClick={() => this.props.findCast(movie)}><InfoIcon /></Button>
            <Button onClick={() => this.addToLibraryAndCollection(movie, this.props.store.user)}><AddCircleIcon/></Button>
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
