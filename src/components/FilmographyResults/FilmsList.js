import { Typography, Grid, Button, Box } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import InfoIcon from '@material-ui/icons/Info';
import ResultsVsLibrary from '../ResultsVsLibrary/ResultsVsLibrary';


class FilmsList extends Component {
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
    // Deletes movie from user's personal collection
    deleteFromCollection = (user, movie) => {
        // console.log('This is user and movie', user.id, movie.id);
      this.props.dispatch({
        type: 'DELETE_FROM_COLLECTION',
        payload: {
          id: user.id,
          movie: movie.id
        }
      })
    }

  render(){
    // User is logged in
    if(this.props.loggedIn) {
      return (
        <Box minHeight="645px" maxHeight="645px" overflow="scroll">
          <Grid container direction="column" spacing={0}>
            {this.props.store.filmography.map((film, i) =>
            <Grid item xs={12} key={i}>
              <Grid container direction="row" justify="space-between" alignItems="center">
                <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.original_title}/>
                <Typography>{film.character}</Typography>
                <Typography>in</Typography>
                <Typography>{film.original_title}</Typography>
                <Grid item>
                  <Button onClick={() => this.props.findCast(film)}><InfoIcon /></Button>
            
                  <ResultsVsLibrary
                    addToLibraryAndCollection={this.addToLibraryAndCollection}
                    deleteFromCollection={this.deleteFromCollection}
                    movie={film}
                  />
                </Grid>
              </Grid>
            </Grid>
            )}
          </Grid>
        </Box>
      );
    } else {
      // User is not logged in
        return (
          <Box minHeight="645px" maxHeight="645px" overflow="scroll">
            <Grid container>
            </Grid>
            <Grid container direction="column" spacing={0}>
              {this.props.store.filmography.map(film =>
              <Grid item xs={12}>
                <Grid container direction="row" justify="space-between" alignItems="center">
                  <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.original_title}/>
                  <Typography>{film.character}</Typography>
                  <Typography>in</Typography>
                  <Typography>{film.original_title}</Typography>
                  <Grid item>
                    <Button onClick={() => this.props.findCast(film)}><InfoIcon /></Button>
                  </Grid>
                </Grid>
              </Grid>
                )}
              </Grid>
          </Box>
        );  
    }
  }
}

export default connect(mapStoreToProps)(withRouter((FilmsList)));
