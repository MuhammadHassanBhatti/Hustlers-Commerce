'use client';
import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import loginBg from "../../../public/assets/images/loginMain.webp"
import Image from 'next/image';
const page = () => {

    return (
        <Container maxWidth="lg">
            <Grid container sx={{ height: "100%", background: "#ccc", my: 4 }}>
                <Grid item lg={6} xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <Box sx={{ maxWidth: "700px", display: "flex", justifyContent: "start", alignItems: "start", flexDirection: "column" }}>
                        <Box>
                            <Typography>
                                Login to Hustlers
                            </Typography>
                        </Box>
                        <form>
                            <Box>
                                <TextField type='text' InputLabelProps={"User Name"} />
                            </Box>
                            <Box>
                                <TextField type='password' InputLabelProps={"Password"} />
                            </Box>
                        </form>
                    </Box>
                </Grid>
                <Grid item lg={6} xs={12} md={6} >
                    <Box sx={{ height: "700px" }}>
                        <Image src={loginBg} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt='login-img' />
                    </Box>
                </Grid>
            </Grid>
        </Container >
    )
}

export default page