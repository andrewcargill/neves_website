import React, { useState } from "react";
import Slider from "react-slick";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import SculptureDialog from "./SculptureDialog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sculptureData from "../../data/sculptureData";
import ResponsiveCardImage from "../ResponsiveCardImage";

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      display: { xs: "none", md: "flex" },
      position: "absolute",
      left: "-40px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      color: "black",
      "&:hover": {
        backgroundColor: "primary.main",
      },
    }}
  >
    <ArrowBackIosNew sx={{ fontSize: "2.5rem" }} />
  </IconButton>
);

const CustomNextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      display: { xs: "none", md: "flex" },
      position: "absolute",
      right: "-40px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      color: "black",
      "&:hover": {
        backgroundColor: "primary.main",
      },
    }}
  >
    <ArrowForwardIos sx={{ fontSize: "2.5rem" }} />
  </IconButton>
);

function SculptureShowcase() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSculpture, setSelectedSculpture] = useState(null);

  const handleCardClick = (sculpture) => {
    setSelectedSculpture(sculpture);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedSculpture(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipe: true,
    touchMove: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ marginTop: 6, marginBottom: 8 }}>
      <Slider {...settings}>
        {sculptureData.map((item, index) => (
          <Box key={index} sx={{ padding: 2 }}>
            <Card
              onClick={() => handleCardClick(item)} // Open dialog on click
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                height: "500px",
                cursor: "pointer",
              }}
            >
              {/* <CardMedia
                component="img"
                height="300"
                image={item.img}
                alt={item.title}
              /> */}
              <ResponsiveCardImage
                src={item.img}
                alt={item.title}
                focal={item.focal || "center"}
                height={300}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ marginBottom: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1" align="center">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>

      {/* Dialog Component */}
      <SculptureDialog
        open={openDialog}
        onClose={handleCloseDialog}
        sculpture={selectedSculpture}
      />
    </Box>
  );
}

export default SculptureShowcase;
