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
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">
          Library
        </Link>
      {/* <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}> */}
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {/* {loginLinkData.text}
        </Link> */}
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {/* {props.store.user.id && (
          <>
            <Link className="nav-link" to="/info">
              Info Page
            </Link>
            <LogOutButton className="nav-link" />
          </>
        )} */}
        
      {/* </div> */}
    </Container>
  );
};

export default connect(mapStoreToProps)(Nav);
