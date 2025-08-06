import React from "react";
import {
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";

import SculptureShowcase from "../components/sculptures/SculptureShowcase";
import CommissionSteps from "../components/sculptures/CommissionSteps";
import ArtistVision from "../components/sculptures/ArtistVision";

///This page is used in the finished site

function Sculptures() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect if screen is small

  return (
    <Box mb={8}>
      <ArtistVision />
      <div className="fade-in-4">
        <SculptureShowcase />
      </div>
      <div className="fade-in-4">
        <CommissionSteps />
      </div>
    </Box>
  );
}

export default Sculptures;
