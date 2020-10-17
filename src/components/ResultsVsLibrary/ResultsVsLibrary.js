import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { Typography, Box, Grid, Button } from '@material-ui/core';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ResultsVsLibrary(props) {
function doBoth(user, movie) {
    props.addToLibraryAndCollection(user, movie);
    props.recheck();
}

let inLibrary = useRef(props.store.collectionReducer.filter(title => title.id === props.movie.id))
  
  if(inLibrary.current.length > 0) {
      return (
          <Button><IndeterminateCheckBoxIcon /></Button>
      )
  } else {
      return (
        <Button onClick={()=> doBoth(props.store.user, props.movie)}>
              <AddCircleIcon />
        </Button>
      )
  }
}

export default connect(mapStoreToProps)(withRouter((ResultsVsLibrary)));
