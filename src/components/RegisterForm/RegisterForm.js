import { Box, Grid, InputLabel, TextField, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <Box>
        <Grid container>
      {/* <form className="formPanel" onSubmit={this.registerUser}> */}
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <Grid item>
          <InputLabel htmlFor="username">
            Username:
            <TextField
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </InputLabel>
        </Grid>
        <Grid item>
          <InputLabel htmlFor="password">
            Password:
            <TextField
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </InputLabel>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={this.registerUser}>Register</Button>
          {/* <input className="btn" type="submit" name="submit" value="Register" /> */}
        </Grid>
      {/* </form> */}
      </Grid></Box>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
