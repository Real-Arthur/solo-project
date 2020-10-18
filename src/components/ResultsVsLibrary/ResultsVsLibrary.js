import { Typography, Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
function ResultsVsLibrary(props){

  const index = props.store.collectionReducer.findIndex(film => film.id === props.movie.id)


  if(index === -1) {
    return (
        <Button onClick={()=> props.addToLibraryAndCollection(props.store.user, props.movie)}>
              <AddCircleIcon />
        </Button>
      )
  } else {
    return (
        <Button><IndeterminateCheckBoxIcon /></Button>
    )
  }
         
      

    
}

export default connect(mapStoreToProps)(ResultsVsLibrary);