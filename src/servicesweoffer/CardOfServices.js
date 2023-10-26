import React, { useEffect, useRef } from 'react';
import { Grid, Card, Typography } from '@mui/material';
import gsap from 'gsap';

const CardOfServices = ({ CardsData }) => {
  const cardRefs = useRef([]); // Create a ref to store card elements

  // Define the animation function
  const animateCards = () => {
    const tl = gsap.timeline({ delay: 0.5 }); // Create a GSAP timeline with a delay

    // Loop through card elements and apply animations
    cardRefs.current.forEach((card, index) => {
      tl.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: 'power3.out',
        delay: index * 0.2, // Stagger the animations
      });
    });
  };

  useEffect(() => {
    animateCards(); // Trigger animations on component mount
  }, []);

  return (
    <Grid container gap={2}>
      {CardsData.map((item, index) => {
        const cardRef = (el) => (cardRefs.current[index] = el); // Store the card element in the ref

        return (
          <Card
            key={index}
            style={{
              width: '300px',
              height: '250px',
              padding: '20px',
              backgroundColor: index % 2 === 0 ? '#FFEFD5' : '#EEEBFE',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '20px',
            }}
            ref={cardRef}
          >
            <Typography variant='h5' style={{ fontWeight: 'bold' }}>
              {item?.heading}
            </Typography>
            <Typography variant='h6'>{item?.content}</Typography>
          </Card>
        );
      })}
    </Grid>
  );
};

export default CardOfServices;
