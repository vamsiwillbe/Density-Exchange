import React from 'react'


import CardOfServices from './CardOfServices'
import { Typography } from '@mui/material'

 const ServiceWeOffer = () => {
    const CardsData=[
        {
            heading:'Mentorship',
            content:'student is assigned with top tech  mentors'
        },
        {
            heading:'SDE sheet',
            content:'Top SDE sheets are provided to practice interview questions '
        },
        {
            heading:'Progress tracking',
            content:'student progress assisted in a systematic manner'
        },
        {
            heading:'opportunity notification ',
            content:'student can notified all the opportunities and events'
        },
        {
            heading:'Online IDEs ',
            content:'we can compile and run programs easily'
        },
    ]
  return (
    <>
        <Typography >srvices we Offeer</Typography>
        <CardOfServices CardsData={CardsData}/>
    </>
  )
}

export default ServiceWeOffer
