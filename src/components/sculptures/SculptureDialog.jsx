import React from "react";
import Slider from "react-slick";
import {
  Dialog,
  DialogContent,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SculptureDialog({ open, onClose, sculpture }) {
  if (!sculpture) return null;

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Extract images from the sculpture data
  const images = sculpture.images
    ? Object.values(sculpture.images)
    : [sculpture.img];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{ sx: { borderRadius: "16px", boxShadow: "none" } }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <Card>
          {/* Image Slider */}
          <Slider {...settings}>
            {images.map((imageObj, index) => {
  const src = imageObj.src || imageObj; // supports backward compatibility
  const focal = imageObj.focal || sculpture.dialogFocal || sculpture.focal || "center";
  const fit = imageObj.fit || "cover";

  return (
    <Box
      key={index}
      sx={{
        height: { xs: 300, sm: 400 },
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <img
        src={src}
        alt={`${sculpture.title} - Image ${index + 1}`}
        loading="lazy"
        decoding="async"
        style={{
          width: "100%",
          height: "100%",
          objectFit: fit,
          objectPosition: focal,
          display: "block",
        }}
      />
    </Box>
  );
})}

          </Slider>

          <CardContent>
            {/* Header Section */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {sculpture.title}
              </Typography>
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Description */}
            <Typography variant="body1" sx={{ marginBottom: 4 }}>
              {sculpture.description}
            </Typography>

            <Divider sx={{ marginY: 2 }} />

            {/* Additional Information Section */}
            <Box
              sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Year:
                </Typography>
                <Typography variant="body2">{sculpture.year}</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Location:
                </Typography>
                <Typography variant="body2">{sculpture.location}</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Dimensions:
                </Typography>
                <Typography variant="body2">{sculpture.dimensions}</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Material:
                </Typography>
                <Typography variant="body2">{sculpture.material}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

export default SculptureDialog;
