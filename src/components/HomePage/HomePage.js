import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import SearchPage from '../SearchPage/SearchPage';
import SideBarLibrary from '../SideBarLibrary/SideBarLibrary';
import AdditionalUserInfo from '../AdditionalUserInfo/AdditionalUserInfo';
import Nav from '../Nav/Nav';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import LogOutButton from '../LogOutButton/LogOutButton';


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class HomePage extends Component {
  

  render() {
    if(Object.entries(this.props.store.user).length === 0) {
        return (
        <Container>
          <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item><Nav /></Grid>
                <Grid item><Typography variant="h1">CAST WATCH</Typography></Grid>
          <Grid item><Typography>{       }</Typography></Grid>
                </Grid>
          <Box display="flex" flexDirection="row" flexWrap="nowrap">       
          <Box order={1} width="10%">           
            <LoginPage/>
            <RegisterPage />
          </Box>         
            <Box order={2} width="80%">
              <SearchPage />
            </Box>          
            <Box order={3} width="10%">
            <Typography>Library</Typography>
            <SideBarLibrary />
            </Box>
            </Box>
        </Container>
    );}
    else {
        return (
            <Container>
                <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item><Nav /></Grid>
                <Grid item><Typography variant="h1">CAST WATCH</Typography></Grid>
                
                <Grid item><LogOutButton /></Grid>
                </Grid>
                <Box display="flex" flexDirection="row" flexWrap="nowrap">       
                <Box order={1} width="10%">           
                <AdditionalUserInfo />
                </Box>         
                <Box order={2} width="80%">
                    <SearchPage />
                </Box>          
                <Box order={3} width="10%">
                <Typography>Library</Typography>
                <SideBarLibrary />
                </Box>
                </Box>
            </Container>
                );
            }


  }
}

export default connect(mapStoreToProps)(withRouter((HomePage)));
