import React, { Component } from 'react';
import { connect } from 'react-redux';


import mapStoreToProps from '../../redux/mapStoreToProps';
import { TextField, Card, Button } from '@material-ui/core';
import WcIcon from '@material-ui/icons/Wc';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TheatersIcon from '@material-ui/icons/Theaters';
import SearchResults from '../SearchResults/SearchResults';



class SearchPage extends Component {
  state = {
    isMovie: true,
  };

  toggleSearch = () => {
    this.setState({
      isMovie: !this.state.isMovie
    })
  }

  searchTitle = (event) => {
    console.log('event value and property name', event.target.value);
      this.props.dispatch({
        type: 'SEARCH_BY_TITLE',
        payload: event.target.value
      })
  }

  searchName = (event) => {
    console.log('event value and property name', event.target.value);
      this.props.dispatch({
        type: 'SEARCH_BY_NAME',
        payload: event.target.value
      })
  }


  render() {

    if(this.state.isMovie){
    return (
      <Card>
        <TextField 
        fullWidth 
        variant="outlined"
        label="Search Movies"
        InputProps={{
          startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end"
            onClick={()=> this.toggleSearch()}>
              <TheatersIcon />
              <Button variant="outlined">Search By Name?</Button>
            </InputAdornment>
          )
        }}
        onChange={(event) => this.searchTitle(event)}
        />
        <SearchResults />
      </Card>
    );
      } else {
        return(
          <Card>
        <TextField 
        fullWidth 
        variant="outlined"
        label="Search People"
        InputProps={{
          startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end"
            onClick={() => this.toggleSearch()}>
              <WcIcon />
              <Button variant="outlined">Search By Title?</Button>
            </InputAdornment>
          )
        }}
        onChange={(event) => this.searchName(event)}
        />
        <Card>
          
        </Card>
      </Card>
        )
      }
  }
}

export default connect(mapStoreToProps)(SearchPage);
