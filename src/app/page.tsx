import Image from 'next/image'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import AboutUs from './aboutus/AboutUs'
import ServiceWeOffer from '../servicesweoffer/ServiceWeOffer'
import Contactus from './contactus/Contactus'

export default function Home() {
  return (
    <main >
      <AboutUs/>
      
      <ServiceWeOffer/>
      <Contactus/>
     
    </main>
  )
}
