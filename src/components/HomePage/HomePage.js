import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router';
import { Route, Link, HashRouter } from 'react-router-dom';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import FullCast from '../FullCast/FullCast';
import SearchPage from '../SearchPage/SearchPage';
import SideBarLibrary from '../SideBarLibrary/SideBarLibrary';
import AdditionalUserInfo from '../AdditionalUserInfo/AdditionalUserInfo';
import Nav from '../Nav/Nav';
import { Container, Box, Typography } from '@material-ui/core';


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class HomePage extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    if(Object.entries(this.props.store.user).length === 0) {
        return (
        <Container>
          <Box><Nav /></Box>
          <Box><UserPage /></Box>
          <Box display="flex" flexDirection="row" flexWrap="nowrap">       
          <Box order={1} width="15%">           
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
                <Box><Nav /></Box>
                <Box><UserPage /></Box>
                <Box display="flex" flexDirection="row" flexWrap="nowrap">       
                <Box order={1} width="15%">           
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
