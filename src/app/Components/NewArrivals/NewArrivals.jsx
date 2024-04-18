"use client";
import CardComp from "@/app/common/Card/Card";
import Heading from "@/app/common/Heading/Heading";
import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { productData } from "../../../../public/static/staticdata";
import "aos/dist/aos.css";
import AOS from "aos";

const NewArrivals = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Box sx={{ my: 6 }}>
          <Heading text={"NEW ARRIVALS"} />
        </Box>
        <Grid container spacing={6}>
          {productData?.map(({ text, media, price }, ind) => {
            return (
              <Grid key={ind} item xs={6} lg={3} md={3} sm={6}>
                <Box data-aos="zoom-in">
                  <CardComp
                    sx={{ backgroundColor: "red" }}
                    cardMedia={media}
                    text={text}
                    price={price}
                    view="Quick View"
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default NewArrivals;
