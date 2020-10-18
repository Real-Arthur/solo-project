import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Container } from '@material-ui/core';

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
        <h2>{this.state.heading}</h2>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(AdditionalUserInfo);