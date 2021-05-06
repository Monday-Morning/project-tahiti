import React from 'react';

// Libraries
import { useMediaQuery } from '@material-ui/core';

// Components
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

// Assets
import theme from '../../config/themes/light';

const Header = () => {
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return matches ? <DesktopNavbar /> : <MobileNavbar />;
};
export default Header;
