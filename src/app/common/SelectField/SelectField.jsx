import React from 'react';
import { Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

export default function SelectField({
    label,
    options,
    value,
    onChange,
    width = "100%",
    defaultValue,
    sx = {},
}) {
    return (
        <Grid container>
            <InputLabel>{label}</InputLabel>
            <Autocomplete
                value={value}
                onChange={onChange}
                disablePortal={true}
                defaultValue={defaultValue}
                options={options || []}
                sx={{ width: width, ...sx }}
                renderInput={(params) => <TextField  {...params} />}
            />
        </Grid>
    );
}

