import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './SearchResults.css';

class PersonResults extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    console.log('people list', this.props.store.personReducer);
    
    return (
      <ul>
        {this.props.store.personReducer.map(person =>
        <div key={person.id}>
          <li >{person.name}</li>
          <img src={`https://image.tmdb.org/t/p/w300${person.profile_path}`} />
          </div>
          )}
      </ul>
    );
  }
}

export default connect(mapStoreToProps)(PersonResults);
