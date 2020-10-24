import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Typography, Card, CardContent, Box, ListItem } from '@material-ui/core';

// Returns how many movies the user has seen
// When a movie is clicked. Renders details about the movie
function FilmDetails(props) {
  if(props.store.detailsReducer.length === 0) {
    return (
      <Grid width="100%">
        <Card >    
          <Typography variant="h5">
            {`You have seen ${props.store.collectionReducer.length} movies!`}
          </Typography>
          <Typography>
            Click a Movie for Details
          </Typography>
        </Card>
      </Grid>
    )
  } else {
    return (
      <Box width="100%" minHeight="680px" maxHeight="680px" overflow="scroll">
        <Card>
          <CardContent>
            <Typography variant="h5">{props.store.detailsReducer.original_title}</Typography>
          </CardContent>
            <hr></hr>
          <CardContent>
            <img src={`https://image.tmdb.org/t/p/w300${props.store.detailsReducer.poster_path}`} alt={props.store.detailsReducer.original_title}/>            
            {props.store.detailsReducer.genres.map((genre, i) =>
              <ListItem key={i}>
                <Typography variant="caption">{genre.name}</Typography>
              </ListItem>
            )}
            <Typography variant="caption">{props.store.detailsReducer.overview}</Typography>
              <hr></hr>
            <Typography variant="caption">
              Produced By:
              {props.store.detailsReducer.production_companies.map((company, i) =>
              <ListItem key={i}>
                <Typography variant="caption">{company.name}</Typography>
              </ListItem>
              )}
            </Typography>  
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(withRouter((FilmDetails)));