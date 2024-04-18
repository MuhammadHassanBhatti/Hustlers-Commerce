import { Box } from '@mui/material'
import React from 'react'

const Heading = ({ text,
    fontSize = "65px",
    fontWeight = "700",
    sx }) => {
    return (
        <Box sx={{ textAlign: "center", fontSize: fontSize, fontWeight: fontWeight, ...sx }}>
            {text}
        </Box>
    )
}

export default Heading