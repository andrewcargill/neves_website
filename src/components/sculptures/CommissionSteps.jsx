import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Paper } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const stepsData = [
  {
    title: '1. Konsultation',
    description: 'Diskutera projektmål, budget och idéer.',
    icon: <HandshakeIcon sx={{ fontSize: 56 }} />,
  },
  {
    title: '2. Design',
    description: 'Ta emot skisser eller 3D-modeller av skulpturen.',
    icon: <DesignServicesIcon sx={{ fontSize: 56 }} />,
  },
  {
    title: '3. Tillverkning',
    description: 'Produktion påbörjas med hållbara material.',
    icon: <ConstructionIcon sx={{ fontSize: 56 }} />,
  },
  {
    title: '4. Installation',
    description: 'Levereras och installeras på den valda platsen.',
    icon: <LocalShippingIcon sx={{ fontSize: 56 }} />,
  },
  
];

function CommissionSteps() {
  return (
    <Paper
      elevation={6}
      sx={{
        padding: 6,
        borderRadius: 4,
        backgroundColor: 'secondary.light',
        marginTop: 6,
      }}
    >
      <Typography variant="h4" align="center" sx={{ marginBottom: 4, fontWeight: 700 }}>
      Så här beställer du en skulptur

</Typography>
      <Typography align="center" sx={{ marginBottom: 6, maxWidth: 700, marginX: 'auto' }}>
      Från den första idén till installationen samarbetar vi nära med våra kunder för att skapa bestående konstverk.      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {stepsData.map((step, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card
              sx={{
                boxShadow: 4,
                borderRadius: 3,
                height: '100%',
                textAlign: 'center',
                paddingTop: 5,
                paddingBottom: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  background: 'white',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                  color: 'secondary.main',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto 1.5rem',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {step.icon}
              </Box>

              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ marginBottom: 1, fontWeight: 'bold' }}
                >
                  {step.title}
                </Typography>
                <Typography>{step.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default CommissionSteps;
