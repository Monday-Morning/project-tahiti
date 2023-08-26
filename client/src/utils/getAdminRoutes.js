// library
import Create from '@mui/icons-material/Create';

const admin = {
  id: 'admin',
  type: 'group',
  children: [
    {
      id: 'post',
      title: 'Posts',
      type: 'collapse',
      icon: <Create />,
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

// routes
export default {
  items: [admin],
};
