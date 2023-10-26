import React from 'react';
import { Grid, Card, Typography } from '@mui/material';

const CardOfServices = ({ CardsData }) => {
  return (
    <>
      <Grid container gap={2}>
        {CardsData.map((item, index) => {
          return (
            <Card
              style={{
                width: '300px',
                height: '250px',
                padding: '20px',
                backgroundColor: index % 2 === 0 ? '#FFEFD5' : '#EEEBFE',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
                margin: '20px',
              }}
            >
              <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                {item?.heading}
              </Typography>
              <Typography variant='h6'>{item?.content}</Typography>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};

export default CardOfServices;
