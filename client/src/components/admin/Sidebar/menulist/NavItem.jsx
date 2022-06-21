import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';

// project imports
import { MENU_OPEN, SET_MENU } from 'store/actions';
import config from 'config';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link
        ref={ref}
        {...props}
        to={`${config.basename}${item.url}`}
        target={itemTarget}
      />
    )),
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id) => {
    dispatch({ type: MENU_OPEN, id });
    if (matchesSM) dispatch({ type: SET_MENU, opened: false });
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch({ type: MENU_OPEN, id: item.id });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
      }}
      selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
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
                customization.isOpen.findIndex((id) => id === item.id) > -1
                  ? '#000'
                  : '#212121',
              fontWeight:
                customization.isOpen.findIndex((id) => id === item.id) > -1
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
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
};

export default NavItem;
