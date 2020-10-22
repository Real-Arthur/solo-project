import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Typography, Card, CardContent, Box, ListItem } from '@material-ui/core';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function LibraryCast(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
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
    <Box width="100%" maxHeight="700px" overflow="scroll">
        {props.store.castReducer.map(cast =>
          <ListItem>{cast.name} as {cast.character}
          <img className="miniPic" src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt={cast.name}/>
          </ListItem>
            )}
    </Box>
  );
  }
}

export default connect(mapStoreToProps)((LibraryCast));
