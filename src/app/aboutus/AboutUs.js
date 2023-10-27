import React from 'react'
import {Grid,Typography} from '@mui/material'
import './About.css';
const AboutUs = () => {
  return (
    <>
    <Grid  style={{height:'500px',backgroundImage: 'url("stepper.avif")',padding:'10px'}} container alignItems="center" justifyContent="center">

        <Grid xs={12} md={6} lg={6} item>
        <div className="about-container">
        <Typography variant='h4' className="text-fade-in">Learning the skills in the right way</Typography>
        <Typography variant='h3' className="text-fade-in">
          with <span className="slide-in-text">Beyond Basic</span>
        </Typography>
      </div>
        </Grid>
        <Grid container xs={12} md={6} lg={6} item justifyContent="center" alignItems="center">
          <img src="About.png" alt="About Image"  />
        </Grid>
    </Grid>
    
    </>
  )
}

export default AboutUs