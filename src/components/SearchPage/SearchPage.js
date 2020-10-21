import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import mapStoreToProps from '../../redux/mapStoreToProps';
import TitleResults from '../SearchResults/TitleResults';
import PersonResults from '../PersonResults/PersonResults';

import { ThemeProvider } from '@material-ui/styles';
import { TextField, Card, Button } from '@material-ui/core';
import WcIcon from '@material-ui/icons/Wc';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TheatersIcon from '@material-ui/icons/Theaters';
import theme from '../Theme/Theme';


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
    console.log('event value and property name', event.target.value.length);
    
    this.setState({
      search: {
        ...this.state.personName,
        movieTitle: event.target.value,
      }
    })
    if(event.target.value.length > 0) {
      this.props.dispatch({
        type: 'SEARCH_BY_TITLE',
        payload: event.target.value
      })
      }
  }

  searchPerson = (event) => {
    console.log('event value and property name', event.target.value);
    this.setState({
      search: {
        ...this.state.movieTitle,
        personName: event.target.value,
      }
    })
    if(event.target.value.length > 0) {
      this.props.dispatch({
        type: 'SEARCH_BY_PERSON',
        payload: event.target.value
      })
    }
  }

  findCast = (movie) => {
    console.log('Find cast of ', movie.id);
    console.log('Find cast of ', movie.title);
    this.props.dispatch({
      type: 'FETCH_CAST',
      payload: movie.id
    })
    this.props.dispatch({
      type: 'SET_CURRENT',
      payload: movie.title
    })
    this.props.history.push('/fullCast')
  }

  render() {
    console.log('state', this.state);
    console.log('state', this.props);
    
    if(this.state.isMovie){
    return (
      <ThemeProvider theme={theme}>
      <Card>
        <TextField 
        fullWidth 
        variant="outlined"
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
              <Button variant="outlined" color="secondary">Search By Name?</Button>
            </InputAdornment>
          )
        }}
        onChange={(event) => this.searchTitle(event)}
        />
        <TitleResults 
        findCast={this.findCast} />
      </Card></ThemeProvider>
    );
      } else {
        return(
          <ThemeProvider theme={theme}>
          <Card>
        <TextField 
        fullWidth 
        variant="outlined"
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
              <Button variant="outlined" color="secondary">Search By Title?</Button>
            </InputAdornment>
          )
        }}
        onChange={(event) => this.searchPerson(event)}
        />
        <PersonResults />
      </Card></ThemeProvider>
        )
      }
  }
}

export default connect(mapStoreToProps)(withRouter((SearchPage)));
