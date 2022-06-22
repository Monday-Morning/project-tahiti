
// material-ui
import { Divider, List, Typography } from '@mui/material';

// project imports
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
  // menu list collapse & items
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant='h6' color='error' align='center'>
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography
              variant='caption'
              sx={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#212121',
                padding: '6px',
                textTransform: 'capitalize',
                marginTop: '10px',
              }}
              display='block'
              gutterBottom
            >
              {item.title}
              {item.caption && (
                <Typography
                  variant='caption'
                  sx={{
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    color: '#9e9e9e',
                    textTransform: 'capitalize',
                  }}
                  display='block'
                  gutterBottom
                >
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};

export default NavGroup;
