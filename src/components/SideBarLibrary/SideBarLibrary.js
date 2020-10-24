import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Box } from "@material-ui/core";
import SideBarLibraryDetails from './SideBarLibraryDetails';

class SideBarLibrary extends Component {
  state = {
    review: ''
  }
  changeReview = (review, movieId) => {
    console.log('Review and movie id', review, movieId);
    this.props.dispatch({
      type: 'CREATE_REVIEW',
      payload: {
        id: this.props.store.user.id,
        movie_id: movieId,
        review_string: review
      }
    })
  }

  render() {
  return (
    <Box minHeight="620px" maxHeight="620px" overflow="scroll">
    <Grid direction="column" spacing={0}>
        {this.props.store.collectionReducer.map((movie, i) =>
        <SideBarLibraryDetails
        key={i} 
        movieTitle={movie.title}
        movieId={movie.id}
        movieOverview={movie.overview}
        movieReleaseDate={movie.release_date}
        moviePosterPath={movie.poster_path}
        movieReview={movie.review}
        changeReview={this.changeReview}
        />
        )}
      </Grid>
      </Box>
  );

  }
}

export default connect(mapStoreToProps)(withRouter((SideBarLibrary)));