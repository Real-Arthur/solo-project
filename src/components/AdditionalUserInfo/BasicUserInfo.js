import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Container } from '@material-ui/core';

// Spacer for formatting. Might add to later
class BasicUserInfo extends Component {
  render() {
    return (
      <Container fixed>
        <></>
      </Container>
    );
  }
}
export default connect(mapStoreToProps)(BasicUserInfo);