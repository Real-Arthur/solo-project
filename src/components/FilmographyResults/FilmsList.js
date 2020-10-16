import { Typography, Box, Grid, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function FilmsList(props) {
    const [currentSearch, setCurrent] = useState(props.store.currentSearch);
  

  return (
    <Box >
        <Grid container direction="column" spacing={0}>
        {props.store.filmography.map(film =>
            <Grid item xs={12}>
                <Grid container direction="row" justify="space-between" alignItems="center">
                <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} />
            <Typography>{film.character}</Typography>
            <Typography>in</Typography>
            <Typography>{film.original_title}</Typography>
            <Box>
            <Button onClick={() => props.findCast(film)}><InfoIcon /></Button>
            <Button onClick={() => props.addToLibraryAndCollection(film, props.store.user.id)}><AddCircleIcon/></Button>
            </Box>
            </Grid>
            </Grid>
            )}
            </Grid>
    </Box>
  );
}

export default connect(mapStoreToProps)(withRouter((FilmsList)));
