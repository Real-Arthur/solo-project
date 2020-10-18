import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Container, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { cps } from 'redux-saga/effects';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function FilmDetails(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  if(props.store.detailsReducer.length === 0) {
      return (
          <Grid width="100%">
          <Grid container >
              <Grid item>
                <Typography variant="h5">
              {`You have seen ${props.store.collectionReducer.length} movies!`}
              Click a Movie for Details
              </Typography>
              </Grid>
              </Grid>
              </Grid>
      )
  } else {
  return (
    <Grid width="100%">
        <Typography variant="h2">{props.store.detailsReducer.original_title}</Typography>
        <Grid container>
            <Grid item> 
            <img src={`https://image.tmdb.org/t/p/w300${props.store.detailsReducer.poster_path}`} />
            </Grid>
            <Grid item>
            
                {props.store.detailsReducer.genres.map(genre =>
                <Typography>{genre.name}</Typography>
            )}
            
            </Grid>
            <Typography>{props.store.detailsReducer.overview}</Typography>
            <Grid item>
                <Typography>
                    Produced By:
                    {props.store.detailsReducer.production_companies.map(company =>
                    <Typography>{company.name}</Typography>
                    )}
                </Typography>
            </Grid>
        </Grid>
      
    </Grid>
  );
  }
}

export default connect(mapStoreToProps)(withRouter((FilmDetails)));
