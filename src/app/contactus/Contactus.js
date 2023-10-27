import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import gsap from 'gsap';

const Contactus = () => {
  const [buttonColor, setButtonColor] = useState('grey'); // Initially set to grey

  const handleButtonClick = () => {
    // Change the button color to blue when clicked
    setButtonColor('blue');

    // Add your click handling logic here
  };

  useEffect(() => {
    gsap.from('.text-fade-in', {
      x: -100, // Initial position (from left)
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <>
      <Typography variant="h4" style={{ fontWeight: 'bold', padding: '20px' }}>
        Contact us:
      </Typography>
      <Grid
        style={{ height: '500px', backgroundImage: 'url("contactus.jpg")', padding: '20px', borderRadius: '30px' }}
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid xs={12} md={6} lg={6} item>
          <img src="logo.png" alt="logo" />
        </Grid>
        <Grid container xs={12} md={6} lg={6} item justifyContent="center" alignItems="center">
          <Typography variant="h4" className="text-fade-in" style={{ fontWeight: 'bold', padding: '20px' }}>
            We Are Here For You
          </Typography>
          <Typography variant="h6" style={{ fontWeight: 'bold', padding: '10px' }}>
            We can help. Our team of experts is on hand to answer your questions.
          </Typography>
          <Grid container item justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              style={{ backgroundColor: buttonColor }} // Apply the button color style
              onClick={handleButtonClick}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contactus;