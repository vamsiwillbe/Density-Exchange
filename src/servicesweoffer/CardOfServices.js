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
            <Card style={{width:'300px',height:'200px',padding:'10px',backgroundColor:index%2==0?'#FFEFD5':'#EEEBFE'}}>
            <Typography variant='h5'>{item?.heading}</Typography>
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