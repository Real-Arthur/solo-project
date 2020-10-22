import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Box, Typography } from '@material-ui/core';
import CollectionVsFilmography from './CollectionVsFilmography';
import AdditionalInfoTopBar from './AdditionalInfoTopBar';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AdditionalUserInfo extends Component {

  render() {
    return (
      <Box minHeight="700px" maxHeight="700px" overflow="scroll">
        <AdditionalInfoTopBar />
        {this.props.store.collectionReducer.map((movie, i) =>
        <Grid container key={i}>
        <CollectionVsFilmography 
            key={i} 
            movieTitle={movie.title}
            movieId={movie.id}
            movieOverview={movie.overview}
            movieReleaseDate={movie.release_date}
            moviePosterPath={movie.poster_path}
        /></Grid>
        )}
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(AdditionalUserInfo);