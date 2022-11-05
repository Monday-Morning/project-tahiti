import React, { useState } from 'react';

// libraries
import {
  useMediaQuery,
  Menu,
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Share2 } from 'react-feather';
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

// theme
import theme from '../../config/themes/light';

function Share({ url, title, text, size }) {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles(theme);
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url,
      });
    }
  };
  return (
    <>
      <Share2
        size={size || (Desktop ? 18 : 10)}
        onClick={Desktop ? handleClick : handleShare}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuItem onClick={handleClose}>
          <WhatsappShareButton url={url} title={title} separator=':: '>
            <ListItem>
              <ListItemIcon>
                <i className='fab fa-whatsapp' />
              </ListItemIcon>
              <ListItemText primary='WhatsApp' />
            </ListItem>
          </WhatsappShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FacebookShareButton url={url} quote={title}>
            <ListItem>
              <ListItemIcon>
                <i className='fab fa-facebook-f' />
              </ListItemIcon>
              <ListItemText primary='Facebook' />
            </ListItem>
          </FacebookShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkedinShareButton url={url} title={title}>
            <ListItem>
              <ListItemIcon>
                <i className='fab fa-linkedin-in' />
              </ListItemIcon>
              <ListItemText primary='LinkedIn' />
            </ListItem>
          </LinkedinShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <TwitterShareButton url={url} title={title}>
            <ListItem>
              <ListItemIcon>
                <i className='fab fa-twitter' />
              </ListItemIcon>
              <ListItemText primary='Twitter' />
            </ListItem>
          </TwitterShareButton>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Share;

const useStyles = makeStyles(() => ({}));
