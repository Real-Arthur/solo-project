import { Card, Typography } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
// import InputAdornment from '@material-ui/core/InputAdornment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import SideBarLibrary from '../SideBarLibrary/SideBarLibrary';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
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
