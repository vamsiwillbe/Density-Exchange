import React from 'react'
import {Grid,Card,Typography} from '@mui/material'
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Chip from '@mui/material/Chip';

const Contactus = () =>{
    return (
        <>
        <Typography variant="h4" style={{ fontWeight: 'bold', padding: '20px' }}>
        Contact us :
      </Typography>
        <Grid  style={{height:'500px',backgroundColor:'#EEEBFE',padding:'20px'}} container alignItems="center" justifyContent="center">
    
            <Grid xs={12} md={6} lg={6} item>
                <img src="logo.png" alt="logo" />
            </Grid>
            <Grid container xs={12} md={6} lg={6} item justifyContent="center" alignItems="center">
            <Typography variant="h4" style={{ fontWeight: 'bold', padding: '20px' }}>
                We Are Here For You 
            </Typography>
            <Typography variant="h6" style={{ fontWeight: 'bold', padding: '10px' }}>
                we can help. our team of experts is on hand to answer your questions. 
            </Typography>
            <>
            <Chip icon={<Icon className="fas fa-phone-alt" />} label="Call me" />
            </>


            </Grid>
        </Grid>
        
        </>
    )

}

export default Contactus