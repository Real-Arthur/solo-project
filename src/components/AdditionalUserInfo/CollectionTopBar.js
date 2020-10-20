import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Typography } from '@material-ui/core'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function CollectionTopBar(props) {

  return (
    <Typography>
        {props.store.user.username}'s
        Collection
    </Typography>
  );
}

export default connect(mapStoreToProps)(withRouter((CollectionTopBar)));




