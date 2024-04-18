"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { contactUsData, stockList } from "../../../public/static/staticdata";
import Heading from "../common/Heading/Heading";

const Page = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container maxWidth="xlg">
      <Box data-aos="zoom-in-down" sx={{ my: 5 }}>
        <Heading
          sx={{
            fontSize: {
              xs: "40px",
              lg: "80px",
              md: "70px",
              sm: "50px",
            },
          }}
          text={"Contact Us"}
        />
      </Box>
      <Grid container spacing={6}>
        {contactUsData?.map(
          ({ heading, title1, title2, title3, fontWeight }, ind) => {
            return (
              <Grid
                key={ind}
                item
                xs={6}
                lg={4}
                md={4}
                sm={4}
                sx={{
                  textAlign: "center",
                }}
              >
                <Box data-aos="zoom-in">
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        fontFamily: "Montserrat', sans-serif",
                      }}
                    >
                      {heading}
                    </Typography>
                  </Box>
                  <Box sx={{ my: 4 }}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "light",
                      }}
                    >
                      {title1}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "light",
                      }}
                    >
                      {title2}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "light",
                      }}
                    >
                      {title3}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          }
        )}
      </Grid>
      {/*  */}
      <Grid container spacing={2}>
        <Grid item lg={12} xs={12}>
          <Box data-aos="zoom-in">
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
                StockList
              </Typography>
            </Box>
          </Box>
        </Grid>
        {stockList?.map(({ title1, title2, title3 }, ind) => {
          return (
            <Grid
              key={ind}
              item
              xs={6}
              lg={4}
              md={4}
              sm={4}
              sx={{ textAlign: "center" }}
            >
              <Box data-aos="zoom-in">
                <Box sx={{ my: 4 }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: "light" }}>
                    {title1}
                  </Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: "light" }}>
                    {title2}
                  </Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: "light" }}>
                    {title3}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item lg={6} md={8} sm={10} sx={{ mb: 3 }}>
            <Box data-aos="zoom-in">
              <Box sx={{ textAlign: "center", fontWeight: "500" }}>
                For inquiries regarding an order, please include your order
                number and the date your order was placed
              </Box>
            </Box>
          </Grid>
          <Grid item lg={8} md={9} sm={10} sx={{ mb: 3 }}>
            <Grid container spacing={1}>
              <Grid item lg={3} md={3} sm={3} xs={4}>
                <Box data-aos="zoom-in">
                  <TextField
                    sx={{ width: "100%", border: "2px solid #ff6200" }}
                    type="text"
                    placeholder="Name"
                  />
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={4}>
                <Box data-aos="zoom-in">
                  <TextField
                    sx={{ width: "100%", border: "2px solid #ff6200" }}
                    type="email"
                    placeholder="Email"
                  />
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Box data-aos="zoom-in">
                  <TextField
                    sx={{ width: "100%", border: "2px solid #ff6200" }}
                    type="text"
                    placeholder="How Can we Help?"
                  />
                </Box>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={12}>
                <Box data-aos="zoom-in">
                  <Button
                    sx={{
                      background: "#ff6200",
                      color: "#fff",
                      borderRadius: "0px",
                      width: "100%",
                      height: "60px",
                    }}
                  >
                    submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Page;
