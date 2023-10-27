import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import gsap from 'gsap';
import './About.css';

const AboutUs = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    // Define the animation
    tl.from('.text-fade-in', { opacity: 0, duration: 1, stagger: 0.5, color: 'black' });
    tl.from('.slide-in-text', { x: -100, opacity: 0, duration: 1, color: 'purple' }, '-=1');

  }, []);

  return (
    <>
      <Grid
        style={{ height: '500px', backgroundImage: 'url("contactus.jpg")', padding: '10px' }}
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid xs={12} md={6} lg={6} item>
          <div className="about-container">
            <Typography variant='h4' className="text-fade-in">Learning the skills in the right way</Typography>
            <Typography variant='h3' className="text-fade-in">
              with <span className="slide-in-text">Beyond Basic</span>
            </Typography>
          </div>
        </Grid>
        <Grid container xs={12} md={6} lg={6} item justifyContent="center" alignItems="center">
          <img src="About.png" alt="About Image" />
        </Grid>
      </Grid>
    </>
  );
}

export default AboutUs;
