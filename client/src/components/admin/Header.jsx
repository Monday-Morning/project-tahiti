import React from 'react';
import Link from 'next/link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// assets
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto',
          },
        }}
      >
        <Box
          component='span'
          sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}
        >
          <ButtonBase disableRipple component={Link} passHref href='/'>
            <h2>Monday Morning</h2>
          </ButtonBase>
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant='rounded'
            sx={{
              transition: 'all .2s ease-in-out',
              background: '#ede7f6',
              color: '#5e35b1',
              '&:hover': {
                background: '#5e35b1',
                color: '#ede7f6',
              },
            }}
            onClick={handleLeftDrawerToggle}
            color='inherit'
          >
            <MenuIcon size='1.3rem' />
          </Avatar>
        </ButtonBase>
      </Box>
    </>
  );
};

export default Header;
