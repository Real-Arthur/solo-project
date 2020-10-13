import React, { Component } from 'react';
import { connect } from 'react-redux';


import mapStoreToProps from '../../redux/mapStoreToProps';
import { TextField, Card, Button } from '@material-ui/core';
import WcIcon from '@material-ui/icons/Wc';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TheatersIcon from '@material-ui/icons/Theaters';
import TitleResults from '../SearchResults/TitleResults';
import PersonResults from '../SearchResults/PersonResults';

const initialState = {
  movieTitle: '',
  personName: ''
}

class SearchPage extends Component {
  state = {
    isMovie: true,
    search: {
    movieTitle: '',
    personName: ''
    }
  };

  toggleSearch = (event) => {
    this.setState({
      isMovie: !this.state.isMovie,
      search: {
        movieTitle: '',
        personName: ''
      }
    })
  }

  searchTitle = (event) => {
    console.log('event value and property name', event.target.value);
    this.setState({
      search: {
        ...this.state.personName,
        movieTitle: event.target.value,
      }
    })
      this.props.dispatch({
        type: 'SEARCH_BY_TITLE',
        payload: event.target.value
      })
  }

  searchPerson = (event) => {
    console.log('event value and property name', event.target.value);
    this.setState({
      search: {
        ...this.state.movieTitle,
        personName: event.target.value,
      }
    })
      this.props.dispatch({
        type: 'SEARCH_BY_PERSON',
        payload: event.target.value
      })
  }


  render() {
    console.log('state', this.state);
    
    if(this.state.isMovie){
    return (
      <Card>
        <TextField 
        fullWidth 
        variant="outlined"
        label="Search Movies"
        value={this.state.search.movieTitle}
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
        <TitleResults />
      </Card>
    );
      } else {
        return(
          <Card>
        <TextField 
        fullWidth 
        variant="outlined"
        label="Search People"
        value={this.state.search.personName}
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
        onChange={(event) => this.searchPerson(event)}
        />
        <PersonResults />
      </Card>
        )
      }
  }
}

export default connect(mapStoreToProps)(SearchPage);
