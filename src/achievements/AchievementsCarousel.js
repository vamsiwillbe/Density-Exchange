import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { Star, ThumbUp, EmojiEvents, SportsSoccer, EmojiPeople } from '@mui/icons-material';
import gsap from 'gsap';

const achievements = [
  { icon: <Star />, title: 'Star Achiever', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: <ThumbUp />, title: 'Thumb Up Champion', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: <EmojiEvents />, title: 'Event Expert', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  { icon: <SportsSoccer />, title: 'Sports Enthusiast', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
  { icon: <EmojiPeople />, title: 'Community Leader', description: 'Excepteur sint occaecat cupidatat non proident.' },
];

const AchievementsCarousel = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    // Calculate total animation width
    const totalWidth = achievements.length * 350; // Assuming each card is 350px wide

    // Animate from the right edge of the container to the left edge
    tl.fromTo('.cards-container', { x: totalWidth }, { x: -totalWidth, duration: 10, ease: 'linear' });

    return () => {
      tl.kill(); // Kill the animation when component unmounts
    };
  }, []);

  return (
    <Container maxWidth="md" style={{ overflow: 'hidden' }}>
      <Grid container spacing={3} justifyContent="center" style={{ marginBottom: '30px' }} className="cards-container">
        {achievements.map((achievement, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '10px', backgroundColor: index % 2 === 0 ? '#FFD700' : '#FF6347' }}>
              <CardContent>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                  {achievement.icon}
                </div>
                <Typography variant="h5" component="div" textAlign="center" gutterBottom>
                  {achievement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {achievement.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AchievementsCarousel;
