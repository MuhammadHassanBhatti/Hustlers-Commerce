import { Box } from '@mui/material'
import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <>

            <Box sx={{
                background: "#fff", height: "auto",
                padding: "15px 10px",
                borderRadius: "15px",
                margin: "0px 0px 10px 0px",
            }}>
                {children}
            </Box>
        </>
    )
}

export default Wrapper