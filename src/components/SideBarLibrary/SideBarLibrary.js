import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button } from "@material-ui/core";

function SideBarLibrary(props) {

  return (
    <Grid container direction="column" spacing={0}>
        {props.store.collectionReducer.map((movie, i) =>
        <Button key={i}>
        <Grid item xs={12}>
        <Typography>{movie.title}</Typography>
        </Grid>
      </Button>
        )}
      </Grid>
  );
}

export default connect(mapStoreToProps)(withRouter((SideBarLibrary)));