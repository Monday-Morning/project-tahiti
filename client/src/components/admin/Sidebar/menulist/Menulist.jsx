// library
import { Typography } from '@mui/material';
import adminRoutes from '../../../../utils/getAdminRoutes';

// components
import NavGroup from './NavGroup';

const MenuList = () => {
  const navItems = adminRoutes.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant='h6' color='error' align='center'>
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default MenuList;
