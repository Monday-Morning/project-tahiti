import React from 'react';

// Libraries
import { useMediaQuery } from '@material-ui/core';

// Components
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

// Assets
import theme from '../../config/themes/light';

const NAV = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/campus',
    name: 'Campus',
  },
  {
    to: '/connect',
    name: 'Connect',
  },
  {
    to: '/ddcwc',
    name: 'DD & CWC',
  },
  {
    to: '/career',
    name: 'Career',
  },
  {
    to: '/alumni',
    name: 'Alumni',
  },
  {
    to: '/expressions',
    name: 'Expressions',
  },
];

const Header = () => {
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return matches ? <DesktopNavbar nav={NAV} /> : <MobileNavbar nav={NAV} />;
};
export default Header;
