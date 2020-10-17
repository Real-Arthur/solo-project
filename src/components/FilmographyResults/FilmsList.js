import { Typography, Box, Grid, Button, Card } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ResultsVsLibrary from '../ResultsVsLibrary/ResultsVsLibrary';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function FilmsList(props) {
    const [isEqual, equalScanner] = useState(props.store.currentSearch);
  
    if(props.loggedIn){
  return (
    <Card>
        <Grid container direction="column" spacing={0}>
        {props.store.filmography.map(film =>
            <Grid item xs={12}>
                <Grid container direction="row" justify="space-between" alignItems="center">
                <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} />
            <Typography>{film.character}</Typography>
            <Typography>in</Typography>
            <Typography>{film.original_title}</Typography>
            <Grid item>
            <Button onClick={() => props.findCast(film)}><InfoIcon /></Button>
            
            <ResultsVsLibrary
            addToLibraryAndCollection={props.addToLibraryAndCollection} 
            movie={film}
            recheck={this.recheck}
            />
            </Grid>
            </Grid>
            </Grid>
            )}
            </Grid>
    </Card>
  );} else {
            return (
                <Card>
                <Grid container>

                </Grid>
                    <Grid container direction="column" spacing={0}>
                    {props.store.filmography.map(film =>
                        <Grid item xs={12}>
                            <Grid container direction="row" justify="space-between" alignItems="center">
                            <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} />
                        <Typography>{film.character}</Typography>
                        <Typography>in</Typography>
                        <Typography>{film.original_title}</Typography>
                        <Grid item>
                        <Button onClick={() => props.findCast(film)}><InfoIcon /></Button>
                        </Grid>
                        </Grid>
                        </Grid>
                        )}
                        </Grid>
                        </Card>
              );  
        }

}

export default connect(mapStoreToProps)(withRouter((FilmsList)));
