import React from "react";
import {
  useMediaQuery,
  useTheme,
  Typography,
  Box,
  Button,
} from "@mui/material";
import SculptureHeader from "../components/sculptures/SculptureHeader";
import SculptureShowcase from "../components/sculptures/SculptureShowcase";
import CommissionSteps from "../components/sculptures/CommissionSteps";
import ArtistVision from "../components/sculptures/ArtistVision";

function Sculptures() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect if screen is small

///This page is NOT used in the finished site

  return (
    <Box mb={8}>
      <SculptureHeader />

      <ArtistVision />

      <SculptureShowcase />

      <Typography variant="h4" align="center" sx={{ marginTop: 6 }}>
        What Our Clients Say
      </Typography>

      <Box sx={{ maxWidth: "700px", marginX: "auto", marginTop: 2 }}>
        <Typography variant="body1" sx={{ fontStyle: "italic" }}>
          "The sculpture transformed our city square, becoming an icon for the
          community. It’s a testament to craftsmanship and vision."
        </Typography>
        <Typography variant="subtitle1" align="right" sx={{ marginTop: 2 }}>
          – City Council, Umeå
        </Typography>
      </Box>

      <CommissionSteps />

      <Typography variant="h5" align="center" sx={{ marginTop: 6 }}>
        Ready to Commission a Unique Sculpture?
      </Typography>

      <Typography align="center" sx={{ marginBottom: 4 }}>
        Contact us to discuss your project and bring your vision to life.
      </Typography>

      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/contact"
        >
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
}

export default Sculptures;
