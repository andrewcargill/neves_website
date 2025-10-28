import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const navItems = [
  //   { text: "Hem", path: "/" },
  //   { text: "Träskulpturer", path: "/sculptures" },
  //   { text: "Trädfällning", path: "/trees" },
  //   { text: "Utbildning", path: "/education" },
  //   { text: "Om oss", path: "/about" },
  // ];
  const navItems = [
    { text: "Hem", path: "/" },
    { text: "Träskulpturer", path: "/traskulpturer" },
    { text: "Trädfällning", path: "/tradfallning" },
    { text: "Utbildning", path: "/utbildning" },
    { text: "Om oss", path: "/om-oss" },
  ];

  const drawerHeight = 61;

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: { xs: "center", md: "flex-start" },
              position: "relative",
            }}
          >
            {/* Mobile Menu Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "block", md: "none" },
                position: "absolute",
                left: 0,
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Company Logo and Name */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <AcUnitIcon sx={{ marginRight: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "0.1rem",
                }}
              >
                Neves Art & Craft
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{ display: { xs: "none", md: "block" }, marginLeft: "auto" }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  component={Link}
                  to={item.path}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ marginTop: `${drawerHeight}px` }} />

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            marginTop: `${drawerHeight}px`,
            height: "auto",
          },
        }}
      >
        <Box sx={{ width: 240 }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navigation;
