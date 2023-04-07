import { useEffect, useContext } from 'react';

// libraries
import { styled, useTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from '@mui/material';

// context
import { SidebarContext } from '../../context/SidebarContextProvider';

// components
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar/Sidebar';

const drawerWidth = 260;

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    backgroundColor: '#e3f2fd',
    width: '100%',
    minHeight: 'calc(100vh - 88px)',
    flexGrow: 1,
    padding: '20px',
    marginTop: '88px',
    marginRight: '20px',
    ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.up('md')]: {
        marginLeft: -(drawerWidth - 20),
        width: `calc(100% - ${drawerWidth}px)`,
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px',
        marginRight: '10px',
      },
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
      },
    }),
  }),
);

const Admin = ({ children }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
  const { state, setState } = useContext(SidebarContext);
  // Handle left drawer
  const handleLeftDrawerToggle = () => {
    setState({ opened: !state.opened });
  };

  useEffect(() => {
    setState({ opened: !matchDownMd });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        elevation={0}
        color='inherit'
        sx={{
          bgcolor: '#fff',
          transition: state.opened ? theme.transitions.create('width') : 'none',
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      <Sidebar
        drawerOpen={state.opened}
        drawerToggle={handleLeftDrawerToggle}
      />

      <Main theme={theme} open={state.opened}>
        {children}
      </Main>
    </Box>
  );
};

export default Admin;
