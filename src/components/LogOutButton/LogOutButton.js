import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from "@material-ui/core";
import { withRouter } from 'react-router-dom';

class LogOutButton extends Component {
  doBoth = () => {
    this.props.dispatch({
      type: 'LOGOUT'
    })
    // console.log('props', this.props);
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

export default connect()(withRouter((LogOutButton)));
