import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Typography, Grid, Button } from "@material-ui/core";

function CollectionVsFilmography(props) {
 
  const overlap = props.store.filmography.findIndex(film => film.id === props.movie.id)

  if(overlap !== -1) {
  return (
    <Grid item key={props.movie.id}>
      <Button>
      <Typography>{props.movie.title}</Typography>
      </Button>
    </Grid>
  );
  } else {
      return(
      <></>
      )
  }
}

export default connect(mapStoreToProps)(withRouter((CollectionVsFilmography)));
