import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "@material-ui/core"
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
    // This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props

    onClick={() => this.doBoth()}
  >
    Log Out
  </Button>
  )
  }
};

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(withRouter((LogOutButton)));
