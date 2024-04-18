"use client";
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createCustomTheme } from "./Theme/theme";
import BannerSections from "./Components/BannerSections/BannerSections";
import ImagesSection from "./Components/ImagesSection/ImagesSection";
import NewArrivals from "./Components/NewArrivals/NewArrivals";

const Home = () => {
  const theme = createCustomTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xlg">
          <BannerSections />
          <ImagesSection />
          <NewArrivals />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Home;
