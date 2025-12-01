// Layout.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Badge,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Outlet, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../pages/CartContext";

// ✅ apna logo yahan import karo (path apne project ke hisaab se change karna)
import logo from "../assets/logo.png"; // for example: src/assets/logo.png

const navItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
];

const Layout = ({ cartCount: cartCountProp }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  // ✅ CartContext se items
  const { cartItems } = useCart() || { cartItems: [] };

  // ✅ Total items (qty ka sum)
  const countFromContext = Array.isArray(cartItems)
    ? cartItems.reduce((sum, item) => sum + (item.qty || 0), 0)
    : 0;

  // ✅ Agar prop se aaya hai to woh, warna context wala
  const cartCount = cartCountProp ?? countFromContext;

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const linkButtonStyle = ({ isActive }) => ({
    color: isActive ? "#ff4d4d" : "inherit",
    fontWeight: isActive ? 700 : 500,
    textDecoration: "none",
  });

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(255,255,255,0.9)",
          color: "text.primary",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Stack direction="row" spacing={1} alignItems="center">
            {/* Clickable logo that goes to Home */}
            <Box
              component={NavLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="FoodFusion logo"
                sx={{
                  height: 32,
                  width: "auto",
                  mr: 1,
                  display: "block",
                }}
              />
               <Typography variant="h6" sx={{ fontWeight: 700 }}>
    FoodFusion
  </Typography> 
            </Box>
          </Stack>

          {/* Desktop nav */}
          {!isMobile && (
            <Stack direction="row" spacing={2} alignItems="center">
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  style={linkButtonStyle}
                >
                  {item.label}
                </Button>
              ))}

              {/* Cart button */}
              <IconButton
                component={NavLink}
                to="/cart"
                style={linkButtonStyle}
              >
                <Badge badgeContent={cartCount} color="primary" showZero>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              {/* Auth buttons (UI only) */}
              <Button
                variant="text"
                sx={{ fontWeight: 500 }}
                component={NavLink}
                to="/SignIn"
              >
                Sign in
              </Button>
              <Button
                variant="contained"
                component={NavLink}
                to="/SignUp"
                sx={{ borderRadius: 999, px: 2.5 }}
              >
                Sign up
              </Button>
            </Stack>
          )}

          {/* Mobile nav */}
          {isMobile && (
            <>
              <IconButton
                component={NavLink}
                to="/cart"
                style={linkButtonStyle}
                sx={{ mr: 1 }}
              >
                <Badge badgeContent={cartCount} color="primary" showZero>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 240, p: 2 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  {/* Drawer header with logo + text */}
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ mb: 2 }}
                  >
                    <Box
                      component="img"
                      src={logo}
                      alt="FoodFusion logo"
                      sx={{
                        height: 28,
                        width: "auto",
                        display: "block",
                      }}
                    />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Menu
                    </Typography>
                  </Stack>

                  <List>
                    {navItems.map((item) => (
                      <ListItem key={item.to} disablePadding>
                        <ListItemButton
                          component={NavLink}
                          to={item.to}
                          style={linkButtonStyle}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    <ListItem disablePadding>
                      <ListItemButton component={NavLink} to="/cart">
                        <ListItemText primary="Cart" />
                      </ListItemButton>
                    </ListItem>
                  </List>

                  <Box sx={{ mt: 2 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      component={NavLink}
                      to="/SignIn"
                      sx={{ mb: 1 }}
                    >
                      Sign in
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      component={NavLink}
                      to="/SignUp"
                    >
                      Sign up
                    </Button>
                  </Box>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Har route ka content */}
      <Outlet />
    </>
  );
};

export default Layout;
