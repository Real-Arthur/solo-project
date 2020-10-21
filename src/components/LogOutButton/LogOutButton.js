import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from "@material-ui/core";
import { withRouter } from 'react-router-dom';

class LogOutButton extends Component {
  doBoth = () => {
    this.props.dispatch({
      type: 'LOGOUT'
    })
    console.log('props', this.props);
    this.props.history.push('/home')
  }
  render() {
  return (
  <Button
    variant="outlined"
    color="primary"

    onClick={() => this.doBoth()}
  >
    <Typography color="error">Log Out</Typography>
  </Button>
  )
  }
};

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(withRouter((LogOutButton)));
