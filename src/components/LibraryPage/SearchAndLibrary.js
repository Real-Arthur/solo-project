import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button, Box } from "@material-ui/core";

class SearchAndLibrary extends Component {
    state = {

    }
    findFilmDetails = (movieToFindId) => {
        console.log('Movie Details Id', movieToFindId);
        this.props.dispatch({
            type: "FETCH_MOVIE_DETAILS",
            payload: movieToFindId
        })
    }

render(){
  return (
      <Box maxHeight="900px" overflow="scroll">
    <Grid container direction="column" spacing={0} >
        {this.props.store.collectionReducer.map((movie, i) =>
        <Button key={i} onClick={() => this.findFilmDetails(movie.id)}>
        <Grid item xs={12}>
        <Typography>{movie.title}</Typography>
        </Grid>
      </Button>
        )}
      </Grid></Box>
  );
}
}

export default connect(mapStoreToProps)(withRouter((SearchAndLibrary)));