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
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
let inLibrary = useRef(props.store.collectionReducer.filter(item => item.id === props.filmId))
  
  const [heading, setHeading] = useState('Functional Component');
  if(inLibrary.current.length > 0) {
      return (
          <Button><IndeterminateCheckBoxIcon /></Button>
      )
  } else {
      return (
          <Button><AddCircleIcon /></Button>
      )
  }
}

export default connect(mapStoreToProps)(withRouter((ResultsVsLibrary)));
