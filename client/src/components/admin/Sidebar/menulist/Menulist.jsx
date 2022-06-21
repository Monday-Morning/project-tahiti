// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';

const utilities = {
  id: 'utilities',
  type: 'group',
  children: [
    {
      id: 'icons',
      title: 'Posts',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'browse',
          title: 'Browse',
          type: 'item',
          url: '/admin/browse',
          breadcrumbs: false,
        },
        {
          id: 'add-new',
          title: 'Add New',
          type: 'item',
          url: '/admin/add-new',
          breadcrumbs: false,
        },
        {
          id: 'media',
          title: 'Media',
          type: 'item',
          url: '/admin/media',
          breadcrumbs: false,
        },
      ],
    },
  ],
};

const menuItem = {
  items: [utilities],
};

const MenuList = () => {
  const navItems = menuItem.items.map((item) => {
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
