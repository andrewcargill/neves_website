import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import fellingImage from "../assets/media/images/trees/tree_felling.webp";
import treeHeader from "../assets/media/images/trees/tree_header.webp";
import { Phone, LocationOn } from "@mui/icons-material";
import { Helmet } from "react-helmet";

function Trees() {
  return (
    <>
      <Helmet>
        <title>Trädfällning i Västerbotten – Neves Art & Craft</title>
        <meta
          name="description"
          content="Certifierad och försäkrad trädfällning i Västerbotten. Andreas Neves erbjuder säker, prisvärd och miljömedveten trädfällning för privatpersoner och företag."
        />
        <meta
          property="og:title"
          content="Trädfällning i Västerbotten – Neves Art & Craft"
        />
        <meta
          property="og:description"
          content="Professionella trädfällningstjänster av Andreas Neves – certifierad instruktör med fokus på säkerhet, precision och hållbarhet. RUT-avdrag för privatpersoner."
        />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Trädfällning",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Neves Art & Craft",
          "areaServed": "Västerbotten",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vindeln",
            "addressRegion": "Västerbotten",
            "postalCode": "922 32",
            "addressCountry": "SE"
          },
          "telephone": "+46 70 360 1997",
          "url": "https://neves.nu/tradfallning"
        },
        "description": "Certifierad och försäkrad trädfällning i Västerbotten. Vi erbjuder trädfällning med RUT-avdrag för privatpersoner."
      }
    `}
        </script>
        <meta property="og:image" content="https://neves.se/siteImage.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neves.se/tradfallning" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Box>
        <Box
          className="header-fade-in"
          sx={{
            backgroundImage: `url(${treeHeader})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            margin={2}
            sx={{ fontSize: "2.7rem", fontWeight: 700 }}
            backgroundColor="rgba(0, 0, 0, 0.5)"
            color="white"
          >
            Professionella trädfällningstjänster
          </Typography>
        </Box>

        {/* Introduction Section */}
        <Container
          className="fade-in-3"
          maxWidth="md"
          sx={{ marginY: 8, textAlign: "center" }}
        >
          <Typography variant="h4" gutterBottom>
            Säker, pålitlig & prisvärd
          </Typography>
          <Typography variant="body1" paragraph sx={{ marginBottom: 4 }}>
            Andreas Neves erbjuder tjänster av avancerad trädfällning för
            privatpersoner, företag och kommuner i Västerbotten. Vårt team ser
            till att varje uppdrag utförs med precision, säkerhet och minimal
            miljöpåverkan. Som privatperson har du 50% rabatt på trädfällning
            efter RUT-avdrag.
          </Typography>
        </Container>

        {/* Services Info Section */}
        <Container maxWidth="lg" className="fade-in-4">
          <Grid container spacing={6} justifyContent="center" mb={8}>
            <Grid item xs={12} md={10}>
              <Card
                sx={{
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <CardMedia
                  component="img"
                  image={fellingImage}
                  alt="Tjänst för trädfällning"
                  sx={{ height: { xs: 300, md: "auto" }, width: { md: "50%" } }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" gutterBottom>
                    Varför välja oss?
                  </Typography>
                  <Typography variant="body1" paragraph>
                    - Fullt försäkrade och certifierade proffs <br />-
                    Specialiserade på precisionsfällning och bortforsling <br />
                    - Akuta trädfällningstjänster <br />- Expertis i att arbeta
                    nära byggnader och svåra träd
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Oavsett om du behöver fälla ett enda träd eller flera,
                    garanterar vi säker och effektiv service.
                  </Typography>
                  <Box sx={{ marginTop: 4 }}>
                    <Typography variant="h6">
                      <LocationOn
                        sx={{ verticalAlign: "middle", marginRight: 1 }}
                      />
                      Verksamma i Västerbotten och kringliggande områden
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginTop: 2,
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Phone sx={{ verticalAlign: "middle", marginRight: 1 }} />
                      070 360 1997
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Trees;
