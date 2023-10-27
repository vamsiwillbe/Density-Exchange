
// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#D9EBF5' }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="beyonbasic.png" alt="Logo" style={{ height: '50px' }} />
        </Typography>
        
        {/* Menu Items */}
        <Button sx={{color:'black'}} color="inherit">About Us</Button>
        <Button   sx={{color:'black'}} color="inherit">Services</Button>
        <Button  sx={{color:'black'}} color="inherit">Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
