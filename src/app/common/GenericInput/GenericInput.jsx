import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const GenericInput = ({
    type = "text",
    placeholder,
    width = "100%",
    height = "50px",
    cols = 6,
    label,
    ...sx
}) => {
    return (
        <>
            <Grid item mobile={12} tablet={cols} laptop={cols} desktop={cols}>
                <Typography>
                    {label}
                </Typography>
                <TextField type={type} placeholder={placeholder} sx={{ width: "100%", ...sx }} />

            </Grid>
        </>
    )
}

export default GenericInput