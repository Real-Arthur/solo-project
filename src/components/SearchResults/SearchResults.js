import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './SearchResults.css';

class SearchResults extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    console.log('movies list', this.props.store.searchReducer);
    
    return (
      <ul>
        {this.props.store.searchReducer.map(movie =>
        <div key={movie.id}>
          <li >{movie.title}</li>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          </div>
          )}
      </ul>
    );
  }
}

export default connect(mapStoreToProps)(SearchResults);
