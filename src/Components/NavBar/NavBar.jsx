import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import imagenes from "../../assets/imagenes";
import CajaSearch from "./CajaSearch";

import {  Button } from "@mui/material";
import CarWidget from "../CartWidget/CarWidget";
import { Link, NavLink } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
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
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ...(open && { display: "none" }) }}
            disabled={isButtonDisabled}
          >
            <MenuIcon
              to="/"
              sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
            />
          </IconButton>
          <Box
            variant="h5"
            justifyContent="center"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              width: "auto",
            }}
          >
            <Link to="/">
              <img
                className="LogoPeque"
                src={imagenes[0].img}
                alt={imagenes[0].descripcion}
              />
            </Link>
          </Box>
          <Box
            to="/"
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              className="LogoPeque"
              src={imagenes[0].img}
              alt={imagenes[0].descripcion}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink to="/category/entrada" activeclassname="active">
              <Button
                key={"Entradas"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Entradas
              </Button>
            </NavLink>
            <NavLink to="/category/principal" activeclassname="active">
              <Button
                key={"Platos Principales"}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Platos Principales
              </Button>
            </NavLink>
            <NavLink to="/category/postre" activeclassname="active">
              <Button
                key={"Postres"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Postres
              </Button>
            </NavLink>
            <NavLink to="/category/bebida" activeclassname="active">
              <Button
                key={"Bebidas"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Bebidas
              </Button>
            </NavLink>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
            <CajaSearch />
          </Box>
          <NavLink to="cart">
            <Box sx={{ flexGrow: 0 }}>
              <CarWidget title="Carrito" />
            </Box>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <NavLink
            to="/category/entrada"
            activeclassname="active"
            className="Inactive"
          >
            <ListItem key={"Entradas"} disablePadding>
              <ListItemButton>
                <ListItemText primary={"Entradas"} />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink
            to="/category/principal"
            activeclassname="active"
            className="Inactive"
          >
            <ListItem key={"Platos Principales"} disablePadding>
              <ListItemButton>
                <ListItemText primary={"Platos Principales"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink
            to="/category/postre"
            activeclassname="active"
            className="Inactive"
          >
            <ListItem key={"Postres"} disablePadding>
              <ListItemButton>
                <ListItemText primary={"Postres"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink
            to="/category/bebida"
            activeclassname="active"
            className="Inactive"
          >
            <ListItem key={"Bebidas"} disablePadding>
              <ListItemButton>
                <ListItemText primary={"Bebidas"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <Divider />
          <Box>
            <CajaSearch />
          </Box>
          <Divider />
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
