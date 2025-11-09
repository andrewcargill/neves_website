import React from "react";
import { useMediaQuery, useTheme, Box } from "@mui/material";

import SculptureShowcase from "../components/sculptures/SculptureShowcase";
import CommissionSteps from "../components/sculptures/CommissionSteps";
import ArtistVision from "../components/sculptures/ArtistVision";
import { Helmet } from "react-helmet";

///This page is used in the finished site

function Sculptures() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect if screen is small

  return (
    <>
      <Helmet>
        <title>Skulpturer – Neves Art & Craft</title>
        <meta
          name="description"
          content="Utforska unika handgjorda skulpturer av Andreas Neves – konstverk skapade av trä och sten, med fokus på naturens former och materialens själ."
        />
        <meta property="og:title" content="Skulpturer – Neves Art & Craft" />
        <meta
          property="og:description"
          content="Se Andreas Neves skulpturer – handgjorda konstverk i trä och sten, samt privata beställningsarbeten skapade med känsla och precision."
        />
        <meta property="og:image" content="https://neves.se/siteImage.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neves.se/traskulpturer" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Box mb={8}>
        <ArtistVision />
        <div className="fade-in-4">
          <SculptureShowcase />
        </div>
        <div className="fade-in-4">
          <CommissionSteps />
        </div>
      </Box>
    </>
  );
}

export default Sculptures;
