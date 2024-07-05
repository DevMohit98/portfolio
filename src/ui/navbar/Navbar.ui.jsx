import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;
const navItems = [{link:"work", path:"/work"}, {link:"blog",path:"/blog"}, {link:"contact",path:"/"}];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} component={NavLink} to={item.path}>
              <ListItemText
                primary={item.link}
                className="!capitalize !font-medium !text-xl !text-[--color-dark-secondary]"
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="!bg-white !shadow-none">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className="!text-[--color-dark-secondary] !ml-auto"
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            className="ml-auto">
            {navItems.map((item, index) => (
              <Button
                key={index}
                component={NavLink}
                to={item.path}
                className="!capitalize !font-medium !text-xl"
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--color-primary)"
                    : "var(--color-dark-secondary)",
                })}>
                {item.link}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
};
export default Navbar;
