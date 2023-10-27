import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { Code, Group, Speed, SportsEsports, Star } from '@mui/icons-material';
import gsap from 'gsap';

const achievements = [
  { icon: <Star />, title: 'Collaboration Accelerator', description: 'Collaborated closely with Beyond Basic’s development team, contributing to a 25% acceleration in project timelines.' },
  { icon: <Code />, title: 'Educational Impact', description: 'Developed an educational website aiding students in mastering Data Structures, Algorithms, and the latest technologies, attracting over 10,000 monthly users.' },
  { icon: <Group />, title: 'User-Centric Visionary', description: 'Analyzed user needs and proposed product features, resulting in a 20% increase in user satisfaction.' },
  { icon: <Speed />, title: 'Efficiency Maestro', description: 'Successfully led the front-end team, improving team efficiency by 15% through streamlined processes and regular training programs.' },
  { icon: <SportsEsports />, title: 'Hackathon Enthusiast', description: 'Organized and facilitated Hackathons, attracting participation from 1000 students.' },
];

const AchievementsCarousel = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    // Calculate total animation width
    const totalWidth = achievements.length * 350; // Assuming each card is 350px wide

    // Animate from the right edge of the container to the left edge
    tl.fromTo('.cards-container', { x: totalWidth }, { x: -totalWidth, duration: 30, ease: 'linear' }); // Adjust the duration

    return () => {
      tl.kill(); // Kill the animation when component unmounts
    };
  }, []);

  return (
    <>
    <Typography variant="h4" style={{ fontWeight: 'bold', padding: '20px' }}>
       Achievements:
      </Typography> 
    <Container style={{ overflow: 'hidden' , backgroundImage: 'url("contactus.jpg")',borderRadius: '10px'}}>
      <Grid container spacing={3} justifyContent="center" style={{ backgroundImage: 'url("contactus.jpg")', marginBottom: '30px' }} className="cards-container">
        {achievements.map((achievement, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} style={{ minWidth: '350px',paddingTop:'50px' }}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '10px', backgroundColor: index % 2 === 0 ? '#FFD700' : '#FF6347' }}>
              <CardContent >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' ,paddingTop:'40px'}}>
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
    </>
  );
};

export default AchievementsCarousel;
