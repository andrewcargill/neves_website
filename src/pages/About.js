import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import aboutImage from '../assets/media/images/general/about_hero.webp';
import banner from '../assets/media/images/general/about_banner.webp';

function About() {
  return (
    <Box paddingBottom={6}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          textAlign: 'center',
        }}
      >
     
     
           <Typography variant="h2" margin={2} sx={{ fontWeight: 700 }} backgroundColor='rgba(0, 0, 0, 0.5)' color='white'>
          Om Neves Arts & Crafts
        </Typography>
      </Box>

      {/* Company Overview Section */}
      <Container maxWidth="lg" sx={{ marginY: 8 }}>
        <Grid container spacing={6} alignItems="center">
          
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Vår Historia
            </Typography>
            <Typography variant="body1" paragraph>
              Andreas Neves startade enskild firma 2013 i Västerbotten och har tillsammans med sin fru Rakel.
              Vår filosofi är enkel – Andreas hjälper våra kunder med trädfällning, och vi återanvänder materialet till vackra, handgjorda verk.
            </Typography>
            <Typography variant="body1" paragraph>
              Att arbeta med trä har alltid varit en del av Andreas liv. Från tidiga dagar inom trähantverk och snickeri har hans passion utvecklats mot storskaliga skulpturer.
              Tillsammans med Rakel skapar vi alla typer av skulpturer baserade på kundförfrågningar, ofta med fokus på stora, utmanande projekt som kräver djup materialkunskap och tillgång till råmaterial.
            </Typography>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={aboutImage}
                alt="Trä och Träd team"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Expertise and Credentials Section */}
      <Container maxWidth="lg" sx={{ marginBottom: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                boxShadow: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  Hantverk & Expertis
                </Typography>
                <Typography variant="body1" paragraph>
                  Våra kunder behöver ofta hjälp med komplex trädfällning som kräver rätt expertis och utrustning för att garantera säkerhet för människor och byggnader.
                  Andreas har motorsågskörkort ABCE och är certifierad instruktör genom Säker Skog.
                </Typography>
                <Typography variant="body1">
                  Vi erbjuder också trädfällningstjänster, workshops och skräddarsydda skulpturer, där varje projekt bär spår av genuint hantverk.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                boxShadow: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  Certifierade och Försäkrade
                </Typography>
                <Typography variant="body1" paragraph>
                  Trä och Träd är F-skatteregistrerade och har ansvarsförsäkring genom Länsförsäkringar, vilket ger våra kunder trygghet.
                </Typography>
                <Typography variant="body1">
                  Vi är engagerade i professionalism och ser till att varje uppdrag slutförs med noggrannhet, säkerhet och respekt för naturen.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          textAlign: 'center',
          paddingY: 6,
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom color='secondary.main'>
          Kontakta oss
        </Typography>
        <Typography variant="body1" paragraph>
          Oavsett om du behöver trädfällning, skräddarsydda skulpturer eller workshops, är vi redo att hjälpa dig.
        </Typography>
        <Typography variant="h5" color='secondary.main'>
          Ring oss på 070 360 1997 eller maila oss på{' '}
          <a href="mailto:andreas@traochtrad.se" style={{ color: 'black', textDecoration: 'none' }}>
            andreas@neves.se
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
