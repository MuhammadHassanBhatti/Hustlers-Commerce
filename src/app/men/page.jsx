"use client";
import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Heading from "../common/Heading/Heading";
import { menProductData } from "../../../public/static/staticdata";
import CardComp from "../common/Card/Card";
import Aos from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container maxWidth="xlg">
      <Box data-aos="zoom-in-down" sx={{ my: 5 }}>
        <Heading sx={{ fontSize: "80px" }} text={"Men"} />
      </Box>
      <Grid container spacing={6}>
        {menProductData?.map(({ text, media, price }, ind) => {
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
    </Container>
  );
};

export default Page;
