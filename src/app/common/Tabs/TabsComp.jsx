import Box from '@mui/material/Box';
import * as React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';

const TabsComp = ({ tabs, defaultValue }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs value={value} onChange={handleChange} defaultValue={defaultValue} aria-label="basic tabs example">
                    {
                        tabs?.map(({ label }, index) => (
                            <Tab key={index} label={label} />
                        ))
                    }
                </Tabs>
                <Box sx={{
                    margin: "30px 0px",
                    padding: "0px 20px"
                }}
                    role="tabpanel"
                >
                    {
                        tabs?.map(({ component }, index) => (
                            <Box key={index} hidden={value !== index}>
                                {component}
                            </Box>
                        ))}
                </Box>
            </Box>
            <Box>
            </Box>
        </Box>
    );
}

TabsComp.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default TabsComp;

























