import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 140,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 12,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const articleStatusMenu = ({
  publishStatus,
  id,
  title,
  handleDialogOpen,
  updatePublishStatusResponse,
}) => {
  const [status, setStatus] = useState(publishStatus);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!updatePublishStatusResponse?.data) return;
    if (
      id === updatePublishStatusResponse?.data?.updateArticlePublishStatus?.id
    )
      setStatus(
        updatePublishStatusResponse?.data?.updateArticlePublishStatus
          ?.publishStatus,
      );
  }, [updatePublishStatusResponse]);

  return (
    <div>
      <Button
        id='demo-customized-button'
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        variant='contained'
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ fontSize: '10px' }}
        color={status === 'PUBLISHED' ? 'success' : 'error'}
      >
        {status}
      </Button>
      <StyledMenu
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleDialogOpen((status = 'PUBLISHED'), id, title), handleClose();
          }}
          disableRipple
        >
          <FileCopyIcon />
          Publish
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleDialogOpen((status = 'UNPUBLISHED'), id, title),
              handleClose();
          }}
          disableRipple
        >
          <FileCopyIcon />
          Unpublish
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleDialogOpen((status = 'ARCHIVED'), id, title), handleClose();
          }}
          disableRipple
        >
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleDialogOpen((status = 'TRASHED'), id, title), handleClose();
          }}
          disableRipple
        >
          <RemoveCircleOutlineIcon />
          Trash
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default articleStatusMenu;
