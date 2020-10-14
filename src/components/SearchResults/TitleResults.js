import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './SearchResults.css';

class TitleResults extends Component {
  state = {
    heading: 'Class Component',
  };

  addToLibrary = (movie) => {
    console.log('things to send', movie);
    this.props.dispatch({
      type: 'ADD_TO_LIBRARY',
      payload: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
      }
    })
  }

  render() {
    console.log('movies list', this.props.store.titleReducer);
    
    
    if(Object.entries(this.props.store.user).length === 0) {
      return (
        <ul>
          {this.props.store.titleReducer.map(movie =>
          <div key={movie.id}>
            <li >{movie.title}</li>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            </div>
            )}
        </ul>
      );
    } else {
      return (
        <ul>
          {this.props.store.titleReducer.map(movie =>
          <div key={movie.id}>
            <li >{movie.title}</li>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <button onClick={() => {this.addToLibrary(movie)}}></button>
            </div>
            )}
        </ul>
      );
    }

  }
}

export default connect(mapStoreToProps)(TitleResults);
