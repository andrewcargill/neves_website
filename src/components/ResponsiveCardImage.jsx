import React from "react";
import { Box } from "@mui/material";

/**
 * Simple responsive image with object-fit and object-position
 */
export default function ResponsiveCardImage({
  src,
  alt,
  height = 300,
  focal = "center",
}) {
  return (
    <Box
      sx={{
        height: `${height}px`,
        overflow: "hidden",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: focal,
          display: "block",
        }}
      />
    </Box>
  );
}
