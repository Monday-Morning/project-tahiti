// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';

import CreateIcon from '@mui/icons-material/Create';

const utilities = {
  id: 'utilities',
  type: 'group',
  children: [
    {
      id: 'post',
      title: 'Posts',
      type: 'collapse',
      icon: <CreateIcon />,
      children: [
        {
          id: 'browse',
          title: 'Browse',
          type: 'item',
          url: '/admin/post/browse',
        },
        {
          id: 'add-new',
          title: 'Add New',
          type: 'item',
          url: '/admin/post/add-new',
        },
        {
          id: 'media',
          title: 'Media',
          type: 'item',
          url: '/admin/post/media',
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
