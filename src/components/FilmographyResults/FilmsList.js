import { Typography, Box, Grid, Button, Card } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ResultsVsLibrary from '../ResultsVsLibrary/ResultsVsLibrary';


class FilmsList extends Component {

    addToLibraryAndCollection = (idNumber, movie) => {
        console.log('id number and movie', idNumber.id, movie);
        
        this.addToLibrary(movie);
        this.addToCollection(movie, idNumber.id)
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

  render(){
      if(this.props.loggedIn) {
  return (
    <Card>
        <Grid container direction="column" spacing={0}>
        {this.props.store.filmography.map(film =>
            <Grid item xs={12}>
                <Grid container direction="row" justify="space-between" alignItems="center">
                <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} />
            <Typography>{film.character}</Typography>
            <Typography>in</Typography>
            <Typography>{film.original_title}</Typography>
            <Grid item>
            <Button onClick={() => this.props.findCast(film)}><InfoIcon /></Button>
            
            <ResultsVsLibrary
            addToLibraryAndCollection={this.addToLibraryAndCollection}
            // addToLibraryAndCollection={this.props.addToLibraryAndCollection}
            deleteFromCollection={this.deleteFromCollection}
            movie={film}
            />
            </Grid>
            </Grid>
            </Grid>
            )}
            </Grid>
    </Card>
  );} else {
            return (
                <Card>
                <Grid container>

                </Grid>
                    <Grid container direction="column" spacing={0}>
                    {this.props.store.filmography.map(film =>
                        <Grid item xs={12}>
                            <Grid container direction="row" justify="space-between" alignItems="center">
                            <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} />
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
                        </Card>
              );  
        }
    }
}

export default connect(mapStoreToProps)(withRouter((FilmsList)));
