"use client"
import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { faqListItems, listItems, socialItems } from '../../../../public/static/staticdata'
import ButtonComp from '@/app/common/Button/Button'
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    inputClass: {
        '& input::placeholder': {
            color: '#fff',
        },
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xlg">
            <Box sx={{ width: "100%", background: "#000", color: "#fff", minHeight: "300px", mb: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid item lg={9} md={10} sm={11} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item lg={3} md={4} sm={6} xs={6}>
                                <Box sx={{ padding: "0px 15px" }}>
                                    <ul style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
                                        {
                                            listItems?.map(({ text }, ind) => {
                                                return (
                                                    <li style={{ listStyle: "none", margin: "20px 5px 0px 5px", cursor: "pointer" }} key={ind}>
                                                        {text}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Box>
                            </Grid>
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box sx={{ padding: "0px 15px" }}>
                                    <ul style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
                                        {
                                            faqListItems?.map(({ text }, ind) => {
                                                return (
                                                    <li style={{ listStyle: "none", margin: "20px 5px 0px 5px", cursor: "pointer" }} key={ind}>
                                                        {text}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Box>
                            </Grid>
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box sx={{ padding: "0px 15px" }}>
                                    <ul style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
                                        {
                                            socialItems?.map(({ text }, ind) => {
                                                return (
                                                    <li style={{ listStyle: "none", margin: "20px 5px 0px 5px", cursor: "pointer" }} key={ind}>
                                                        {text}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Box>
                            </Grid>
                            <Grid item lg={3} md={4} sm={6} xs={12} >
                                <Box sx={{ padding: "0px 15px", my: 2 }}>
                                    <Box>
                                        <Typography variant='paragraph'>Join our mailing list</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='paragraph2'>and get 10% off</Typography>
                                    </Box>
                                    <Box sx={{ my: 2 }} >
                                        <TextField
                                            className={classes.inputClass}
                                            type='email'
                                            placeholder='Enter your email here*'
                                            sx={{ border: "2px solid #fff", height: "60px", width: "100%" }}
                                        />

                                    </Box>
                                    <ButtonComp text={"Subscribe"} sx={{ width: "100%", background: "#FF6200", fontFamily: 'Montserrat', height: "45px" }} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </Container>
    )
}

export default Footer