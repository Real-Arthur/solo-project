import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './SearchResults.css';
import { Grid, Button, Container, Typography, Box } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class TitleResults extends Component {
  state = {
    heading: 'Class Component',
  };

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

  render() {
    console.log('movies list', this.props.store.titleReducer);
    if(Object.entries(this.props.store.user).length === 0) {
      return (
        <Grid container direction="column" spacing={0}>
          {this.props.store.titleReducer.map(movie =>
          <Grid item xs={12} key={movie.id}>
            <Grid container direction="row" justify="space-between" alignItems="center">
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
            <Typography>{movie.title}</Typography>
            <Button onClick={() => this.addToLibrary(movie)}><InfoIcon /></Button>
            </Grid>
            </Grid>
            )}
        </Grid>
      );
    } else {
      return (
        <Grid container direction="column" spacing={0}>
          {this.props.store.titleReducer.map(movie =>
          <Grid item xs={12} key={movie.id}>
            <Grid container direction="row" justify="space-between" alignItems="center">
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
            <Typography>{movie.title}</Typography>
            <Box>
            <Button onClick={() => this.findFilmography(movie)}><InfoIcon /></Button>
            <Button onClick={() => this.addToLibrary(movie)}><AddCircleIcon/></Button>
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
