import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button, Box, Card, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

class SearchAndLibrary extends Component {
    state = {
      searchQuery: '',
      movieTitles: this.props.store.collectionReducer
    }
    // Allows user to search their personal library
    searchLibrary = (event) => {
      // console.log('event value', event.target.value);
      // console.log('', this.state.movieTitles);
      let newSearch = event.target.value;
      let searchedTitles = this.props.store.collectionReducer.filter(movie =>
        movie.title.includes(newSearch)
      )
      this.setState({
        searchQuery: newSearch,
        movieTitles: searchedTitles
      })
    }
    // Finds movie details and cast list
    findDetailsAndCast = (movieToFindId) => {
      this.findFilmDetails(movieToFindId);
      this.findCast(movieToFindId);
    }
    // Finds extra details on selected movie
    findFilmDetails = (movieToFindId) => {
        console.log('Movie Details Id', movieToFindId);
        this.props.dispatch({
            type: "FETCH_MOVIE_DETAILS",
            payload: movieToFindId
        })
    }
    // Finds cast of selected movie
    findCast = (movieToFindId) => {
      this.props.dispatch({
        type: "FETCH_CAST",
        payload: movieToFindId
      })
    }

render(){
  // console.log('state', this.state);
  return (
    <Box maxHeight='700px' overflow="scroll">
      <Card>
        <TextField 
        fullWidth
        variant="filled"
        value={this.state.searchQuery}
        InputProps={{
          startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
          )}}
        onChange={(event) => this.searchLibrary(event)}
        />
      </Card>
      <Grid container direction="column" spacing={0} >
        {this.state.movieTitles.map((movie, i) =>
          <Button key={i} onClick={() => this.findDetailsAndCast(movie.id)}>
          <Grid item xs={12}>
            <Typography>{movie.title}</Typography>
          </Grid>
          </Button>
        )}
      </Grid>
    </Box>
  );
}
}

export default connect(mapStoreToProps)(withRouter((SearchAndLibrary)));