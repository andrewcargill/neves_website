import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import sculptureImage from "../../assets/media/images/general/sculpture_hero.webp";

function ArtistVision() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 6, marginBottom: 8 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6} className="fade-in-1">
          <Typography
            variant="h5"
            align="center"
            sx={{
              marginBottom: 4,
              maxWidth: "900px",
              marginX: "auto",
              color: "rgba(0, 0, 0, 0.7)",
            }}
          >
            Unika trädskulpturer, skapade för att inspirera och lyfta offentliga
            och företagsmiljöer.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              maxWidth: "800px",
              marginX: "auto",
              marginBottom: 6,
              lineHeight: 1.8,
            }}
          >
            Våra skulpturer förenar traditionella hantverkstekniker med modern
            design. Varje verk berättar en historia, djupt rotad i skönheten hos
            naturligt trä. Vi strävar efter att skapa tidlösa verk som ger
            karaktär åt offentliga platser, företagskontor och kulturella
            projekt.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} className="fade-in-3">
          <Box
            component="img"
            src={sculptureImage}
            alt="Artist at work"
            sx={{
              width: "100%",
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ArtistVision;
