import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Container, Grid, Typography } from '@material-ui/core';
import CollectionVsFilmography from './CollectionVsFilmography';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AdditionalUserInfo extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    return (
      <Container fixed>
        {this.props.store.collectionReducer.map((movie, i) =>
        <Grid container key={i}>
        <CollectionVsFilmography 
        movie={movie}
        /></Grid>
        )}
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(AdditionalUserInfo);