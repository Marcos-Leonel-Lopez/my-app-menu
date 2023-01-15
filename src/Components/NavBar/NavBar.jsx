import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import imagenes from '../../assets/imagenes';
import CajaSearch from './CajaSearch';

import { Badge, Button, Menu, MenuItem, Tooltip } from '@mui/material';
import CarWidget from '../CartWidget/CarWidget';





const drawerWidth = 240;

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MenuResII() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsButtonDisabled(true);
      } else {
        setIsButtonDisabled(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ...(open && { display: 'none' }) }}
            disabled={isButtonDisabled}
          >
            <MenuIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}
            />
          </IconButton >
          <Box
            variant="h5"
            component="a"
            justifyContent="center"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              width: 'auto',

            }}
          >
            <img className="LogoPeque" src={imagenes[0].img} alt={imagenes[0].descripcion} />
          </Box>
          <Box
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img className="LogoPeque" src={imagenes[0].img} alt={imagenes[0].descripcion} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key={'Entradas'}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Entradas
            </Button>
            <Button
              key={'Platos Principales'}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Platos Principales
            </Button>
            <Button
              key={'Postres'}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Postres
            </Button>
            <Button
              key={'Bebidas'}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Bebidas
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <CajaSearch />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <CarWidget title="Carrito" nItems={10} />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
          <ListItem key={'Entradas'} disablePadding >
            <ListItemButton>
              <ListItemText primary={'Entradas'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Platos Principales'} disablePadding >
            <ListItemButton>
              <ListItemText primary={'Platos Principales'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Postres'} disablePadding>
            <ListItemButton>
              <ListItemText primary={'Postres'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Bebidas'} disablePadding>
            <ListItemButton>
              <ListItemText primary={'Bebidas'} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <Box>
            <CajaSearch />
          </Box>
          <Divider />
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
        </List>
      </Drawer>

      <Main open={open}>

        {/* <Box >
          <ItemListContainer />
        </Box> */}

      </Main>
    </Box>
  );
}
