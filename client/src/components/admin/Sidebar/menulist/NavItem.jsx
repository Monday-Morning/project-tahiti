import { forwardRef, useEffect, useContext } from 'react';
import Link from 'next/link';

// libraries
import { useTheme } from '@mui/material/styles';
import {
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';

// context
import { SidebarContext } from '../../../../context/SidebarContextProvider';

const NavItem = ({ item, level }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

  const { state, setState } = useContext(SidebarContext);

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link
        ref={ref}
        {...props}
        passHref
        href={`${item.url}`}
        target={itemTarget}
      />
    )),
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id) => {
    setState({ ...state, isOpen: [id] });
    if (matchesSM) setState({ ...state, opened: false });
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      setState({ ...state, isOpen: [item.id] });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Link passHref href={`${item.url}`} target={itemTarget}>
      <ListItemButton
        disabled={item.disabled}
        sx={{
          mb: 0.5,
          alignItems: 'flex-start',
          backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`,
        }}
        selected={state.isOpen?.findIndex((id) => id === item.id) > -1}
        onClick={() => itemHandler(item.id)}
      >
        <ListItemText
          primary={
            <Typography
              variant='body1'
              sx={{
                my: 'auto',
                fontSize: '0.875rem',
                color:
                  state.isOpen?.findIndex((id) => id === item.id) > -1
                    ? '#000'
                    : '#212121',
                fontWeight:
                  state.isOpen?.findIndex((id) => id === item.id) > -1
                    ? 500
                    : 400,
              }}
              color='inherit'
            >
              {item.title}
            </Typography>
          }
          secondary={
            item.caption && (
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
            )
          }
        />
      </ListItemButton>
    </Link>
  );
};

export default NavItem;
