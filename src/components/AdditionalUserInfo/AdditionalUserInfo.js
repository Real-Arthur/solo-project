import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Box } from '@material-ui/core';
import CollectionVsFilmography from './CollectionVsFilmography';
import AdditionalInfoTopBar from './AdditionalInfoTopBar';

// Returns the user's personal collection
class AdditionalUserInfo extends Component {
  render() {
    return (
      <Box minHeight="680px" maxHeight="680px" overflow="scroll">
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
            />
          </Grid>
        )}
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(AdditionalUserInfo);