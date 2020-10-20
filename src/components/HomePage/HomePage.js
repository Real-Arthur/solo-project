import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router';

import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

import SearchPage from '../SearchPage/SearchPage';
import SideBarLibrary from '../SideBarLibrary/SideBarLibrary';
import BasicUserInfo from '../AdditionalUserInfo/BasicUserInfo';
import Nav from '../Nav/Nav';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import LogOutButton from '../LogOutButton/LogOutButton';
import CollectionTopBar from '../AdditionalUserInfo/CollectionTopBar';


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class HomePage extends Component {
 
  render() {
    // if user is not logged in
    if(Object.entries(this.props.store.user).length === 0) {
        return (
        <Container>
          <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item><Nav /></Grid>
                <Grid item><Typography variant="h1">CAST WATCH</Typography></Grid>
          <Grid item><Typography>{       }</Typography></Grid>
                </Grid>
          <Box display="flex" flexDirection="row" flexWrap="nowrap">       
          <Box order={1} flexShrink={2}>           
            <LoginForm />
            <RegisterForm />
          </Box>         
            <Box order={2} width="100%">
              <SearchPage />
            </Box>          
            <Box order={3} flexShrink={3}>
            <Typography>Log In For Collection</Typography>
            <SideBarLibrary />
            </Box>
            </Box>
        </Container>
    );}
    // User is logged in
    else {
        return (
            <Container>
                <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item><Nav /></Grid>
                {/* <Grid item ><Button onClick={this.reset}>Reset Search</Button></Grid> */}
                <Grid item><Typography variant="h1">CAST WATCH</Typography></Grid>
                
                <Grid item><LogOutButton /></Grid>
                </Grid>
                <Box display="flex" flexDirection="row" flexWrap="nowrap">       
                <Box order={1} flexShrink={2}>           
                <BasicUserInfo />
                </Box>         
                <Box order={2} width="100%">
                    <SearchPage />
                </Box>          
                <Box order={3} flexShrink={3}>
                  <CollectionTopBar />
                <SideBarLibrary />
                </Box>
                </Box>
            </Container>
                );
            }


  }
}

export default connect(mapStoreToProps)(withRouter((HomePage)));
