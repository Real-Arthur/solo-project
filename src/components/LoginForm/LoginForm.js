import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Box, TextField, InputLabel, Button, Typography } from "@material-ui/core";

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <Box>
      <Grid container direction="column" alignItems="flex-start">
      {/* <form className="formPanel" onSubmit={this.login}> */}
      <Grid item>
        <Typography variant="h3">Login</Typography>
        {this.props.store.errors.loginMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
          </h3>
        )}
        </Grid>
        <Grid item>
          <InputLabel htmlFor="username">
            Username:
            <TextField
              type="text"
              name="username"
              required
              value={this.state.username}
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
              required
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </InputLabel>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={this.login}>Login</Button>
          {/* <input className="btn" type="submit" name="submit" value="Log In" /> */}
        </Grid>
      {/* </form> */}
      </Grid>
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
