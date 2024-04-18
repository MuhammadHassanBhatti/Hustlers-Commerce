import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';

const BadgeComponent = () => {
    return (
        <Box sx={{ color: 'action.active' }}>
            <IconButton>
                <Badge color="error" variant="dot">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Box>
    )
}

export default BadgeComponent