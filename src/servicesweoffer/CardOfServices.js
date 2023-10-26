import React, { useEffect, useRef, useState } from 'react';
import { Grid, Card, Typography } from '@mui/material';
import gsap from 'gsap';

const CardOfServices = ({ CardsData }) => {
  const cardRefs = useRef([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const animateCards = () => {
    const tl = gsap.timeline({ delay: 0.5 });

    cardRefs.current.forEach((card, index) => {
      tl.from(card, {
        opacity: 1,
        y: 30,
        rotation: 360, // Rotate 360 degrees
        duration: 0.5,
        ease: 'power10.out',
        delay: index * 0.2,
        onComplete: () => {
          if (index === CardsData.length - 1) {
            card.style.pointerEvents = 'auto';
          }
        },
      });

      const headingChars = card.querySelectorAll('.heading-char');
      gsap.fromTo(
        headingChars,
        {
          opacity: 1,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power4.out',
          onComplete: () => {
            card.querySelector('.content').style.opacity = 1;
          },
        }
      );
    });
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  useEffect(() => {
    animateCards();
  }, []);

  return (
    <Grid container gap={2}>
      {CardsData.map((item, index) => {
        const cardRef = (el) => (cardRefs.current[index] = el);

        const headingChars = item?.heading.split('').map((char, i) => (
          <span className="heading-char" key={i}>{char}</span>
        ));

        return (
          <Card
            key={index}
            style={{
              width: '300px',
              height: '250px',
              padding: '20px',
              backgroundColor: selectedCard === index ? '#8A2BE2' : index % 2 === 0 ? '#FFEFD5' : '#EEEBFE',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '20px',
              cursor: 'pointer',
            }}
            ref={cardRef}
            onClick={() => handleCardClick(index)}
          >
            <Typography variant='h5' style={{ fontWeight: 'bold' }} className="heading">
              {headingChars}
            </Typography>
            <Typography variant='h6' className="content" >
              {item?.content}
            </Typography>
          </Card>
        );
      })}
    </Grid>
  );
};

export default CardOfServices;
