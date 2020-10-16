import { CardActionArea, CardHeader, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Card, Grid, Typography, CardContent, Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InfoIcon from '@material-ui/icons/Info';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function CastListResults(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
console.log('props', props);

  
  return (
    <Card>
        <Grid container justify="space-between" >
            <Grid flexGrow={1} item spacing="ml">
            <Typography>{props.title}</Typography>
            </Grid>
            <Grid item spacing="mr">
            <Button><ArrowBackIcon /></Button>
            </Grid>
            </Grid>
            
        <Grid container direction="column" spacing={0}>
            {props.castList.map(cast =>
                <Grid item xs={12} key={cast.cast_id}>
                   <Grid container direction="row" justify="space-between" alignItems="center">
                    <img src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} />
                    <Typography>{cast.name} as {cast.character}</Typography>
                    <Button onClick={() => props.findFilmography(cast.id, cast.name)}><InfoIcon /></Button> 
                    </Grid>
                    </Grid>
                    
                )}
        </Grid>
    </Card>
  );
}

export default CastListResults;