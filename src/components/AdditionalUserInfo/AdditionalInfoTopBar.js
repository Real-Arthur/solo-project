import { Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Returns the currently searched person
function AdditionalInfoTopBar(props) {
  return (
    <Typography>
        You've seen {props.store.currentReducer} in:
    </Typography>
  );
}

export default connect(mapStoreToProps)((AdditionalInfoTopBar));
