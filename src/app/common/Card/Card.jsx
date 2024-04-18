import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import ButtonComp from '../Button/Button'
import Image from 'next/image'

const CardComp = ({
    width = "100%",
    height = "auto",
    text,
    price,
    padding,
    borderRadiius = "0",
    my = '15px',
    cardMedia,
    bgColor = "#e2e",
    view = "Click Here",
}) => {
    return (
        <Box>
            <Card sx={{ width: width, height: height, boxShadow: "none", borderRadius: borderRadiius, my: my, padding: padding }}>
                <CardContent sx={{ padding: "0px" }}>
                    <Box sx={{ position: "relative" }}>
                        <Box sx={{
                            width: "100%",
                            position: "absolute", bottom: "-20px", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", opacity: 0,
                            transition: "opacity 0.3s ease-in-out",
                            "&: hover": {
                                opacity: 1
                            }
                        }}>
                            <Typography component="div" sx={{ color: "#000", width: "100%", background: "#f7f7f7", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }} >
                                {view}
                            </Typography>
                        </Box>
                        <Image src={cardMedia} style={{
                            objectFit: 'cover', objectPosition: '100% 0',
                            width: "100%", height: "100%",
                        }} alt='card-media' />
                    </Box>
                    <Typography variant="body2">
                        {text}
                    </Typography>
                    <Typography variant="body2">
                        {price}
                    </Typography>
                </CardContent>
            </Card>
        </Box >
    )
}

export default CardComp