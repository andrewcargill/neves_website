import React from 'react';
import { Typography, Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import sculptureImage1 from '../../assets/media/images/sculp2.png';
import sculptureImage3 from '../../assets/media/images/sculp4.png';
import sculptureImage4 from '../../assets/media/images/sculp5.png';

function SculptureHeader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ width: '100%' }}>
    {/* <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{ marginBottom: 4, fontWeight: 700 }}
    >
      Sculptures
    </Typography> */}

    {/* Responsive Layout - Conditional Rendering */}
    {isMobile ? (
      // Layout for sm and below (2x2 Grid)
      <Grid container spacing={0} border={5} borderColor={'secondary.main'}>


<Grid
          item
          xs={6}
          sx={{
            border: 'solid 2px',
            borderColor: 'secondary.main',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'secondary.main',
            padding: 2,
       
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '0.1rem',
              textTransform: 'uppercase',
              fontSize: 'clamp(0.3rem, 5vw, 3rem)',
              color: 'white',
              whiteSpace: 'pre-line',
            }}
          >
            Trä{'\n'}skulpturer
          </Typography>
        </Grid>
        
        <Grid item xs={6}>
          <Box
            component="img"
            src={sculptureImage1}
            alt="Sculpture 1"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid>
        

        <Grid item xs={6}>
          <Box
            component="img"
            src={sculptureImage3}
            alt="Sculpture 3"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <Box
            component="img"
            src={sculptureImage4}
            alt="Sculpture 4"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid>
      </Grid>
    ) : (
      // Layout for md and above (4 items in a row)
      <Grid
        container
        spacing={0}
        border={5} 
        borderColor={'secondary.main'}
        sx={{
          flexWrap: 'nowrap',
          alignItems: 'stretch',
        }}
      >
        <Grid item md={3}>
          <Box
            component="img"
            src={sculptureImage1}
            alt="Sculpture 1"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid>

        <Grid
          item
          md={3}
          sx={{
            border: 'solid 2px',
            borderColor: 'secondary.main',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        
            padding: 2,
            backgroundColor: 'secondary.main',
  
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '0.1rem',
              textTransform: 'uppercase',
              fontSize: 'clamp(0.1rem, 2.6vw, 2.2rem)',  
              whiteSpace: 'pre-line',
              color: 'white',
            }}
          >
            Trä{'\n'}skulpturer
          </Typography>
        </Grid>

        <Grid item md={3}>
          <Box
            component="img"
            src={sculptureImage3}
            alt="Sculpture 3"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid>

        <Grid item md={3}>
          <Box
            component="img"
            src={sculptureImage4}
            alt="Sculpture 4"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid>
      </Grid>
    )}


  </Box>
  );
}

export default SculptureHeader;
