import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Typography, Button, Grid } from '@mui/material';
import gsap from 'gsap';

const testimonials = [
  'Testimonial 1',
  'Testimonial 2',
  'Testimonial 3',
  'Testimonial 4'
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
    <Grid container>
      <Grid item xs={6} style={{ padding: '20px' }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {testimonials.map((testimonial, index) => (
            <Step key={index}>
              <StepLabel>{`Step ${index + 1}`}</StepLabel>
              <Typography id={`testimonial-${index}`} variant="body2" color="textSecondary" component="div" style={{ opacity: index === 0 ? 1 : 0, transition: 'opacity 0.5s' }}>
                {testimonial}
              </Typography>
            </Step>
          ))}
        </Stepper>
        <div>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </div>
      </Grid>
      <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="happy_people.jpg" // Replace with your image path
          alt="Happy People"
          style={{
            width: '80%',
            transform: `rotate(${activeStep * 360}deg)`,
            transition: 'transform 0.5s'
          }}
        />
      </Grid>
    </Grid>
  );
};

export default TestimonialStepper;
