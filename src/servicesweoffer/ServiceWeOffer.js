import React from 'react'

import CardOfServices from './CardOfServices'

 const ServiceWeOffer = () => {
    const CardsData=[
        {
            heading:'Anil',
            content:'anillllllllll'
        },
        {
            heading:'prakash',
            content:'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'
        },
        {
            heading:'prakash',
            content:'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'
        }
    ]
  return (
    <div>

        <CardOfServices CardsData={CardsData}/>
    </div>
  )
}

export default ServiceWeOffer
