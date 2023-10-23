import React, { useState, useContext } from 'react';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import makeStyles from '@mui/styles/makeStyles';

import { authContext } from '../../context/AuthContextProvider';

const UserAvatar = ({ picture, name }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const { logout } = useContext(authContext);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    logout();
    handleMenuClose();
  };

  return (
    <div className={classes.avatarContainer}>
      <Avatar
        alt={name}
        src={picture}
        onClick={handleMenuOpen}
        className={classes.avatar}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserAvatar;

const useStyles = makeStyles(() => ({
  avatarContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  avatar: {
    cursor: 'pointer',
  },
}));
