import React from 'react';
import { Box, Container, Typography, Link, Divider, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        marginTop: 'auto',
        backgroundColor: 'white',
        color: 'black',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Contact Section */}
          <Box sx={{ marginBottom: { xs: 4, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              KONTAKT
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Adress: Gustavslundsvägen 1, 922 32 Vindeln
            </Typography>
            <Typography variant="body2">
              Email:{' '}
              <Link href="mailto:andreas@traochtrad.se" color="inherit">
                info@neves.nu
              </Link>
            </Typography>
            <Typography variant="body2">Phone: 070 360 1997</Typography>
          </Box>

          {/* Social Media Section */}
          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: 2, marginTop: 1 }}>
              <IconButton
                href="https://www.instagram.com/andreasneves/"
                target="_blank"
                sx={{ color: 'secondary.main' }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/traochtrad"
                target="_blank"
                sx={{ color: 'secondary.main' }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: 'secondary.main' }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', marginY: 3 }} />

        {/* Bottom Text */}
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Neves. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" sx={{ marginTop: 1 }}>
          Designed & Built with ♡ by ACD
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
