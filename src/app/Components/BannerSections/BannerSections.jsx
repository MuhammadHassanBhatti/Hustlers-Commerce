
'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import { createCustomTheme } from '@/app/Theme/theme';
import ButtonComp from '@/app/common/Button/Button';

const BannerSections = () => {
    const theme = createCustomTheme();

    return (
        <Box sx={{
            minHeight: "320px", width: "100%", backgroundColor: theme.palette.primary.main, display: "flex", justifyContent: "center", alignItems: "center",
            fontFamily: "'Montserrat', sans-serif",
        }}>
            <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid item lg={8} md={10} sm={12} xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: "#fff", }}>
                    <Typography sx={{
                        fontFamily: 'Montserrat',
                        fontSize: {
                            lg: "55px",
                            md: "50px",
                            sm: "40px",
                            xs: "30px"
                        },
                        mb: 2,
                        fontWeight: "700"
                    }}>Free Shipping</Typography>
                    <Typography sx={{
                        fontSize: {
                            lg: "26px",
                            md: "22px",
                            sm: "17px",
                            xs: "10px"
                        },
                        fontWeight: "500",
                        fontFamily: 'Montserrat'
                    }}>ON ORDERS OVER $50 - USE COUPON CODE OVER50</Typography>
                    <Box sx={{
                        width: "100%", display: "flex", justifyContent: "space-evenly", mt: 4, flexWrap: "wrap",
                    }}>
                        <ButtonComp text={"Shop Women"} sx={{ mb: 1, fontSize: "17px", backgroundColor: "none", border: "2px solid #fff", borderRadius: "0px", width: "230px", fontFamily: 'Montserrat', height: "45px" }} />
                        <ButtonComp text={"Shop Men"} sx={{ mb: 1, backgroundColor: "none", border: "2px solid #fff", borderRadius: "0px", width: "230px", fontSize: "17px", fontFamily: 'Montserrat', height: "45px" }} />
                        <ButtonComp text={"Shop Sale"} sx={{ mb: 1, backgroundColor: "none", border: "2px solid #fff", borderRadius: "0px", width: "230px", fontFamily: 'Montserrat', fontSize: "17px", height: "45px" }} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BannerSections