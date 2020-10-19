import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Box, Typography, Grid, Button } from "@material-ui/core";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function CollectionVsFilmography(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const [heading, setHeading] = useState('Functional Component');
  
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
