import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid } from "@material-ui/core";
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