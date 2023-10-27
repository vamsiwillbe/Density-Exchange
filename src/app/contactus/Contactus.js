import React from 'react';
import { Grid, Typography } from '@mui/material';

const Contactus = () => {
  return (
    <>
      <Typography variant="h4" style={{ fontWeight: 'bold', padding: '20px' }}>
        Contact us :
      </Typography>
      <Grid style={{ height: '500px', backgroundImage: 'url("contactus.jpg")', padding: '20px' ,borderRadius: '30px',}} container alignItems="center" justifyContent="center">
        <Grid xs={12} md={6} lg={6} item>
          <img src="logo.png" alt="logo" />
        </Grid>
        <Grid container xs={12} md={6} lg={6} item justifyContent="center" alignItems="center">
          <Typography variant="h4" style={{ fontWeight: 'bold', padding: '20px' }}>
            We Are Here For You
          </Typography>
          <Typography variant="h6" style={{ fontWeight: 'bold', padding: '10px' }}>
            We can help. Our team of experts is on hand to answer your questions.
          </Typography>
          
        </Grid>
      </Grid>
    </>
  );
};

export default Contactus;
