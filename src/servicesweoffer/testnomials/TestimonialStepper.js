import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Typography, Button, Grid } from '@mui/material';
import gsap from 'gsap';

const testimonials = [
  'The transformation from brute force to optimal methods has been remarkable. It made a significant impact on our efficiency.',
  'These are the best resources for honing your skills. They have been a game-changer for my learning journey',
  'The progress tracking here is incredibly useful. It has helped me stay on the right path and achieve my goals',
  'The lightning-fast updates on opportunities are a real game-changer. It keeps me ahead of the curve and helps me make informed decisions'
];

const stepLabels = [
  'Optimization',     // Updated Step 1 label
  'Resourceful',      // Updated Step 2 label
  'TrackingPro',     // Updated Step 3 label
  'Opportunity Updates'   // Updated Step 4 label
];

const stepImages = [
  'undraw_Happy_announcement_re_tsm0.png',
  'undraw_Progress_overview_re_tvcl.png',
  'undraw_Educator_re_ju47.png',
  'undraw_Adventure_re_ncqp.png'
];

const TestimonialStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < testimonials.length - 1) {
      gsap.fromTo(`#testimonial-${activeStep}`, { opacity: 1 }, { opacity: 1, duration: 0.5 });
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      gsap.fromTo(`#testimonial-${activeStep}`, { opacity: 1 }, { opacity: 1, duration: 0.5 });
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <>
    <Typography variant="h4" style={{ fontWeight: 'bold', padding: '20px' }}>
    People say about services:
    </Typography>

    <Grid container style={{ backgroundImage: 'url("contactus.jpg")', backgroundSize: 'cover', borderRadius: '30px' }}>
      <Grid item xs={6} style={{ padding: '20px' }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {testimonials.map((testimonial, index) => (
            <Step key={index}>
              <StepLabel style={{ color: 'black' }}> {/* Apply in-line CSS to make the tick symbol blue */}
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                  {stepLabels[index]}
                </Typography>
              </StepLabel>
              <Typography id={`testimonial-${index}`} variant="body2" color="textSecondary" component="div" style={{ opacity: index === 0 ? 1 : 0, transition: 'opacity 0.5s' }}>
                {/* Make the testimonials bold */}
                <b>{testimonial}</b>
              </Typography>
            </Step>
          ))}
        </Stepper>
        <div>
          <Button sx={{color:'black'}}disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button sx={{color:'black'}}onClick={handleNext}>
            Next
          </Button>
        </div>
      </Grid>
      <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={stepImages[activeStep]} // Display different images for each step
          alt={stepLabels[activeStep]} // Use step label as alt text
          style={{
            width: '80%',
            transform: `rotate(${activeStep * 360}deg)`,
            transition: 'transform 0.5s'
          }}
        />
      </Grid>
    </Grid>
    </>
  );
};

export default TestimonialStepper;
