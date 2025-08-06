import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import sculptureImage1 from '../../assets/media/images/sculp2.png';
import sculptureImage3 from '../../assets/media/images/sculp4.png';
import sculptureImage4 from '../../assets/media/images/sculp5.png';

const sculptureData = [
  {
    img: sculptureImage1,
    title: 'Public Installation - City Park',
    description: 'A hand-carved wooden centerpiece for the new city park, blending modern design with natural forms.',
  },
  {
    img: sculptureImage3,
    title: 'Corporate Office Feature',
    description: 'Commissioned by a global brand to bring natural elegance to their headquarters lobby.',
  },
  {
    img: sculptureImage4,
    title: 'Museum Exhibit',
    description: 'A one-of-a-kind sculpture capturing the essence of Scandinavian folklore, now part of a traveling museum exhibit.',
  },
];

function SculptureShowcase() {
  return (
    <Grid container spacing={4}>
      {sculptureData.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, height: '100%' }}>
            <CardMedia
              component="img"
              height="300"
              image={item.img}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6" align="center" sx={{ marginBottom: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body1" align="center">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default SculptureShowcase;
