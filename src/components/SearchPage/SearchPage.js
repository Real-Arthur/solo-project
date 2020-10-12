import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { TextField, Card } from '@material-ui/core';
import WcIcon from '@material-ui/icons/Wc';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TheatersIcon from '@material-ui/icons/Theaters';


class SearchPage extends Component {
  state = {
    heading: 'SearchPage',
  };

  render() {
    return (
      <Card>
        <TextField 
        fullWidth 
        variant="outlined"
        InputProps={{
          startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <TheatersIcon />
            </InputAdornment>
          )
        }}
        
        />
        
      </Card>
    );
  }
}

export default connect(mapStoreToProps)(SearchPage);
