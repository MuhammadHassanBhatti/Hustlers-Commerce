import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../../../state/index';
import ButtonComp from '../Button/Button';

export const ControlledComponent = () => {
    const [inpValue, setInpValue] = useState(null)
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault()
        alert(`inpValue: ${inpValue}`);
    }

    const handleChange = (e) => {
        setInpValue(e.target.value)
    }

    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <TextFieldComp
                    type="text"
                    label="Controlled Component"
                    value={inpValue}
                    onChange={handleChange}
                />
                <Typography>
                    {inpValue}
                </Typography>
                <ButtonComp text={"Submit"} type={"submit"} />
            </form> */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ButtonComp onClick={() => { dispatch(actionCreator.increment(100)) }} text={"+"} sx={{ mx: 2, fontSize: "20px", padding: "20px" }} />
                    <Typography>
                        Add to Cart
                    </Typography>
                    <ButtonComp onClick={() => { dispatch(actionCreator.decrement(100)) }} text={"-"} sx={{ mx: 2, padding: "20px", fontSize: "20px" }} />
                </Box>
            </Box>
        </>
    );
};
