import { Card, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Nothing yet. tbd
class SideBarSearch extends Component {
  
  render() {

    
    return (
      <Card>
        <Typography></Typography>
      </Card>
    );
  }
}

export default connect(mapStoreToProps)(SideBarSearch);
