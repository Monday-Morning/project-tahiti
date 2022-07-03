import React from 'react';
import Link from 'next/link';

// libraries
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

// components
import MenuList from './menulist/Menulist';

const drawerWidth = 260;

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
          <Link href='/' passHref>
            <h2>Monday Morning</h2>
          </Link>
        </Box>
      </Box>
      {matchUpMd ? (
        <>
          <MenuList />
        </>
      ) : (
        <>
          <Box sx={{ px: 2 }}>
            <MenuList />
          </Box>
        </>
      )}
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component='nav'
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label='mailbox folders'
    >
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor='left'
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: '#fff',
            color: '#616161',
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '88px',
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color='inherit'
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
