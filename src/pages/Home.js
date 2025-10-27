import React, { useState } from "react";
import { Typography, Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/media/images/general/home.webp";
import Helmet from "react-helmet";

function Home() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <>
      <Helmet>
        <title>Neves Art & Craft – Skapandet av naturens skönhet</title>
        <meta
          name="description"
          content="På Neves Art & Craft förvandlar vi naturens finaste material till tidlösa konstverk och mästerligt hantverk."
        />
        <meta
          property="og:title"
          content="Neves Art & Craft – Skapandet av naturens skönhet"
        />
        <meta
          property="og:description"
          content="Upplev konsten i trä och sten. Neves Art & Craft skapar tidlösa skulpturer inspirerade av naturen."
        />
        <meta property="og:image" content="https://neves.se/siteImage.jpg" />
      </Helmet>

      <Box
        mb={8}
        sx={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image with Parallax Effect */}
        <Box
          sx={{
            position: "absolute",
            top: `${offset.y}px`,
            left: `${offset.x}px`,
            width: "110%",
            height: "110%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.8)",
            zIndex: -1,
            transition: "transform 0.1s ease-out",
          }}
        />

        {/* Content (Centered) */}
        <Container maxWidth="md">
          <Typography
            className="fade-in-1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "white",
              textShadow: "2px 4px 6px rgba(0, 0, 0, 0.6)",
            }}
          >
            Skapandet av naturens skönhet
          </Typography>
          <Typography
            className="fade-in-2"
            variant="h6"
            align="center"
            paragraph
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "700px",
              margin: "0 auto 2rem",
              textShadow: "1px 2px 4px rgba(0, 0, 0, 0.6)",
            }}
          >
            På Neves Art & Craft förvandlar vi naturens finaste material till
            tidlösa konstverk och mästerligt hantverk.
          </Typography>
          <Box
            textAlign="center"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              marginTop: 4,
            }}
          >
            <Button
              className="fade-in-3"
              size="large"
              component={Link}
              to="/sculptures"
              variant="contained"
              color="secondary"
              sx={{
                fontSize: "1.1rem",
                padding: "12px 36px",
              }}
            >
              Läs mer{" "}
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;
