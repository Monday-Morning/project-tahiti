import * as React from 'react';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PollIcon from '@mui/icons-material/Poll';
import FeedIcon from '@mui/icons-material/Feed';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';

const categories = [
  {
    id: 'Post',
    children: [
      { id: 'Add New', icon: <AddCircleIcon />, path: '/admin_v2/addnew' },
      { id: 'Browse', icon: <DnsRoundedIcon />, path: '/admin_v2/browse' },
      {
        id: 'Media',
        icon: <PermMediaOutlinedIcon />,
        path: '/admin_v2/media',
      },
    ],
  },
  {
    id: 'Website Settings',
    children: [
      { id: 'issues', icon: <NewspaperIcon />, path: '/admin_v2/issues' },
      { id: 'squiggle', icon: <FeedIcon />, path: '/admin_v2/squiggle' },
      { id: 'poll', icon: <PollIcon />, path: '/admin_v2/poll' },
      {
        id: 'comment',
        icon: <MarkUnreadChatAltIcon />,
        path: '/admin_v2/comment',
      },
    ],
  },
  {
    id: 'Authentication',
    children: [
      { id: 'User', icon: <PersonIcon /> },
      { id: 'Manage User', icon: <ManageAccountsIcon /> },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant='permanent' {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}
        >
          Monday Morning
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Project Overview</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, path }) => (
              <ListItem disablePadding key={childId}>
                <Link aria-label='Nav Item' href={path ?? ''} passHref>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
