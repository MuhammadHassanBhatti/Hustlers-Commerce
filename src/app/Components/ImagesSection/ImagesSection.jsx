"use client";
import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";
import bannerOne from "../../../../public/assets/images/banner1.webp";
import bannerTwo from "../../../../public/assets/images/banner2.webp";
import bannerThree from "../../../../public/assets/images/banner3.webp";
import "aos/dist/aos.css";
import AOS from "aos";

const ImagesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can customize the duration and other options
  }, []);

  return (
    <Box sx={{ width: "100%", mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Box data-aos="flip-left" sx={{ width: "100%", height: "500px" }}>
            <Image
              src={bannerOne}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              alt="Banner One"
            />
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Box data-aos="flip-left" sx={{ width: "100%", height: "500px" }}>
            <Image
              src={bannerTwo}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              alt="Banner Two"
            />
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <Box data-aos="flip-right" sx={{ width: "100%", height: "500px" }}>
            <Image
              src={bannerThree}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "10%",
              }}
              alt="Banner Three"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImagesSection;
