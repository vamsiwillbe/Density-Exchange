import React, { useEffect} from 'react';

import { Grid, Card, Typography } from '@mui/material';
import gsap from 'gsap';

const CardOfServices = ({ CardsData }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // The following code will only run on the client side
      const cardRefs = [];

      const animateCards = () => {
        const tl = gsap.timeline({ delay: 0.5 });

        cardRefs.forEach((card, index) => {
          tl.from(card, {
            
            y: 30,
            duration: 0.5,
            ease: 'power3.out',
            delay: index * 0.2,
          });
        });
      };

      animateCards();
    }
  }, []); // Empty dependency array to run the effect only once on component mount

  // The rest of your component code remains the same
  return (
    <Grid container gap={2}>
      {CardsData.map((item, index) => {
        const cardRef = (el) => (cardRefs[index] = el);

        return (
          <Card
            key={index}
            style={{
              // ... (rest of your Card component styling)
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
