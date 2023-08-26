import { useState, useEffect } from 'react';

// library
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

// components
import NavItem from './NavItem';

const NavCollapse = ({ menu, level }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClick = () => {
    setOpen(!open);
    setSelected(!selected ? menu.id : null);
  };

  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === menu.id);
    if (currentIndex > -1) {
      setOpen(true);
    }
    // eslint-disable-next-line
  }, []);

  // menu collapse & item
  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant='h6' color='error' align='center'>
            Menu Items Error
          </Typography>
        );
    }
  });

  const menuIcon = menu.icon ? (
    menu.icon
  ) : (
    <FiberManualRecord
      sx={{
        width: selected === menu.id ? 8 : 6,
        height: selected === menu.id ? 8 : 6,
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  return (
    <>
      <ListItemButton
        sx={{
          mb: 0.5,
          alignItems: 'flex-start',
          backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`,
        }}
        selected={selected === menu.id}
        onClick={handleClick}
      >
        <ListItemIcon sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 }}>
          {menuIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              variant='body1'
              color='inherit'
              sx={{
                my: 'auto',
                fontSize: '0.875rem',
                color: selected === menu.id ? '#000' : '#212121',
                fontWeight: selected === menu.id ? 500 : 400,
              }}
            >
              {menu.title}
            </Typography>
          }
        />
        {open ? (
          <KeyboardArrowUp
            stroke={1.5}
            size='1rem'
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
          />
        ) : (
          <KeyboardArrowDown
            stroke={1.5}
            size='1rem'
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
          />
        )}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List
          component='div'
          disablePadding
          sx={{
            position: 'relative',
            '&:after': {
              content: "''",
              position: 'absolute',
              left: '32px',
              top: 0,
              height: '100%',
              width: '1px',
              opacity: 1,
              background: '#e3f2fd',
            },
          }}
        >
          {menus}
        </List>
      </Collapse>
    </>
  );
};

export default NavCollapse;
