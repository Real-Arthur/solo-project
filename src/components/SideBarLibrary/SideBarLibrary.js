import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button } from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import SideBarLibraryDetails from './SideBarLibraryDetails';

function SideBarLibrary(props) {
  

  return (
    <Grid container direction="column" spacing={0}>
        {props.store.collectionReducer.map((movie, i) =>
        <SideBarLibraryDetails
        key={i} 
        movieTitle={movie.title}
        movieId={movie.id}
        movieOverview={movie.overview}
        movieReleaseDate={movie.release_date}
        moviePosterPath={movie.poster_path}
        />
        )}
      </Grid>
  );
}

export default connect(mapStoreToProps)(withRouter((SideBarLibrary)));