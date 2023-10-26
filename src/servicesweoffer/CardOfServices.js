import React from 'react'
import {Grid,Card,Typography} from '@mui/material'
const CardOfServices = ({CardsData}) => {

    const heading="Anil";
  return (
    
    <>
    <Grid container gap={2} padding="5px">
    {
    CardsData.map((item ,index)=>{
        return (
          <Card
          style={{
            width: '350px', // Increase the width to your preferred size
            height: '250px', // Increase the height to your preferred size
            padding: '10px',
            backgroundColor: index % 2 === 0 ? '#FFEFD5' : '#EEEBFE',
          }}
        >
            <Typography variant='h5' style={{ fontWeight: 'bold' }}>{item?.heading}</Typography>
            <Typography variant='h6'>{item?.content}</Typography>
            
            </Card>
            
        )
    })
    
}
</Grid>
   
    </>
  )
}

export default CardOfServices