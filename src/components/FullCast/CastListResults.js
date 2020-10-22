import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import { Card, Grid, Typography, Button, Paper, Box } from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../Theme/Theme';

function CastListResults(props) {
console.log('props', props);

  return (
    <ThemeProvider theme={theme}>
    <Card style={{backgroundColor: '#EFF7F6'}}>
        <Grid container justify="space-between" >
            <Grid container spacing={0} justify="center">
            <Grid item>
            <Paper elevation={3} variant="outlined">
            <Typography variant="h5">{props.store.currentReducer} Cast List</Typography>
            </Paper>
            </Grid>
            </Grid>
            <Grid container spacing={0}>
            </Grid>
            </Grid>
        <Box minHeight="680px" maxHeight="680px" overflow="scroll">  
        <Grid container direction="column" spacing={0}>
            {props.store.castReducer.map(cast =>
                <Grid item xs={12} key={cast.cast_id}>
                   <Grid container direction="row" justify="space-between" alignItems="center">
                    <img src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt={cast.name}/>
                    <Typography>{cast.name} as {cast.character}</Typography>
                    <Button onClick={() => props.findFilmography(cast.id, cast.name)}><InfoIcon /></Button> 
                    </Grid>
                    </Grid>
                )}
        </Grid></Box>
    </Card></ThemeProvider>
  );
}

export default connect(mapStoreToProps)(withRouter((CastListResults)));