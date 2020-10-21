import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Typography, Card, CardContent, Box, ListItem } from '@material-ui/core';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function FilmDetails(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  if(props.store.detailsReducer.length === 0) {
      return (
          <Grid width="100%">
          <Card >    
                <Typography variant="h5">
              {`You have seen ${props.store.collectionReducer.length} movies!`}
              Click a Movie for Details
              </Typography>
              </Card>
              </Grid>
      )
  } else {
  return (
    <Box width="100%">
        <Card>
        <CardContent>
        <Typography variant="h5">{props.store.detailsReducer.original_title}</Typography>
        </CardContent>
        <hr></hr>
        <CardContent>
            <img src={`https://image.tmdb.org/t/p/w300${props.store.detailsReducer.poster_path}`} alt={props.store.detailsReducer.original_title}/>
                        
            {props.store.detailsReducer.genres.map(genre =>
                <ListItem><Typography variant="p">{genre.name}</Typography></ListItem>
            )}
            <Typography variant="p">{props.store.detailsReducer.overview}</Typography>
                <hr></hr>
                <Typography variant="p">
                    Produced By:
                    {props.store.detailsReducer.production_companies.map(company =>
                    <Typography>{company.name}</Typography>
                    )}
                </Typography>  
        </CardContent>
      </Card>
    </Box>
  );
  }
}

export default connect(mapStoreToProps)(withRouter((FilmDetails)));
