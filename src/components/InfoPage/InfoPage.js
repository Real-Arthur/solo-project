import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


// const InfoPage = () => (
//   <div>
//     {JSON.stringify(movies)}
//   </div>
// );

// If you needed to add local state or other things,
// you can make it a class component like:


class InfoPage extends React.Component {


  render() {
    console.log('props', this.props.movies);
    
    return (
      <ul>
        {this.props.movies.map(movie => 
          <li>{movie.title} {movie.overview}</li>
          )}
      </ul>
    )
  }
}

export default connect(mapStoreToProps)(InfoPage);
