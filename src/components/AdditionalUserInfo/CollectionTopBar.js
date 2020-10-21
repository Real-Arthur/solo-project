import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Typography } from '@material-ui/core'

import { ThemeProvider } from '@material-ui/styles';
import theme from '../Theme/Theme'

function CollectionTopBar(props) {

  return (
    <ThemeProvider theme={theme}>
      <>
    <Typography color="error">
        {props.store.user.username}'s
        Collection
    </Typography>
    <hr></hr></></ThemeProvider>
  );
}

export default connect(mapStoreToProps)(withRouter((CollectionTopBar)));




