import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
import forestryImage from "../assets/media/images/education/ed_forestry.webp";
import workshopImage from "../assets/media/images/education/web_education.webp";
import heroImage from "../assets/media/images/education/ed_hero_image.webp";
import { Phone, Email, School } from "@mui/icons-material";


function Education() {
  return (
    <Box mb={8}>
      {/* Header */}
      <Box
        className="header-fade-in"
        sx={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      ></Box>

      {/* Instructor Section */}
      <Container
        className="fade-in-2"
        maxWidth="md"
        sx={{ marginY: 8, textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          Kurser i skogsbruk och finsnickeri
        </Typography>
        <Typography variant="body1" paragraph sx={{ marginBottom: 4 }}>
          Med många års erfarenhet av avancerad trädfällning och
          hantverksutbildning erbjuder jag certifierade kurser och workshops för
          både nybörjare och yrkesverksamma.
        </Typography>
      </Container>

      {/* Course Section */}
      <Container className="fade-in-3" maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          {/* Chainsaw Education */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image={forestryImage}
                alt="Skogsbrukskurser"
                sx={{ height: 300 }}
              />
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Motorsågskörkort
                </Typography>
                <Typography variant="body1" paragraph>
                  - Motorsågskörkort A (Grundläggande motorsågshantering) <br />
                  - Motorsågskörkort B (Grundkurs trädfällning) <br />
                  <br />
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  Certifierad instruktör och examinatör genom Säker Skog med
                  fokus på säkerhet.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Guest Lectures */}
          <Grid item xs={12} className="fade-in-4" md={6}>
            <Card
              sx={{
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image={workshopImage}
                alt="Gästföreläsare"
                sx={{ height: 300 }}
              />
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Workshops & Gästföreläsningar
                </Typography>
                <Typography variant="body1" paragraph>
                  Tillgänglig som gästföreläsare för kurser och workshops inom
                  trähantverk på skolor, högskolor och privata evenemang.
                  Andreas är kursansvarig på Slöjd:Möbelsnickare vid Vindelns
                  Folkhögskola.
                </Typography>
                <Typography variant="body2">
                  Låt oss samarbeta för att utbilda nästa generation
                  trähantverkare.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Instuctor Section */}
      <Container
        className="fade-in-4"
        maxWidth="md"
        sx={{ marginTop: 8, textAlign: "center" }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}
        >
          <School sx={{ fontSize: "3rem", color: "secondary.main" }} />
        </Box>
        <Typography variant="h4" gutterBottom color="secondary.main">
          Om Instruktören
        </Typography>
        <Typography variant="body1" paragraph>
          Med över ett decennium av erfarenhet inom trädfällning och finsnickeri
          är jag för närvarande kursansvarig på kursen Slöjd:Möbelsninckare vid
          Vindelns Folkhögskola. Jag har en passion för undervisning, möten med
          andra människor och att arbeta med hållbara material.
        </Typography>
      </Container>

      {/* Contact Section */}
      <Box
        sx={{
          textAlign: "center",
          paddingY: 6,
          marginTop: 8,
          backgroundColor: "primary.main",
          color: "white",
        }}
      >
        <Typography variant="h4" gutterBottom color="secondary.main">
          Intresserad av kurser eller föreläsningar?
        </Typography>
        <Typography variant="body1" paragraph>
          Kontakta mig via telefon eller e-post för kursplaner och
          tillgänglighet.
        </Typography>
        <Typography
          variant="h5"
          color="secondary.main"
          sx={{
            fontWeight: "bold",
            marginTop: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Phone sx={{ marginRight: 1 }} /> 070 360 1997
        </Typography>
        <Typography
          color="secondary.main"
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 1,
          }}
        >
          <Email sx={{ marginRight: 1 }} />
          <Link href="mailto:andreas@traochtrad.se" color="inherit">
            andreas@traochtrad.se
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Education;
