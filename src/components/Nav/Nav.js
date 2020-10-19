import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Container, Typography} from '@material-ui/core'
import HomeButton from './HomeButton';

const Nav = (props) => {
  
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <Container>
      {/* Always show this link since the home and library pages are not protected */}
        <HomeButton />
        <Link  className="nav-link" to="/library">
          Library
        </Link>
      {/* </div> */}
    </Container>
  );
};

export default connect(mapStoreToProps)(Nav);
