import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Typography, Card, Box, ListItem } from '@material-ui/core';

// When a movie is clicked. Renders a list of the cast
function LibraryCast(props) {
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
            {props.store.castReducer.map((cast, i) =>
            <ListItem key={i}>{cast.name} as {cast.character}
                <img className="miniPic" src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt={cast.name}/>
            </ListItem>
            )}
        </Box>
    );
  }
}

export default connect(mapStoreToProps)((LibraryCast));
