'use client';
import { createTheme } from "@mui/material";
export function createCustomTheme(options = {}) {
    const {
        palette = {
            primary: {
                main: "#FF6200",
            },
            secondary: {
                main: "#000",
                light: "#DEDEDE",
            },
            error: {
                main: "#d32f2f",
                light: "#ef5350",
                dark: "#c62828",
                contrastText: "#fff",
            },
            warning: {
                main: "#ff9800",
                light: "rgb(255, 200, 117)",
                dark: "rgb(178, 122, 0)",
                contrastText: "rgba(0, 0, 0, 0.87)",
            },
            info: {
                main: "#2196f3",
                light: "rgb(71, 145, 219)",
                dark: "rgb(17, 82, 147)",
                contrastText: "#fff",
            },
            success: {
                main: "#4caf50",
                light: "rgb(111, 207, 151)",
                dark: "rgb(53, 122, 63)",
                contrastText: "rgba(0, 0, 0, 0.87)",
            },
            text: {
                primary: "#666666",
                secondary: "#222222",
                disabled: "rgba(0, 0, 0, 0.38)",
                hint: "rgba(0, 0, 0, 0.38)",
            },
            background: {
                paper: "#fff",
                default: "#F8FAFB",
            },
        },
        typography = {
            h1: {
                fontWeight: 800,
                fontSize: "2.5rem",
                lineHeight: 1,
            },
            h2: {
                fontWeight: 700,
                fontSize: "2rem",
                lineHeight: 1,
            },
            h3: {
                fontWeight: 700,
                fontSize: "1.2rem",
                lineHeight: 1,
            },
            h4: {
                fontWeight: 700,
                fontSize: "1.1rem",
                lineHeight: 1,
            },
            h5: {
                fontWeight: 800,
                fontSize: "1.1rem",
                lineHeight: 1.2,
            },
            h6: {
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: 1.2,
            },
            subtitle1: {
                fontWeight: 700,
                fontSize: "0.875rem",
                lineHeight: 1.5,
            },
            subtitle2: {
                fontWeight: 700,
                fontSize: "0.5rem",
                lineHeight: 1.5,
                marginTop: "10px",
            },
            body1: {
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: 1,
            },
            body2: {
                fontWeight: 500,
                fontSize: "0.875rem",
                lineHeight: 1.5,
            },
            button: {
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: 1,
            },
            caption: {
                fontWeight: 400,
                fontSize: "0.75rem",
                lineHeight: 1.5,
            },
            overline: {
                fontWeight: 500,
                fontSize: "0.875rem",
                lineHeight: 1.5,
            },
        },
    } = options

    let theme = createTheme({
        palette,
        typography
    })
    return theme;
}