import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button, Container, Typography, Box } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


  const InfoPage = (props) => (
     <Grid container direction="column" spacing={0}>
      <Button key={props.id}>
      <Grid item xs={12}>
      <Typography>{props.title}</Typography>
    </Grid></Button>
</Grid>
 );

export default InfoPage;
