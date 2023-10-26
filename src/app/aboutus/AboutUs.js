import React from 'react'
import {Grid,Typography} from '@mui/material'
const AboutUs = () => {
  return (
    <>
    <Grid  style={{height:'500px',backgroundColor:'#EEEBFE',padding:'10px'}} container alignItems="center" justifyContent="center">

        <Grid xs={12} md={6} lg={6} item>
            <Typography variant='h4'>Learning the skills in right way </Typography>
            <Typography variant='h4'>with Beyond Basic</Typography>
        </Grid>
        <Grid xs={12} md={6} lg={6} item>
            123
        </Grid>
    </Grid>
    
    </>
  )
}

export default AboutUs