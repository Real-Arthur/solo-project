import React from 'react';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Box, MenuList, MenuItem } from '@material-ui/core'
import HomeButton from './HomeButton';
import LibraryButton from './LibraryButton';

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
    <Box>
      {/* Always show this link since the home and library pages are not protected */}
        <MenuList>
         <MenuItem><HomeButton /></MenuItem>
         <MenuItem><LibraryButton /></MenuItem>
        </MenuList>
        
        {/* <Link  className="nav-link" to="/library">
          Library
        </Link> */}
      {/* </div> */}
    </Box>
  );
};

export default connect(mapStoreToProps)(Nav);
