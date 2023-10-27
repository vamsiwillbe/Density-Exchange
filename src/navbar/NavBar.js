
// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#e0aae5' }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="beyonbasic.png" alt="Logo" style={{ height: '50px' }} />
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
