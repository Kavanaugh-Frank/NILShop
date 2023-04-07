import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { Link } from 'react-router-dom';

const pages = ['Products', 'Player-Info'];

const navButtons = {
  textDecoration : "none",
  color : "gray"
}



function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    // background color fo the entire navbar
    <AppBar style={{ background: '#2E3B55'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Picture for the Logo */}
          {/* Larger screens */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'Green',
              textDecoration: 'none',
            }}
          >

            Your Name
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* this is the dropdown menu when the hamburger icon is clicked */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* Home Button (Horizontal) */}
              <MenuItem key="Home" onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link style = {navButtons} to={`/`}>Home</Link></Typography>
              </MenuItem>
              {/* the pages besides Home and Cart */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link style = {navButtons} to={`/${page}`}>{page}</Link></Typography>
                </MenuItem>
              ))}
              {/* View Cart button (Horizontal) */}
              <MenuItem><button className="snipcart-checkout">View Cart</button></MenuItem>

            </Menu>
          </Box>
          {/* icon for the logo */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* This is for smaller screens Logo */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'Green',
              textDecoration: 'none',
            }}
          >
            {/* words for the logo */}
            Your Name
          </Typography>
          {/* the dropdown box for smaller screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* Home button (Vertical) */}
              <Button                
                key="Home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link key="homeDropdown" style = {navButtons}  to={`/`}>Home</Link>
              </Button>
            {/* the different pages available besides the Home and Cart */}
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                // color of the tabs (Pricing, Products, Blog)
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style = {navButtons}  to={`/${page}`}>{page}</Link>
              </Button>
            ))}
            {/* Cart button (Vertical) */}
            <Button                
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link key="homeNormal" style = {navButtons} className="snipcart-checkout">View Cart</Link>
            </Button>
            
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;