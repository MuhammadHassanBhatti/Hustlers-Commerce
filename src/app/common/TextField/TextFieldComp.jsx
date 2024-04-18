import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const TextFieldComp = React.forwardRef(
    (
        {
            type,
            value,
            label,
            required = false,
            placeholder,
            displaySearchIcon = false,
            onChange,
            sx = {},
        },
        ref
    ) => {
        return (
            <Grid container>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography component="label" sx={{ my: 1, fontSize: '14px', ...sx }}>
                        {label} {required && <span style={{ color: 'red' }}>*</span>}
                    </Typography>
                    <TextField
                        value={value}
                        inputRef={ref} // Ensure that the ref is correctly assigned
                        onChange={onChange}
                        placeholder={placeholder}
                        required
                        type={type}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {displaySearchIcon && <SearchIcon sx={{ cursor: 'pointer' }} />}
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Grid>
        );
    }
);

export default TextFieldComp;
