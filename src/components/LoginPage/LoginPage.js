import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import { Card } from "@material-ui/core";
class LoginPage extends Component {
  render() {
    return (
      <Card>
        <LoginForm />
      </Card>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
