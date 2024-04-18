import Button from '@mui/material/Button';
import * as React from 'react';

export default function GenericBtn(
    {
        text,
        width = "100%",
        height = "100%",
        padding = "12px 20px",
        bgColor = "#2e2",
        textColor = "#fff",
        variant = "contained",
        ...sx
    }
) {
    return (
        <Button sx={{ width: width, height: height, padding: padding, background: bgColor, color: textColor, ...sx }} >{text}</Button>
    );
}