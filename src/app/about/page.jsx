'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import Heading from '../common/Heading/Heading';
import Aos from 'aos';
import "aos/dist/aos.css";
import aboutBanner from "../../../public/assets/images/aboutImage.webp"
import Image from 'next/image';
const Page = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <Container maxWidth="xlg">
            <Box data-aos="zoom-in-down" sx={{ my: 8 }}>
                <Heading sx={{ fontSize: "80px" }} text={"Our Story"} />
            </Box>
            <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", my: 5 }}>
                <Grid item lg={10} md={11} sm={12} xs={12}>
                    <Grid container spacing={5} sx={{ minHeight: "500px", display: "flex", justifyContent: "center", alignItems: "center", }}>
                        <Grid item lg={6}>
                            <Box data-aos="zoom-in-down" sx={{ padding: "30px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
                                <Box sx={{ mb: 2, }}>
                                    <Typography variant='paragraph' sx={{ fontSize: "15px", fontWeight: "500" }}>
                                        I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                                    </Typography>
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant='paragraph' sx={{ fontSize: "15px", fontWeight: "500" }}>
                                        This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
                                    </Typography>
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant='paragraph' sx={{ fontSize: "15px", fontWeight: "500" }}>
                                        At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6}>
                            <Box data-aos="flip-right">
                                <Image src={aboutBanner} style={{ height: "100%", width: "100%", objectFit: "fill" }} />
                            </Box>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Page