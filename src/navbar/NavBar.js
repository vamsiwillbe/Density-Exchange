// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="/path_to_your_logo.png" alt="Logo" style={{ height: '50px' }} />
        </Typography>
        
        {/* Menu Items */}
        <Button color="inherit">About Us</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
