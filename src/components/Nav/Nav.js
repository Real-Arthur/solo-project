import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Container, Typography} from '@material-ui/core'

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
      <Link to="/home">
        <Typography variant="h2" className="nav-title">Cast Watch</Typography>
      </Link>
      {/* Always show this link since the home and library pages are not protected */}
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/library">
          Library
        </Link>
      {/* </div> */}
    </Container>
  );
};

export default connect(mapStoreToProps)(Nav);
